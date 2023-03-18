import { execCommand } from '@global/lib/shell';
import { validateCommand } from '@global/utils/validate';

const initRepository = () =>
{
  validateCommand('git', 'You need git to initialize a repo');
  execCommand('git init');
};

export {
  initRepository
};