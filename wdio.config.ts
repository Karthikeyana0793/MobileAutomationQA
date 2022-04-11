const driver = 'ANDROID';

require('ts-node').register({ transpileOnly: true });
module.exports = require(`./config/wdio.${driver}.conf.ts`);
