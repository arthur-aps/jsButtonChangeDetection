import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();

/**
 * pt-BR:
 *  Para que um email seja enviado a você quando uma mudança for detectada na página,
 * você precisa de no mínimo 2 gmails: o remetente e o destinatário. Recomendo criar
 * um email apenas para a função de remetente, e usá-lo em scripts como esse.
 *  Além disso, você terá que criar uma senha de app para seu email remetente, para que
 * este script consiga acessá-lo.
 * ----------------------------------------------------------------------------------------
 * en:
 *  For you to be able to receive an email when a change is detected in the page, you'll
 * need at least 2 gmails: the sender and the receiver. I recommend creating an email
 * only for the purpose of sending, and using it in scripts like this one.
 *  Also, you'll need to create an app password for your sender email, so this
 * script can access it.
 */
const emailSender = 'sender@gmail.com';
const pass = 'sender app pass example';

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailSender,
    pass: pass
  }
});

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;
  const mailOptions = {
    from: emailSender,
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err.toString());
    }
    res.status(200).send(`Email enviado! / Email sent! => ${info.response}`);
  });
});

// iniciar o servidor // start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `Servidor rodando na porta ${PORT}!\n` +
    `Server running in port ${PORT}!`
  );
});

// capta qualquer erro ao iniciar o servidor // catches any error when starting the server
app.on('error', (err) => {
  console.log(`Erro ao iniciar o servidor / Error starting the server => ${err}`)
});