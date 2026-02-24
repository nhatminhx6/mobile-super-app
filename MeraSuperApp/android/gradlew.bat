@echo off
set DIR=%~dp0
if defined JAVA_HOME (
  "%JAVA_HOME%\bin\java" -jar "%DIR%gradle\wrapper\gradle-wrapper.jar" %*
) else (
  java -jar "%DIR%gradle\wrapper\gradle-wrapper.jar" %*
)
