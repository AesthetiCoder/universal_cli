import {
  chalkBackgroundGreen, chalkBackgroundRed, chalkBlue, chalkGreen, chalkRed
} from '@global/lib/chalk';
import { icons } from '@global/assets/icon/icon';

const printError = (message: string) =>
{
  console.log(chalkBackgroundRed('⛔ ERROR '), chalkRed(message), '\n');
};

const createFileMessage = (message: string, fileSize: string) =>
{
  console.log(icons.success, chalkBackgroundGreen(' CREATE '), message, chalkBlue(`(${fileSize})`));
};

const handleSuccess = (message: string) =>
{
  console.log(icons.success, chalkBackgroundGreen(' SUCCESS '), chalkGreen(message), '\n');
};

const handleError = (error: Error, onlyMessage = false, exit = true) =>
{
  if(onlyMessage)
  {
    console.log(icons.error, chalkBackgroundRed(' ERROR '), error.message);
  }
  else
  {
    console.log(icons.error, chalkBackgroundRed(' ERROR '), error.name, '\n');
    console.log(icons.information, chalkBackgroundRed(' REASON '), error.message, '\n');
    console.log(icons.information, chalkBackgroundRed(' ERROR STACK \n'), error.stack || '', '\n');
  }

  if(exit)
  {
    process.exit(0);
  }
};

export {
  printError,
  handleSuccess,
  createFileMessage,
  handleError
};