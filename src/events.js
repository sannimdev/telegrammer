import ip from 'ip';
import { ROOMS } from './config';
import { sendMessage } from './lib/messenger';

export const onBoot = async () => {
    const message = `PC가 부팅되었음\n${ip.address()}`;
    await sendMessage(ROOMS.normal, message);
};

export const onShutdown = async () => {
    await sendMessage(ROOMS.normal, 'PC가 종료됨...');
};
