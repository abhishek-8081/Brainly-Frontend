@echo off
echo 🚀 Deploying Brainely Frontend to Netlify...
echo.

echo 🔧 Running linting check...
call npm run lint
if errorlevel 1 (
    echo ❌ Linting failed! Please fix errors before deploying.
    pause
    exit /b 1
)

echo ✅ Linting passed!
echo.

echo 🏗️ Building production bundle...
call npm run build
if errorlevel 1 (
    echo ❌ Build failed! Please fix errors before deploying.
    pause
    exit /b 1
)

echo ✅ Build successful!
echo.

echo 📦 Adding changes to git...
git add .

echo 📝 Committing changes...
git commit -m "fix: Hardcode environment variables for immediate Netlify deployment"

echo 🚀 Pushing to repository (triggers Netlify deployment)...
git push origin main

echo.
echo ✅ Deployment initiated!
echo 📡 Your site will be live at: https://brainly-frontend.netlify.app/
echo 🔄 Netlify will automatically build and deploy in 1-2 minutes.
echo.
echo 🧪 After deployment, test:
echo   1. Visit the site and check debug panel (bottom-right)
echo   2. Try signing up with test credentials
echo   3. Should work without network errors!
echo.

pause
