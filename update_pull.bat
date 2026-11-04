@echo off
setlocal
cd /d "%~dp0"

echo [1/1] Pulling latest changes from GitHub...
git pull origin main

echo.
echo ========================================================
echo [OK] Sync complete!
echo Please refresh your browser (Ctrl+Shift+R).
echo ========================================================
echo.
pause
