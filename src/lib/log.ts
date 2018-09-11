import { configure, getLogger } from 'log4js';

const logPath = (process.env.NODE_ENV === 'production') ? '/LOG' : '/LOG';
const logConfig = {
  appenders: {
    console: {
      type: 'console',
    }, clientFile: {
      type: 'file', filename: logPath + '/log.log', maxLogSize: 50 * 1000000,
    },
  },
  categories: { default: { appenders: ['console', 'clientFile'], level: 'info' } },
};
configure(logConfig);

export function logger() {
  return getLogger();
}
