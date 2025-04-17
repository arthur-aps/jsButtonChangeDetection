/**
 * pt-BR:
 *  Mude "ID" para o ID do elemento que será detectado na
 * página e mude "receiver@gmail.com" para o email
 * destinatário. Se for mais de um, os separe com vírgula.
 * ---------------------------------------------------------
 * en:
 *  Change "ID" to the ID of the element you want to detect,
 * and change "receiver@gmail.com" to the receiver email.
 * If it's more than one, use commas.
 */
const elementID = 'ID';
const emailReceiver_s = ['receiver@gmail.com']; // ['receiver1', 'receiver2', 'receiver3'...]

const domain = window.location.href;

let elementoAntigo = document.getElementById(elementID);
let hrefAntigo = elementoAntigo ? elementoAntigo.href : null;
let textoAntigo = elementoAntigo ? elementoAntigo.innerText : null;

function verificacao() {
  let elemento = document.getElementById(elementID);
  console.log("Iniciando verificação...\nStarting verification...");
  
  if (elemento) {
    let href = elemento.href;
    let texto = elemento.innerText;
  
    if (href !== hrefAntigo) {
      console.log(
        `Mudança detectada no link: ${hrefAntigo} => ${href}\n` +
        `Change detected in the link: ${hrefAntigo} => ${href}`
      );
      
      mandarEmail(
        // Assunto // Subject
        `O link do elemento "${elementID}" mudou! / ` +
        `The link of the element "${elementID} changed!"`,
        // Texto // Text
        `Página: / Page: ${domain}\n` +
        `Link antigo: / Old link: "${hrefAntigo}\n"` +
        `Novo link: / New link: "${href}"`
      );

      alert("O link do elemento mudou!\nThe element's link changed!");
      hrefAntigo = href;
    }

    if (texto !== textoAntigo) {
      console.log(
        `Mudança detectada no texto: ${textoAntigo} => ${texto}\n` +
        `Change detected in the text: ${textoAntigo} => ${texto}`
      );
      
      mandarEmail(
        // Assunto // Subject
        `O texto do elemento "${elementID}" mudou! / ` +
        `The text of the element "${elementID} changed!"`,
        // Texto // Text
        `Página: / Page: ${domain}\n` +
        `Texto antigo: / Old text: "${textoAntigo}"\n` +
        `Novo texto: / New text: "${texto}"`
      );

      alert("O texto do elemento mudou!\nThe element's text changed!");
      textoAntigo = texto;
    }

  } else {
    console.log(
      "Elemento não encontrado! ID errado, talvez?\n" +
      "Element not found! Wrong ID, perhaps?"
    );
    alert("Elemento não encontrado!!\nElement not found!!");
    clearInterval(verificacao);
  }
}

async function mandarEmail(assunto, mensagem) {
  try {
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify ({
        to: emailReceiver_s,
        subject: assunto,
        text: mensagem
      })
    });

    const data = await response.text();
    console.log(data);
  } catch(err) {
    console.log("Error: " + err);
  }
}

verificacao();
/**
 * pt-BR:
 *  Aqui você pode mudar o intervalo de tempo entre verificações de
 * mudança (recomendo a forma 24h*60min*60seg*1000ms), o padrão é 5
 * segundos.
 * -----------------------------------------------------------------
 * en:
 *  Here you can change the time interval between change detections
 * (form 24h*60min*60sec*1000ms recommended), the default is 5 se-
 * conds.
 */
setInterval(verificacao, 5*1000);