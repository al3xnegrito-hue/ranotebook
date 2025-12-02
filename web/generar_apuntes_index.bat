@echo off
REM Genera apuntes_index.js a partir de las carpetas y PDFs en ..\pdfs
REM Guarda este archivo en la carpeta "web" y ejecútalo con doble clic.

setlocal enabledelayedexpansion

REM Directorio donde está este .bat (debería ser ...\cultura emprendedora proyecto\web\)
set "BASE=%~dp0"
REM Carpeta de PDFs (una arriba de web, luego pdfs)
set "PDFROOT=%BASE%..\pdfs"
REM Archivo de salida
set "OUTFILE=%BASE%apuntes_index.js"

if not exist "%PDFROOT%" (
  echo No se encontro la carpeta de PDFs en:
  echo   "%PDFROOT%"
  echo Verifica que la estructura de carpetas sea correcta.
  pause
  goto :eof
)

> "%OUTFILE%" echo // Archivo generado automaticamente. No editar a mano.
>>"%OUTFILE%" echo // Se construye leyendo las carpetas dentro de ../pdfs
>>"%OUTFILE%" echo window.PDF_INDEX = {
set "firstFolder=1"

for /D %%D in ("%PDFROOT%\*") do (
  set "folderPath=%%~fD"
  set "folderName=%%~nD"

  REM Separador entre materias (objetos)
  if "!firstFolder!"=="1" (
    set "firstFolder=0"
  ) else (
    >>"%OUTFILE%" echo ,
  )

  >>"%OUTFILE%" echo   "!folderName!": [

  set "firstFile=1"
  for %%F in ("%%D\*.pdf") do (
    if "!firstFile!"=="1" (
      set "firstFile=0"
    ) else (
      >>"%OUTFILE%" echo ,
    )
    >>"%OUTFILE%" echo     { "name": "%%~nxF", "file": "../pdfs/!folderName!/%%~nxF" }
  )

  >>"%OUTFILE%" echo   ]
)

>>"%OUTFILE%" echo };
echo.
echo Se ha generado el archivo:
echo   "%OUTFILE%"
echo.
echo Si agregas o borras PDFs, vuelve a ejecutar este archivo .bat para actualizar la lista.
pause
endlocal
