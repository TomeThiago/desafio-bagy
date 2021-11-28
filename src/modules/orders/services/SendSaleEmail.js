import nodemailer from 'nodemailer';

export async function sendSaleEmail(client, order) {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: `"${client.nome}" <${client.email}>`,
    to: client.email,
    subject: `Status do pedido #${order.id}`,
    text: `Olá ${client.nome}, estamos enviando esse email para informar que a sua compra #${order.id} foi realizada com sucesso. Agradecemos pela sua compra, volte sempre! :)`,
    html: `<strong>Olá ${client.nome}, estamos enviando esse email para informar que sua compra foi realizada com sucesso. Tenha um bom proveito de sua encomenda. Agradecemos pela sua compra, volte sempre! :)</strong>`,
  });
  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}