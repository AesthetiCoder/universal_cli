import boxen from 'boxen';

const boxMessage = (message: string) =>
{
  console.log(boxen(message, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
    backgroundColor: '#171717'
  }));
};

export {
  boxMessage
};