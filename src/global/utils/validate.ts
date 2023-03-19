import { whichCommand } from '@global/lib/shell';
import { deletePreviousLine } from '@global/utils/clear';
import { printError } from '@global/utils/text';

const validateProjectName = (value: string): boolean =>
{
  if((/^[a-z0-9_]*$/).test(value))
  {
    return true;
  }

  return false;
};

const validateCommand = (command: string, message: string) =>
{
  if(!whichCommand(command))
  {
    deletePreviousLine();
    printError(message);
  }
};

export {
  validateProjectName,
  validateCommand
};