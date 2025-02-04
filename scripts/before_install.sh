# Install dependencies for Node.js
apt-get update
apt-get install python-software-properties curl -y

# Install Node.js (version 18.x)
curl -s https://deb.nodesource.com/setup_18.x | sudo bash
apt-get update
apt-get install nodejs -y

# Install PM2 globally
npm install pm2 -g

# Optionally install nodemon for development purposes (uncomment if needed)
# sudo npm install nodemon -g

# Install Redis server
 apt install redis-server -y

# Configure Redis for production (optional)
# Enable Redis as a systemd service
 systemctl enable redis-server

# Configure Redis to use systemd supervision
 sed -i 's/^supervised no$/supervised systemd/' /etc/redis/redis.conf

# Restart Redis to apply changes
 systemctl restart redis-server

# Clean working folder (use with caution - uncomment if necessary)
# sudo find /home/ubuntu/test -type f -delete

# Verify Redis is running
 systemctl status redis-server

# Test Redis connection (optional)
redis-cli ping
