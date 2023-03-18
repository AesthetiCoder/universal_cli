#!/usr/bin/env node
import { createNewFeature } from '@global/utils/create_new_feature';
import { createNewProject } from '@global/utils/create_new_proyects';
import { promptList } from '@global/lib/prompt';
import { Command } from 'commander';
import { clear } from '@global/utils/clear';
import { displayMessage } from '@global/lib/figlet';
import { icons } from '@public/icons';

export const program = new Command();

const question = [
  `${icons.building} Create a new project`,
  `${icons.feature} Add new feature`
];

const main = async () =>
{
  clear();
  displayMessage();

  program
    .name('Universal CLI')
    .description(`Personal CLI to make productivity fast ${icons.rocket}`)
    .version(`${icons.package} 0.0.1`, '-v, -version');

  const data = await promptList(question, 'What you want to do ?');

  if(data === `${icons.building} Create a new project`)
  {
    await createNewProject();
  }

  if(data === `${icons.feature} Add new feature`)
  {
    await createNewFeature();
  }

  program.parse();
};

main().catch(console.error);