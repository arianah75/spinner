process.stdout.write("hello from spinner2.js... \rheyyy\n");

//inspirder by typerwriter.js

const animation = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "]
let pause = 0; 

for (const frame of animation) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, pause);
  pause += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, pause);