@echo off
chcp 65001 >nul
set "PATH=%PATH%;C:\Users\USER\AppData\Local\Programs\MinGit\cmd"
cd /d "%~dp0"

echo [1/1] GitHub 원격 저장소에서 최신 코드 당겨오는 중 (Pull)...
git pull origin main

echo.
echo ✅ 최신 버전 동기화 완료! 브라우저를 새로고침(Ctrl+Shift+R)하세요.
pause
