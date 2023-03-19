import { deletePreviousLine } from '@global/utils/clear';
import { handleError } from '@global/utils/text';
import { icons } from '@public/icons';
import inquirer from 'inquirer';

const prompt = inquirer.createPromptModule();

interface promptResponse
{
  value: string;
}

interface promptCheckListResponse
{
  value: string[];
}

const promptCheckList = async (choices: string[], message: string): Promise<string[]> =>
{
  const { value } = await prompt({
    prefix: icons.gear,
    name: 'value',
    type: 'checkbox',
    message,
    choices,
    loop: false
  }) as promptCheckListResponse;

  deletePreviousLine();
  return value;
};

const promptList = async (choices: string[], message: string): Promise<string> =>
{
  const { value } = await prompt({
    prefix: icons.gear,
    name: 'value',
    type: 'list',
    message,
    choices,
    loop: false
  }) as promptResponse;

  deletePreviousLine();
  return value;
};

const promptAskForValue = async (message: string): Promise<string> =>
{
  const input = await prompt({
    type: 'input',
    name: 'value',
    message
  });

  const { value } = input as promptResponse;

  if(!value)
  {
    deletePreviousLine();
    handleError(new Error('No value specified, try again'), true, false);
    await promptAskForValue(message);
  }

  deletePreviousLine();
  return value;
};

export {
  promptList,
  promptAskForValue,
  promptCheckList
};