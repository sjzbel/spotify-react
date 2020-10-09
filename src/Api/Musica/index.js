import * as musicas from "./files";

class Musica {
  nome;
  banda;
  file;

  /**
   * @param {Object} options
   * @param {String} options.nome
   * @param {String} options.banda
   * @param {musicas} options.file
   */
  constructor({ nome, banda, file }) {
    let thisFile;
    if (typeof file === "object") {
      thisFile = Object.keys(file)?.[0];
    }

    this.nome = nome;
    this.banda = banda;
    this.file = musicas?.[thisFile];
  }
}

export default Musica;
