const emailConfig = require('../config/email-config');
const mailgun = require('mailgun-js')(emailConfig());

exports.sendEmail = (recipient, password) => {
  new Promise((resolve, reject) => {
    var data = {
      from:
        'Dirección Pcial. Estadística <no-responder@estadistica.ec.gba.gov.ar>',
      to: 'tau150@hotmail.com',
      subject: 'Registro exitoso',
      html: `<html> <h3> Fuiste registrado con éxito </h3> <p>Podés ingresar al sistema con tu email y el siguiente password <strong> ${password} </strong>, te aconsejamos cambiarlo para mayor seguridad.</p></html>`,
    };

    mailgun.messages().send(data, err => {
      if (err) {
        return reject(error);
      }
      return resolve();
    });
  });
};

exports.sendRecoverEmail = (recipient, password) => {
  new Promise((resolve, reject) => {
    var data = {
      from:
        'Dirección Pcial. Estadística <no-responder@estadistica.ec.gba.gov.ar>',
      to: 'tau150@hotmail.com',
      subject: 'Registro exitoso',
      html: `<html> <h3> Generación de Nueva Clave </h3> <p> El proceso de reseteo fue realizado con éxito, podés ingresar con tu email y la siguiente contraseña <strong> ${password} </strong>, te aconsejamos cambiarlo para mayor seguridad.</p></html>`,
    };

    mailgun.messages().send(data, err => {
      if (err) {
        return reject(error);
      }
      return resolve();
    });
  });
};
