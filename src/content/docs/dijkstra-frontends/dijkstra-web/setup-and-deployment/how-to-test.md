---
title: How to Test
description: Guide to testing your local Dijkstra Web setup and verifying everything works correctly
---

This guide covers how to test your local Dijkstra Web setup to ensure everything is working correctly.

## Quick Health Check

After running the development server, perform these basic checks:

### 1. Server is Running

✅ Terminal shows `ready started server on 0.0.0.0:3000`
✅ No error messages in the terminal
✅ Process is actively running (not crashed)

### 2. Homepage Loads

1. Open browser to `http://localhost:3000`
2. Page loads without errors
3. Check browser console (Press F12) - should have no red errors
4. All images and styles load correctly

### 3. Basic Navigation Works

- Click navigation links - pages should load
- Check responsive design - resize browser window
- Test mobile menu (if on small screen)

## Authentication Testing

### Login Flow Test

1. **Navigate to login page**
   - Go to `http://localhost:3000/login`
   - Login button/form appears correctly

2. **Attempt GitHub login**
   - Click "Login with GitHub" button
   - Should redirect to GitHub OAuth page
   - If setup correctly: authorize the app
   - Should redirect back to dashboard

3. **Check session persistence**
   - After login, refresh the page
   - Should remain logged in
   - User info should display correctly

4. **Test logout**
   - Click logout button
   - Should redirect to homepage
   - Try accessing protected routes - should redirect to login

### Common Auth Issues

❌ **GitHub OAuth not working:** Check your `.env.local` file has correct `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`

❌ **Redirects failing:** Verify `NEXTAUTH_URL=http://localhost:3000` in `.env.local`

❌ **"Invalid callback URL":** Make sure your GitHub OAuth app callback URL is exactly `http://localhost:3000/api/auth/callback/github`

## Feature Testing

### Dashboard Testing

After logging in successfully:

- [ ] Dashboard page loads at `/dashboard`
- [ ] User profile information displays
- [ ] Navigation menu works
- [ ] All dashboard widgets render
- [ ] No console errors

### Profile Testing

- [ ] Can access profile page
- [ ] Profile information loads correctly
- [ ] Edit profile form appears (if implemented)
- [ ] Social links display properly
- [ ] Profile picture loads

### Progress Tracking Testing

- [ ] GitHub stats appear (if connected)
- [ ] LeetCode stats appear (if connected)
- [ ] Progress charts render
- [ ] Data updates correctly

## Database Testing

### Verify Database Connection

1. **Check Prisma Studio**
   ```bash
   npx prisma studio
   ```
   - Opens at `http://localhost:5555`
   - You can view database tables
   - Data appears correctly

2. **Check data after login**
   - Login with GitHub
   - Open Prisma Studio
   - Verify user record was created in `users` table
   - Verify account record in `accounts` table

### Common Database Issues

❌ **"Can't reach database server":** PostgreSQL is not running - start it first

❌ **"Database does not exist":** Run `createdb dijkstra` or create database manually

❌ **Migration errors:** Run `npx prisma migrate dev` to apply migrations

## Browser Testing

Test on different browsers to ensure compatibility:

### Chrome/Edge
- [ ] Application loads
- [ ] Authentication works
- [ ] Styles render correctly
- [ ] No console errors

### Firefox
- [ ] Application loads
- [ ] Authentication works
- [ ] Styles render correctly
- [ ] No console errors

### Safari (if on macOS)
- [ ] Application loads
- [ ] Authentication works
- [ ] Styles render correctly
- [ ] No console errors

## Responsive Design Testing

Test on different screen sizes:

### Desktop (1920x1080)
- [ ] Layout looks good
- [ ] All elements visible
- [ ] No horizontal scrolling

### Tablet (768x1024)
- [ ] Layout adapts properly
- [ ] Navigation menu works
- [ ] Content readable

### Mobile (375x667)
- [ ] Mobile menu appears
- [ ] Touch interactions work
- [ ] Forms are usable
- [ ] Text is readable

## API Testing

### Test API Endpoints

1. **Health check** (if implemented)
   - Open: `http://localhost:3000/api/health`
   - Should return success response

2. **User API** (requires authentication)
   - After login, check user data endpoint
   - Should return your user information

3. **Check Network tab**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Interact with the app
   - API calls should complete successfully (200 status codes)

## Performance Check

### Load Time Check

- Homepage should load in < 3 seconds
- Dashboard should load in < 5 seconds
- Page transitions should be smooth
- No visible lag or freezing

### Check for Issues

Open DevTools Console:
- No error messages (red text)
- Minimal warnings (yellow text)
- No failed network requests

## Common Issues Checklist

### If Homepage Won't Load

1. Check terminal for errors
2. Verify port 3000 is not in use
3. Try restarting the dev server
4. Clear `.next` folder and restart

### If Styles Look Wrong

1. Check `globals.css` is imported in layout
2. Verify Tailwind is configured correctly
3. Clear browser cache
4. Restart dev server

### If Authentication Fails

1. Verify `.env.local` exists and has all variables
2. Check GitHub OAuth app settings match
3. Verify callback URL is correct
4. Try regenerating `NEXTAUTH_SECRET`

### If Database Errors Occur

1. Ensure PostgreSQL is running
2. Check `DATABASE_URL` in `.env.local`
3. Run `npx prisma generate`
4. Run `npx prisma migrate dev`

## Essential Test Checklist

Before considering your local setup complete:

- [ ] Development server starts without errors
- [ ] Homepage loads successfully
- [ ] Can navigate to different pages
- [ ] Login with GitHub works
- [ ] After login, dashboard is accessible
- [ ] Logout works correctly
- [ ] No critical errors in browser console
- [ ] Database connection works
- [ ] User data persists after refresh
- [ ] Basic responsive design works

## When Everything Works

Once all tests pass:

✅ Your local development environment is ready!
✅ You can start exploring the codebase
✅ You can pick an issue to work on
✅ You can start contributing

## Getting Help

If tests fail and you can't resolve the issue:

- Check the [How to Run Locally](/setup-and-deployment/how-to-run-locally) guide again
- Look for similar issues on [GitHub Issues](https://github.com/Dijkstra-Edu/Dijkstra-Web/issues)
- Ask for help on [Discord](https://discord.com/invite/Ct82yF3KAU)
- Create a new issue with details about the problem

---

*Remember: A properly tested setup means confident development! 🎯*