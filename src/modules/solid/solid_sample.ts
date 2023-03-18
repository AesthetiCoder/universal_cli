import * as path from 'path';
import * as fs from 'fs';
import { cdCommand } from '@global/lib/shell';
import { pnpmAddDependencies } from '@global/utils/depedencies';
import { printError } from '@global/utils/text';
import { NPMDependencyModel } from '@global/models/npm_dependency';

const solidSamplePostInstall = (templatePath: string, targetPath: string): boolean =>
{
  const isNode = fs.existsSync(path.join(templatePath, 'package.json'));

  if(!isNode)
  {
    printError('There is no package.json in your project');
    return false;
  }

  const dependencies: NPMDependencyModel[] = [
    {
      name: 'typescript',
      type: 'development'
    },
    {
      name: 'vite',
      type: 'development'
    },
    {
      name: 'vite-plugin-solid',
      type: 'development'
    },
    {
      name: 'solid-js',
      type: 'development'
    },
    {
      name: 'vite-plugin-solid-svg',
      type: 'development'
    }
  ];
  cdCommand(targetPath);

  return pnpmAddDependencies(dependencies);
};

export {
  solidSamplePostInstall
};