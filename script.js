const buttonID = "ID";

let botaoAntigo = document.getElementById(buttonID);
let hrefAntigo = botaoAntigo ? botaoAntigo.href : null;
let textoAntigo = botaoAntigo ? botaoAntigo.innerText : null;
let botaoSumiu = false;

setInterval(() => {
  let botao = document.getElementById(buttonID);
  
  if (botao) {
    let href = botao.href;
    let texto = botao.innerText;
  
      if (href !== hrefAntigo) {
        console.log("Mudança detectada no link: " + hrefAntigo + " => " + href);
        alert("O link do botão mudou!");
        //mandarEmail();
        hrefAntigo = href;
      }

      if (texto !== textoAntigo) {
        console.log("Mudança detectada no texto: " + textoAntigo + " => " + texto);
        alert("O texto do botão mudou!");
        //mandarEmail();
        textoAntigo = texto;
      }

    } else {
      if (!botaoSumiu) {
      alert("O botão sumiu!!");
      console.log("Botão não encontrado!")
      botaoSumiu = true;
      }
    }
}, 60*60*1000);

//async function mandarEmail(assunto, mensagem) {}