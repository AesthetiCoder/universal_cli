import { boxMessage } from '@global/lib/boxen';
import chalk from 'chalk';
import figlet from 'figlet';

const displayMessage = (): void =>
{
  boxMessage(chalk.blue(figlet.textSync('Universal CLI!')));
};

export {
  displayMessage
};