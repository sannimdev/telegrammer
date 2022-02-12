import log from 'log-to-file';

export const LOG_NORMAL = 'SUCCESS';
export const LOG_ERROR = 'ERROR';

export const setLog = (type, message) => {
  log(`${type}:${message}`, `${process.cwd()}/../log.txt`);
};
