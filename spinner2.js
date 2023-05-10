process.stdout.write("hello from spinner2.js... \rheyyy \n");
const animation = ["\r| ", "\r/ ", "\r- ","\r\\ ","\r| ","\n"];
let pause = 0;
for (const frame of animation) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, pause);
  pause += 200;
}
