import chalk from "chalk";

const chalkBlue = (message: string) => chalk.blue(message);
const chalkRed = (message: string) => chalk.red(message);
const chalkGreen = (message: string) => chalk.green(message);
const chalkBackgroundRed = (message: string) => chalk.inverse.bold.red(message);
const chalkBackgroundGreen = (message: string) => chalk.inverse.bold.green(message);

export {
  chalkBlue,
  chalkRed,
  chalkGreen,
  chalkBackgroundRed,
  chalkBackgroundGreen
};