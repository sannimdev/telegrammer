require('dotenv').config();
export const ROOMS = {
  normal: process.env.ROOM_NORMAL_CHAT_ID,
  fail2ban: '',
};

Object.freeze(ROOMS);

export const TYPE_BOOT = 'boot';
export const TYPE_SHUTDOWN = 'shutdown';
