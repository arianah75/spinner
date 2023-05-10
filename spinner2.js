const animation = ["hello from spinner2.js...\n","\r| ", "\r/ ", "\r- ","\r\\ ","\r| ","\r| ", "\r/ ", "\r- ","\r\\ ","\r| ","\n"];
let pause = 0;
for (const frame of animation) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, pause);
  pause += 200;
}
