#!/bin/bash

#pm2 start dist/server.js --name server
pm2 stop server

# Pull the latest changes from Git
cd ~/quiz
git pull

# Restart your application to apply the latest changes
pm2 restart server