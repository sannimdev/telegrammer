import log from 'log-to-file';

export const LOG_NORMAL = 'SUCCESS';
export const LOG_ERROR = 'ERROR';

export const setLog = (type, message) => {
  return log(
    `${type}:${message}`,
    `${process.env.NODE_MODE === 'production' ? process.env.OLDPWD : `${__dirname}/../`}/log.txt`
  );
};
