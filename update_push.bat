@echo off
chcp 65001 >nul
set "PATH=%PATH%;C:\Users\USER\AppData\Local\Programs\MinGit\cmd"
cd /d "%~dp0"

echo [1/3] europocket.html -> index.html 동기화 중...
copy /Y "europocket.html" "index.html" >nul

echo [2/3] Git 변경사항 커밋 중...
git add -A
git commit -m "Update EuroPocket app"

echo [3/3] GitHub 원격 저장소로 배포(Push) 중...
git push -u origin main

echo.
echo ✅ 배포 완료! 휴대폰 앱을 새로 열면 최신 버전이 자동 반영됩니다.
pause
