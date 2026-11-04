@echo off
setlocal
cd /d "%~dp0"

echo [1/3] Syncing europocket.html to index.html...
copy /Y "europocket.html" "index.html" >nul

echo [2/3] Adding changes and committing...
git add -A
git commit -m "Update EuroPocket app"

echo [3/3] Pushing to GitHub...
git push -u origin main

echo.
echo ========================================================
echo [OK] Deployment complete!
echo Please refresh your app or browser to see the latest version.
echo ========================================================
echo.
pause
