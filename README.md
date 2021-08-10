to run this file in Node is necessary the file package.json, creating with this line command:
'npm init -y'

to insert in your program variables and have a interface in the prompt use this line of command to instal the library prompt-sync:
'npm i prompt-sync'

here just a example to show entry date in your program forward the prompt:
'    let prompt = require('prompt-sync')();     '
'    let limite = parseInt(prompt());           '