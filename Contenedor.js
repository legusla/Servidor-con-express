const fs = require('fs');

class Contenedor {
  constructor(file) {
    this.file = file;
  }
  async getAll() {
    try {
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
      const listaDeProducto = JSON.parse(contenido);
      
      return listaDeProducto;
    } catch (error) {
      console.error('Error:', error);
    };
  }

}

module.exports = Contenedor;