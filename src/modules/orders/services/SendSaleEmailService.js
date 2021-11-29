const nodemailer = require('nodemailer');

async function sendSaleEmailService(client, order) {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "aa13adfe070b4a",
      pass: "5b461b49eebf83"
    }
  });

  await transporter.sendMail({
    from: `"${client.nome}" <${client.email}>`,
    to: client.email,
    subject: `Status do pedido #${order.id}`,
    text: `Olá ${client.nome}, estamos enviando esse email para informar que a sua compra #${order.id} foi realizada com sucesso. Agradecemos pela sua compra, volte sempre! :)`,
    html: `<strong>Olá ${client.nome}, estamos enviando esse email para informar que sua compra foi realizada com sucesso. Tenha um bom proveito de sua encomenda. Agradecemos pela sua compra, volte sempre! :)</strong>`,
  });
};

module.exports = { sendSaleEmailService };