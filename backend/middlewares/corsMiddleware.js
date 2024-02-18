// Importar el módulo cors
const cors = require("cors");

// Definir las opciones de cors
const corsOptions = {
  // Permitir los orígenes que se encuentren en la variable de entorno URL_FRONTEND o en localhost:3000
  origin: function (origin, callback) {
    // Si el origen es undefined, significa que la petición no tiene origen, como una petición desde Postman
    if (origin === undefined) {
      // Permitir la petición sin origen
      callback(null, true);
    } else {
      // Si el origen es una URL válida
      if (origin.startsWith("http://") || origin.startsWith("https://")) {
        // Obtener el dominio del origen
        const domain = origin.split("://")[1];
        // Verificar si el dominio coincide con alguno de los permitidos
        if (domain === process.env.URL_FRONTEND || domain === "localhost:3000") {
          // Permitir la petición con el origen válido
          callback(null, true);
        } else {
          // Crear un error para rechazar la petición con el origen inválido
          const error = new Error("Not allowed by CORS");
          error.status = 403;
          callback(error, false);
        }
      } else {
        // Crear un error para rechazar la petición con el origen mal formado
        const error = new Error("Invalid origin");
        error.status = 400;
        callback(error, false);
      }
    }
  },
  // Permitir las credenciales, como las cookies
  credentials: true,
  // Permitir los métodos HTTP que se pueden usar
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  // Permitir los encabezados HTTP que se pueden enviar
  allowedHeaders: ["Content-Type", "Authorization"],
  // Exponer los encabezados HTTP que se pueden recibir
  exposedHeaders: ["Content-Type", "Authorization"],
};

// Exportar el middleware de cors con las opciones definidas
module.exports = cors(corsOptions);
