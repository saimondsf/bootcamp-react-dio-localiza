Running React files
Rodando arquivos React

- Initially it is necessary to install the following libraries with the command:
- Inicialmente é necessário instalar as seguintes bibliotecas com o comando:
'npm install next react react-dom react-scripts'

- Next we create a folder called "pages" and inside it the file "index.js" containing a function called
'function Home() { return() }' ​​and export 'export default Home'
- Em seguida criamos uma pasta chamada "pages" e dentro dela o arquivo "index.js" contendo uma função chamada
'function Home () { return () }' e exportamos 'export default Home'

- Then it is necessary to change the 'package.json' file to the following part:
- Em seguida é necessário alterar o arquivo 'package.json' a seguinte parte:
"scripts": {
    "dev" : "next dev"
    },

- To run the application just run the following command:
- Para rodar a aplicação basta executar o seguinte comando:
'npm run dev'

===============================================================================================================

Using the "prompt-sync" library
Usando a biblioteca "prompt-sync"

- To run this file in Node is necessary the file package.json, creating with this line command:
- Para rodar este arquivo no Node é necessário o arquivo package.json, criando com esta linha de comando:
'npm init -y'

- To insert in your program variables and have a interface in the prompt use this line of command to instal the library prompt-sync:
- Para inserir em suas variáveis ​​de programa e ter uma interface no prompt, use esta linha de comando para instalar a biblioteca prompt-sync:
'npm i prompt-sync'

- Here just a example to show entry date in your program forward the prompt:
- Aqui está apenas um exemplo para mostrar a data de entrada em seu programa para encaminhar o prompt:
'    let prompt = require('prompt-sync')();     '
'    let limite = parseInt(prompt());           '