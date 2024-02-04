process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const name = input.toString();
  if (name !== '\n') {
    process.stdout.write(`Your name is: ${name}\r`);
    process.stdin.push(null);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
