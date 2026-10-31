@echo off
chcp 65001 > nul
title EdTech GDPT 2018 - Soan Giao An & Slide
echo =====================================================================
echo    ĐANG KHỞI ĐỘNG HỆ THỐNG SOẠN GIÁO ÁN VÀ SLIDE GDPT 2018...
echo =====================================================================
echo.
echo Đang mở trình duyệt tại: http://localhost:5173/
start "" "http://localhost:5173/"
echo.
echo Hệ thống đang chạy. Vui lòng KHÔNG đóng cửa sổ này khi đang dùng ứng dụng.
echo.
call npm.cmd run dev -- --host --port 5173
pause
