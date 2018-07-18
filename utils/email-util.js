const emailConfig = require("../config/email-config");
const mailgun = require("mailgun-js")(emailConfig());
const path = require("path");
const filename = path.join(__dirname, "../public/images/pap-inst.png");

console.log(filename);

exports.sendEmail = async (recipient, password) => {
  var data = {
    from:
      "Dirección Pcial. Estadística <no-responder@estadistica.ec.gba.gov.ar>",
    to: "tau150@hotmail.com",
    subject: "Registro exitoso",
    html: `<html> <h3> Fuiste registrado con éxito  </h3><br> <p>Podés ingresar al sistema con tu email y el siguiente password <strong> ${password} </strong>, te aconsejamos cambiarlo para mayor seguridad.</p>
    <br><br><br>
    <div><img src="cid:pap-inst.png" style="width: 100%;"/></div>
    </html>`,
    inline: filename
  };

  mailgun.messages().send(data, err => {
    if (err) {
      throw new Error(
        "Error al enviar el correo, contáctese con el adminsitrador"
      );
    }
    return true;
  });
};

exports.sendRecoverEmail = async (recipient, password) => {
  new Promise((resolve, reject) => {
    var data = {
      from:
        "Dirección Pcial. Estadística <no-responder@estadistica.ec.gba.gov.ar>",
      to: "tau150@hotmail.com",
      subject: "Reseteo de clave",
      html: `<html> <h3> Generación de Nueva Clave </h3><br> <p> El proceso de reseteo fue realizado con éxito, podés ingresar con tu email y la siguiente contraseña <strong> ${password} </strong>, te aconsejamos cambiarlo para mayor seguridad.</p> <br><br><br>  <div><img src="cid:pap-inst.png" style="width: 100%;"/></div> </html>`,
      inline: filename
    };

    mailgun.messages().send(data, err => {
      if (err) {
        if (err) {
          throw new Error(
            "Error al enviar el correo,  contáctese con el adminsitrador"
          );
        }
      }
      return true;
    });
  });
};
