require('dotenv').config();
import { TYPE_BOOT, TYPE_SHUTDOWN } from './config';
import { onBoot, onShutdown } from './events';

async function run() {
  const [_, __, command, options] = process.argv;
  switch (command.toLowerCase()) {
    case TYPE_BOOT:
      await onBoot();
      break;
    case TYPE_SHUTDOWN:
      await onShutdown();
      break;
  }
}

run();
