import { createProjectDirectoryContent, createFolder } from '@global/utils/create_directory_content';
import { printError } from '@global/utils/text';
import { promptAskForValue, promptList } from '@global/lib/prompt';
import * as path from 'path';
import * as fs from 'fs';
import { validateprojectName } from '@global/utils/validate';
import { deletePreviousLine } from '@global/utils/clear';
import { solidSamplePostInstall } from '@modules/solid/solid_sample';
import { initRepository } from '@global/utils/git';

const CURRENT_DIR = process.cwd();

const createProjectFolder = async () =>
{
  const projectName = await promptAskForValue('Enter project name: ');

  if(!validateprojectName(projectName))
  {
    deletePreviousLine();
    printError('Name should be in lowercase, and only contain letters, numbers and underscore');
    await promptAskForValue('Enter project name: ');
  }

  if(!createFolder(path.join(CURRENT_DIR, projectName)))
  {
    deletePreviousLine();
    printError(`Folder ${projectName} exists. Delete or use another name.`);
    await createProjectFolder();
  }

  return projectName;
};

const createNewProject = async () =>
{
  const CURR_DIR = process.cwd();
  const CHOICES_FRAMEWORKS = fs.readdirSync(`${path.dirname('')}/src/global/templates`);

  const projectType = await promptList(CHOICES_FRAMEWORKS, 'What project do you want to create ?');
  const projectName = await createProjectFolder();
  const templatePath = path.join(path.dirname(''), '/src/global/templates/', projectType);
  const targetPath = path.join(CURR_DIR, projectName);

  createProjectDirectoryContent(projectName, templatePath);

  switch (projectType)
  {
    case 'solid_sample':
      solidSamplePostInstall(templatePath, targetPath);
      break;

    default:
      initRepository();
      break;
  }
};

export {
  createNewProject
};