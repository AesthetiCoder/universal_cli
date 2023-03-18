import { icons } from '@public/icons';
import chalk from 'chalk';

const printError = (message: string) =>
{
  console.log(chalk.inverse.bold.red('⛔ ERROR '), chalk.red(message), '\n');
};

const handleSuccess = (message: string) =>
{
  console.log(icons.success, chalk.inverse.bold.green(' SUCCESS '), chalk.green(message), '\n');
};

const handleError = (error: Error, onlyMessage = false, exit = true) =>
{
  if(onlyMessage)
  {
    console.log(icons.error, chalk.inverse.bold.red(' ERROR '), error.message);
  }
  else
  {
    console.log(icons.error, chalk.inverse.bold.red(' ERROR '), error.name, '\n');
    console.log(icons.information, chalk.inverse.bold.red(' REASON '), error.message, '\n');
    console.log(icons.information, chalk.inverse.bold.red(' ERROR STACK \n'), error.stack || '', '\n');
  }

  if(exit)
  {
    process.exit(0);
  }
};

export {
  printError,
  handleSuccess,
  handleError
};