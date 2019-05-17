#!/bin/bash

echo "STARTING DEPLOYMENT"
git clone https://github.com/RcKeller/hackathon-starter.git ~/repo
cd ~/repo
git pull
npm i
npm run build
npm i -g pm2
pm2 stop server
pm2 start server
echo "DEPLOYED SUCCESSFULLY"