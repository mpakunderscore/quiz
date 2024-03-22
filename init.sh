#!/bin/bash

# Navigate to your project directory
cd ~/quiz

# Start your application with PM2, replace 'app_name' with your actual application name or script
pm2 start dist/server.js --name server

# Pull the latest changes from Git
git pull

# Restart your application to apply the latest changes
pm2 restart server