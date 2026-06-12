@echo off
title D&D AI Dungeon Master — Local Server
echo ============================================
echo   D&D AI Dungeon Master
echo ============================================
echo.
echo Opening http://localhost:3000 in your browser...
echo Close this window or press Ctrl+C to stop.
echo.
echo ============================================

REM Start http-server using Node directly
start http://localhost:3000
node node_modules/http-server/bin/http-server . -p 3000 -c-1 --cors

pause
