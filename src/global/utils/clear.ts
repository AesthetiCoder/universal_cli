const deletePreviousLine = (): void =>
{
  process.stdout.write('\r\u001b[1A\u001b[2K');
};

const clear = (): void =>
{
  process.stdout.write('\x1B[2J\x1B[3J\x1B[H\x1Bc');
};

export {
  deletePreviousLine,
  clear
};