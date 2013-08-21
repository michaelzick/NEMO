#!/bin/sh
source /usr/bin/rhcsh
ctl_all restart
echo "Cron ran at "`date +%Y-%m-%H\ %k:%M:%S` >> $OPENSHIFT_HOMEDIR/cron/log/cron.hourly.log
