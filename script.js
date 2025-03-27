//Mude "ID" para o ID do elemento que será detectado.
//Change "ID" to the ID of the element you want to detect.
const elementID = "ID";

let elementoAntigo = document.getElementById(elementID);
let hrefAntigo = elementoAntigo ? elementoAntigo.href : null;
let textoAntigo = elementoAntigo ? elementoAntigo.innerText : null;

const verificacao = () => {
  let elemento = document.getElementById(elementID);
  console.log("Iniciando verificação...\nStarting verification...")
  
  if (elemento) {
    let href = elemento.href;
    let texto = elemento.innerText;
  
      if (href !== hrefAntigo) {
        console.log(
          "Mudança detectada no link: " + hrefAntigo + " => " + href +
          "\nChange detected in the link: " + hrefAntigo + " => " + href
        );
        alert("O link do elemento mudou!\nThe element link changed!");
        //mandarEmail();
        hrefAntigo = href;
      }

      if (texto !== textoAntigo) {
        console.log(
          "Mudança detectada no texto: " + textoAntigo + " => " + texto +
          "\nChange detected in the text: " + textoAntigo + " => " + texto
        );
        alert("O texto do elemento mudou!" );
        //mandarEmail();
        textoAntigo = texto;
      }

  } else {
    console.log(
      "Elemento não encontrado! ID errado, talvez?" + 
      "\nElement not found! Wrong ID, perhaps?"
    )
    alert("Elemento não encontrado!!\nElement not found!!");
    clearInterval(verificacao);
  }
}

//async function mandarEmail(assunto, mensagem) {}

verificacao();

//Aqui você pode mudar o intervalo de tempo (recomendo a forma 24h*60min*60seg*1000ms), o padrão é 5 segundos.
//Here you can change the time interval (form 24h*60min*60sec*1000ms recommended), the default is 5 seconds.
setInterval(verificacao, 5*1000);