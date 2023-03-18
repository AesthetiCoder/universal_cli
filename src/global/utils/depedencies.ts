import { execCommand } from '@global/lib/shell';
import { NPMDependencyModel } from '@global/models/npm_dependency';
import { deletePreviousLine } from '@global/utils/clear';
import { printError } from '@global/utils/text';
import { validateCommand } from '@global/utils/validate';

const pnpmAddDependencies = (dependencies: NPMDependencyModel[]): boolean =>
{
  validateCommand('pnpm', 'You need pnpm to installs the dependencies');

  let resultDev;
  let result;

  const devDependencies = dependencies.filter((el) => el.type === 'development').map((el) => el.name);
  const prodDependencies = dependencies.filter((el) => el.type === 'production').map((el) => el.name);

  if(devDependencies.length)
  {
    resultDev = execCommand(`pnpm i -D --lockfile-only ${devDependencies.join(' ')}`);
  }

  if(prodDependencies.length)
  {
    result = execCommand(`pnpm i --lockfile-only ${prodDependencies.join(' ')}`);
  }

  if(result?.code !== 0 || resultDev?.code !== 0)
  {
    deletePreviousLine();
    printError('Error installing dependencies');
    return false;
  }

  return true;
};

export {
  pnpmAddDependencies
};