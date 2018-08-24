#!/bin/bash
npm install
npm install electron
electron-builder build --config ./electron-builder.json --mac --x64