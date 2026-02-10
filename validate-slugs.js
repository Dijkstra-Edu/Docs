// #region agent log
import { readFileSync, readdirSync, statSync, appendFileSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const LOG_PATH = join(__dirname, '.cursor', 'debug.log');
const CONTENT_DIR = 'src/content/docs';
const CONFIG_FILE = 'astro.config.mjs';

function logDebug(data) {
  const logEntry = JSON.stringify({
    ...data,
    timestamp: Date.now(),
    sessionId: 'debug-session',
  }) + '\n';
  try {
    appendFileSync(LOG_PATH, logEntry, 'utf-8');
  } catch (err) {
    // Log file will be created automatically
  }
}

// Get all markdown files and their slugs
function getAllContentSlugs(dir, basePath = '') {
  const slugs = [];
  const fullDirPath = join(__dirname, dir);
  const entries = readdirSync(fullDirPath, { withFileTypes: true });
  
  logDebug({
    location: 'validate-slugs.js:getAllContentSlugs',
    message: 'Scanning directory',
    data: { dir: fullDirPath, basePath, entryCount: entries.length },
    hypothesisId: 'A',
  });

  for (const entry of entries) {
    const fullPath = join(fullDirPath, entry.name);
    if (entry.isDirectory()) {
      slugs.push(...getAllContentSlugs(join(dir, entry.name), join(basePath, entry.name)));
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      const slug = join(basePath, entry.name.replace(/\.(md|mdx)$/, '')).replace(/\\/g, '/');
      slugs.push(slug);
      
      logDebug({
        location: 'validate-slugs.js:getAllContentSlugs',
        message: 'Found content file',
        data: { fullPath, slug, fileName: entry.name },
        hypothesisId: 'A',
      });
    }
  }
  return slugs;
}

// Extract slugs from sidebar config
function extractSidebarSlugs(configContent) {
  const slugs = [];
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  
  logDebug({
    location: 'validate-slugs.js:extractSidebarSlugs',
    message: 'Extracting slugs from config',
    data: { configLength: configContent.length },
    hypothesisId: 'B',
  });

  while ((match = slugRegex.exec(configContent)) !== null) {
    const slug = match[1];
    slugs.push(slug);
    
    logDebug({
      location: 'validate-slugs.js:extractSidebarSlugs',
      message: 'Found sidebar slug',
      data: { slug, matchIndex: match.index },
      hypothesisId: 'B',
    });
  }
  
  return slugs;
}

// Main validation
try {
  logDebug({
    location: 'validate-slugs.js:main',
    message: 'Starting slug validation',
    data: {},
    hypothesisId: 'A',
  });

  const contentSlugs = getAllContentSlugs(CONTENT_DIR);
  const configPath = join(__dirname, CONFIG_FILE);
  const configContent = readFileSync(configPath, 'utf-8');
  const sidebarSlugs = extractSidebarSlugs(configContent);

  logDebug({
    location: 'validate-slugs.js:main',
    message: 'Comparison results',
    data: {
      contentSlugCount: contentSlugs.length,
      sidebarSlugCount: sidebarSlugs.length,
      contentSlugs: contentSlugs.slice(0, 10), // First 10 for brevity
      sidebarSlugs: sidebarSlugs.slice(0, 10),
    },
    hypothesisId: 'C',
  });

  // Check for mismatches
  for (const sidebarSlug of sidebarSlugs) {
    const exists = contentSlugs.includes(sidebarSlug);
    
    logDebug({
      location: 'validate-slugs.js:main',
      message: 'Checking slug existence',
      data: {
        sidebarSlug,
        exists,
        similarSlugs: contentSlugs.filter(s => 
          s.includes(sidebarSlug.split('/').pop()) || 
          sidebarSlug.includes(s.split('/').pop())
        ),
      },
      hypothesisId: 'D',
    });

    if (!exists) {
      // Find similar slugs (typo detection)
      const similar = contentSlugs.filter(s => {
        const sidebarBase = sidebarSlug.split('/').pop();
        const contentBase = s.split('/').pop();
        return sidebarBase.length === contentBase.length && 
               sidebarBase !== contentBase &&
               sidebarBase.toLowerCase() === contentBase.toLowerCase();
      });

      logDebug({
        location: 'validate-slugs.js:main',
        message: 'MISMATCH DETECTED',
        data: {
          missingSlug: sidebarSlug,
          similarSlugs: similar,
          exactMatch: false,
        },
        hypothesisId: 'E',
      });
    }
  }
} catch (error) {
  logDebug({
    location: 'validate-slugs.js:main',
    message: 'Validation error',
    data: { error: error.message, stack: error.stack },
    hypothesisId: 'F',
  });
}
// #endregion agent log
