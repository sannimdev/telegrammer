import { TYPE_BOOT, TYPE_SHUTDOWN } from './config';
import { onBoot, onShutdown } from './events';

async function run() {
    try {
        const [_, __, command, options] = process.argv;
        if (!command) throw Error('Comamnd is null');
        switch (command.toLowerCase()) {
            case TYPE_BOOT:
                await onBoot();
                break;
            case TYPE_SHUTDOWN:
                await onShutdown();
                break;
        }
    } catch (error) {
        console.error('MAIN', error);
    }
}

run();
