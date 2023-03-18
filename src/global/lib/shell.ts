import shell from 'shelljs';

const cdCommand = (command: string) => shell.cd(command);
const whichCommand = (command: string) => shell.which(command);
const execCommand = (command: string) => shell.exec(command);

export {
  execCommand,
  whichCommand,
  cdCommand
};