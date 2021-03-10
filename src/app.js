const express = require('express');
const app = express();
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.get('/', function(req, res) {
    res.status(200).send("API running")
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
});

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
});

router.post('/api', (req, res) => {
    const nombre = req.body.data.nombre;
    const email = req.body.data.email;
    const direccion = req.body.data.direccion;
    const telefono = req.body.data.telefono;
    const persona = req.body.data.persona;
    const mail = {
        from: "Bici Tecla Café",
        to: email,
        bcc: "carlosaoreviator@gmail.com",
        subject: `Hola ${nombre}, tu registro a Bici Tecla Café fue exitoso`,
        html:   `<p><b>Gracias ${nombre}, tu registro a Bici Tecla Café fue exitoso.</b></p>
                <p>Nos comunicaremos contigo en ${email} o al ${telefono} para discutir los próximos pasos.</p>
                <p>Atentamente,</p>
                <p>El equipo de Bici Tecla Café</p>
                <hr>
                <p>Informacion proporcionada:</p>
                <ul><li>Nombre: ${nombre}</li>
                <li>Email: ${email}</li>
                <li>Dirección: ${direccion}</li>
                <li>Teléfono: ${telefono}</li>
                <li>Encargado: ${persona}</li>
                </ul>
                `,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.status(200).json({msg : "success"});
        }
    });
});

module.exports = app;