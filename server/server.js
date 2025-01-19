

// const express = require('express');
// const fs = require('fs'); // Importar el módulo fs para leer archivos
// const app = express();


// const pathToData = '../client/files/src/data/userdata.json'; // Ruta al archivo JSON

// app.get('/api/users', (req, res) => {
//   fs.readFile(pathToData, 'utf-8', (err, data) => {
//     if (err) {
//       console.error('Error al leer el archivo:', err);
//       res.status(500).json({ error: 'Error al leer el archivo' }); 
//       return;
//     }

//     try {
//       const users = JSON.parse(data);
//       res.json({ users });
//     } catch (error) {
//       console.error('Error al parsear el JSON:', error);
//       res.status(500).json({ error: 'Error al parsear el JSON' });
//     }
//   });
// });

// app.listen(5000, () => {
//   console.log("Servidor iniciado en el puerto 5000");
// });

const express = require('express');
const fs = require('fs');
const app = express();

const pathToData = './userdata.json'; 

// app.get('/api/users', (req, res) => {
//   fs.readFile(pathToData, 'utf-8', (err, data) => {
//     if (err) {
//       console.error('Error al leer el archivo:', err);
//       res.status(500).json({ error: 'Error al leer el archivo' }); 
//       return;
//     }

//     try {
//       const users = JSON.parse(data);
//       res.json([users]); 
//     } catch (error) {
//       console.error('Error al parsear el JSON:', error);
//       res.status(500).json({ error: 'Error al parsear el JSON' });
//     }
//   });
// });

// app.listen(5000, () => {
//   console.log("Servidor iniciado en el puerto 5000");
// });
app.get('/', (req, res) => {
  fs.readFile(pathToData, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      res.status(500).json({ error: 'Error al leer el archivo' }); 
      return;
    }

    try {
      const users = JSON.parse(data);
      res.json(users); // Envía directamente el objeto 'users'
    } catch (error) {
      console.error('Error al parsear el JSON:', error);
      res.status(500).json({ error: 'Error al parsear el JSON' });
    }
  });

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});


});