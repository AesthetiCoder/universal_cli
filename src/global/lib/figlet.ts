import { boxMessage } from '@global/lib/boxen';
import { chalkBlue } from '@global/lib/chalk';
import figlet from 'figlet';

const displayMessage = (): void =>
{
  boxMessage(chalkBlue(figlet.textSync('Universal CLI!')));
};

export {
  displayMessage
};