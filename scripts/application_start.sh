#!/bin/bash

# Add executable permissions (run this once manually if needed)
chmod +x /home/ubuntu/test/scripts/application_start.sh

# Navigate to the application directory
cd /home/ubuntu/test
# Stop any existing PM2 processes
pm2 stop all || true

# Start the app using PM2
pm2 start app.js

# Save the PM2 process list to start on reboot
pm2 save
