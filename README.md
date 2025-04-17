## *pt-BR:*
### JavaScript - Detector por ID de Mudanças no `href` de um Elemento em uma Página Web

Eu precisava detectar a mudança de um botão numa página web, então fiz esse script pra isso.

### Como rodá-lo?

> Nota: o script usa `node.js` como backend no seu `localhost` para enviar emails quando mudanças são detectadas no elemento.
> Se você não quiser essa funcionalidade (é um pouco complicada de preparar), remova `//` nas linhas `// /*` e `// */` no arquivo `script.js`.  
> Em versões futuras, quero deixar esse processo de enviar emails mais simples.

O arquivo `script.js` detecta mudanças na página. Ele vai rodar no console do seu browser de preferência, na
página em que você rodá-lo e quiser detectar mudanças. Pra funcionar:

- Mude o valor de `elementID` para o ID do elemento que você quer detectar na página
- Se você for usar a função de mandar emails, mude o valor de `emailReceiver_s` para o(s) email(s) destinatários de sua preferência
- Mude o intervalo de verificação de mudanças na função `setTimeout()` no final do arquivo

Quando tudo estiver pronto, e seu servidor backend estiver rodando (se for utilizá-lo), é só copiar e colar o código de `script.js` no console da página
que você quiser detectar mudanças, rodar e pronto.

### Backend (opcional)

O arquivo `backend.js` roda o backend no seu `localhost`, esperando por uma request (requisição) para enviar emails quando mudanças
são detectadas.

A primeira coisa que você deve fazer é criar um gmail que enviará os emails quando mudanças forem detectadas. Depois, ativar a autenticação
multifatores nessa conta para habilitar senhas de app. Por fim, crie uma senha de app para essa conta buscando por "senhas de app" no [gerenciador de contas do google](https://myaccount.google.com),
daí você vai conseguir usar essa conta e senha para enviar emails com `node.js`. Use elas no arquivo `backend.js`.

Agora, pro backend funcionar, antes de tudo, instale o `node` e o `npm` na sua máquina. E então, instale os módulos `express`, `cors` e `nodemailer`
usando o `npm` no seu terminal ou cmd:

    npm install express cors nodemailer

E agora que você tem os módulos instalados, use o `node` para rodar o arquivo `backend.js` (confira se está no diretório 'jsButtonChangeDetection' quando rodar o comando):

    node backend.js

Legal, você tem um servidor rodando no seu `localhost` agora. Fácil, né?

## *en:*
### JavaScript - Web Page Element's `href` Change Detector by ID

I needed to detect changes from a button in a web page, so I made this script to do that.

### How to run the script?

> Note: the script uses `node.js` as backend in your `localhost` to send emails when changes are detected in the element.
> If you don't want this functionality (it's a bit complicated to setup), remove `//` in the lines `// /*` and `// */` in the file `script.js`.
> In future versions, I want to make this emailing process more simple.

The file `script.js` detects the changes on the page. This file will run in the console of your browser of preference,
in the page that you want to detect changes. For it to work:

- Change the `elementID`'s value to the ID of the element you want to detect in the page
- If you're going to use the send-email functionality, change `emailReceiver_s`'s value to the email receiver(s) of your preference
- Change the time interval between verifications in the `setTimeout()` function at the end of the file

When everything's ready, and the backend server is up and running (if you're going to use it), simply copy, paste and run the `script.js` file's content into the
console of the page you want to detect changes.

### Backend (optional)

The file `backend.js` runs the backend in your `localhost`, waiting for a request to send emails when changes are detected.

The first thing you want to do is create a gmail to send the emails when changes are detected. Then activate multi-factor authentication
in this account to enable app passwords. Lastly, create an app password for this account by searching for "app password" in [google's account manager](https://myaccount.google.com),
then, you can use this account and password for sending emails with `node.js`. Use them in the file `backend.js`.

Now, for the backend to work, before anything, install `node` and `npm` in your machine. Then, install the modules `express`, `cors` and `nodemailer`
using `npm` in your terminal or cmd:

    npm install express cors nodemailer

Now that you have the modules installed, use node to run the file `backend.js` (make sure you're in the folder 'jsButtonChangeDetection' when running the command):

    node backend.js

Cool, you have a server running in your `localhost` now. Easy, right?