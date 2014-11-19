#!/usr/bin/env bash

apt-get update
apt-get install -y apache2 git

cd /opt

git clone https://github.com/educationZEN/eduZOO.git

ln -sf /opt/eduZOO /var/www/eduZOO

ln -fs /vagrant /var/www/eduzoo-components