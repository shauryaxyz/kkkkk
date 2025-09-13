@echo off
REM Fully hidden demo launcher

REM Start backend hidden
start "" /min powershell -WindowStyle Hidden -Command "cd 'D:\panchakarma-demo\backend'; npm start"

REM Wait 5 seconds for backend to boot
timeout /t 5 /nobreak >nul

REM Start frontend hidden
start "" /min powershell -WindowStyle Hidden -Command "cd 'D:\panchakarma-demo\frontend'; npm run dev"

REM Wait 3 seconds for frontend to boot
timeout /t 3 /nobreak >nul

REM Open frontend in default browser
start "" "http://localhost:5173"

exit
