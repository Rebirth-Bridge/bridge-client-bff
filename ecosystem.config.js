/**
 * Created by chamathbogahawatta on 30/09/2019.
 */
const path = require('path');

module.exports = {
  apps: [{
    name: 'client-bff',
    script: 'index.js', // Your entry point
    instances: 2,
    autorestart: true, // THIS is the important part, this will tell PM2 to restart your app if it falls over
    watch: process.env.NODE_ENV !== 'production' ? path.resolve(__dirname, 'src') : false,
    max_memory_restart: '1G',
    exec_mode: 'cluster'
  },{
    script: 'worker.js',
    name: 'worker'
  }]
};