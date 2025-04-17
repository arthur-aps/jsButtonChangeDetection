[def]: ./CHANGELOG.md

## *pt-BR:*
Veja o changelog [aqui][def]
### JavaScript - Detector por ID de Mudanças no `href` de um Elemento em uma Página Web

Eu precisava detectar a mudança de um botão numa página web, então fiz esse script pra isso.

### Como rodá-lo?

> Nota: o script usa `node.js` como backend no seu `localhost` para enviar emails quando mudanças são detectadas no elemento.
> Se você não quiser essa funcionalidade, remova `//` nas linhas `// /*` e `// */` no arquivo `script.js`.  

### Backend (opcional)

O arquivo `backend.js` roda o backend no seu `localhost`, esperando por uma request (requisição) para enviar emails quando mudanças
forem detectadas.

A primeira coisa que você deve fazer é criar um gmail que enviará os emails quando mudanças forem detectadas. Depois, ativar a autenticação
multifatorial nessa conta para habilitar senhas de app. Por fim, crie uma senha de app para essa conta buscando por "senhas de app" no
[gerenciador de contas do google](https://myaccount.google.com), daí você vai conseguir usar essa conta e senha para enviar emails com
`node.js`. Use elas no arquivo `backend.js` entrando nele e mudando os valores de `emailSender` e `pass`. Há documentação no arquivo
para te ajudar.

Agora, pro backend funcionar , antes de tudo, instale o `node` e o `npm` na sua máquina, então, instale os módulos `express`, `cors` e
`nodemailer` usando o `npm` no seu terminal ou cmd (confira se está no diretório deste repositório quando rodar os seguintes
comandos):

    npm install

E agora que você tem os módulos instalados, use o `npm` para rodar o arquivo `backend.js` :

    npm run start

Legal, você tem um servidor rodando no seu `localhost` agora. Fácil, né?

### Frontend

O arquivo `script.js` detecta mudanças na página. Ele vai rodar no console do seu browser de preferência, na
página em que você rodá-lo e quiser detectar mudanças. Pra funcionar, acesse esse arquivo e:

- Mude o valor de `elementID` para o ID do elemento que você quer detectar na página
- Se você for usar a função de mandar emails, mude o valor de `emailReceiver_s` para o(s) email(s) destinatário(s) de sua preferência
- Mude o intervalo de verificação de mudanças na função `setTimeout()` no final do arquivo

Há documentação no arquivo pra ajudar na configuração.

Quando tudo estiver pronto, e seu servidor backend estiver rodando (se for utilizá-lo), é só copiar e colar o código de `script.js` no console da página
que você quiser detectar mudanças, rodar e pronto.

## *en:*
See the changelog [here][def]
### JavaScript - Web Page Element's `href` Change Detector by ID

I needed to detect changes from a button in a web page, so I made this script to do that.

### How to run the script?

> Note: the script uses `node.js` as backend in your `localhost` to send emails when changes are detected in the element.
> If you don't want this functionality, remove `//` in the lines `// /*` and `// */` in the file `script.js`.

### Backend (optional)

The file `backend.js` runs the backend in your `localhost`, waiting for a request to send emails when changes are detected.

The first thing you want to do is create a gmail to send the emails when changes are detected, then activate multi-factor authentication
in this account to enable app passwords. Lastly, create an app password for this account by searching for "app password" in
[google's account manager](https://myaccount.google.com), then, you can use this account's user and password for sending emails with
`node.js`. Use them in the file `backend.js`, by accessing it and changing `emailSender` and `pass` values. There's documentation
in the file to help you.

Now, for the backend to work , before anything, install `node` and `npm` in your machine. Then, install the modules `express`, `cors`
and `nodemailer` using `npm` in your terminal or cmd (make sure you're in the folder of this repository when running the
following commands):

    npm install

Now that you have the modules installed, use `npm` to run the file `backend.js` :

    npm run start

Cool, you have a server running in your `localhost` now. Easy, right?

### Frontend

The file `script.js` detects the changes on the page. This file will run in the console of your browser of preference,
in the page that you want to detect changes. For it to work, access it and:

- Change the `elementID`'s value to the ID of the element you want to detect in the page
- If you're going to use the send-email functionality, change `emailReceiver_s`'s value to the email receiver(s) of your preference
- Change the time interval between verifications in the `setTimeout()` function at the end of the file

There's documentation in the file to help you.

When everything's ready, and the backend server is up and running (if you're going to use it), simply copy, paste and run the `script.js` file's content into the
console of the page you want to detect changes.