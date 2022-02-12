require('dotenv').config();
import ip from 'ip';
import { ROOMS } from './config';
import { sendMessage } from './lib/messenger';

async function run() {
  const [_, __, command, options] = process.argv;
  const result = await sendMessage(ROOMS.normal, ip.address());
  console.log(result);
}

run();
