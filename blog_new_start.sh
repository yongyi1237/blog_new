PATH=/www/server/nodejs/v16.2.0/bin:/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

export NODE_PROJECT_NAME="blog_new"
export HOME=/root
/www/server/nodejs/v16.2.0/bin/pm2 start /www/server/nodejs/vhost/pm2_configs/blog_new/ecosystem.config.cjs