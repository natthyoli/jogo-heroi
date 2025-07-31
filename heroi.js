class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "fez um ataque misterioso";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}!`);
  }
}

// Exemplos:
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
heroi1.atacar();

const heroi2 = new Heroi("Yennefer", 120, "mago");
heroi2.atacar();

const heroi3 = new Heroi("Ip Man", 40, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Hanzo", 25, "ninja");
heroi4.atacar();
