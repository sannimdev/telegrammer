export const TYPE_BOOT = 'boot';
export const TYPE_SHUTDOWN = 'shutdown';

export const ROOMS = {
  normal: process.env.ROOM_NOROMAL_CHAT_ID,
  fail2ban: '',
};
Object.freeze(ROOMS);
