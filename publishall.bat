echo off

echo Restoring Project

call dotnet restore

echo Publishing Application 

call dotnet publish -r win-x86 --self-contained --configuration Release
call dotnet publish -r win-x64 --self-contained --configuration Release
call dotnet publish -r linux-x64 --self-contained --configuration Release
call dotnet publish -r linux-arm --self-contained --configuration Release
call dotnet publish -r linux-arm64 --self-contained --configuration Release
call dotnet publish -r osx-x64 --self-contained --configuration Release

call Finished Publishing Application