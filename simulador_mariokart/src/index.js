const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Personagem {
    constructor(nome, velocidade, manobrabilidade, poder) {
        this.nome = nome
        this.velocidade = velocidade
        this.manobrabilidade = manobrabilidade
        this.poder = poder
    }
}

class Corrida {
    constructor(personagem1, personagem2) {
        this.personagem1 = personagem1
        this.personagem2 = personagem2
    }

    jogar_dado() {
        let numeroSorteado = Math.floor((Math.random() * 6) + 1)
        return numeroSorteado
    }

    iniciar_corrida(personagem1, personagem2) {
        let pontosP1 = 0
        let pontosP2 = 0
        // tipos de pista | 0 - reta, 1 - curva, 2 - confronto
        for(let i = 0; i < 5; i++) {
            let dadoP1 = this.jogar_dado()
            let dadoP2 = this.jogar_dado()
            let tipoPista = Math.floor((Math.random() * 3))
            switch(tipoPista) {
                case 0:
                    let velocidadeP1 = personagem1.velocidade + dadoP1
                    let velocidadeP2 = personagem2.velocidade + dadoP2
                    if(velocidadeP1 > velocidadeP2) {
                        console.log(personagem1.nome + " acelerou na reta!")
                        pontosP1 += 1
                    } else if(velocidadeP2 > velocidadeP1) {
                        console.log(personagem2.nome + " acelerou na reta!")
                        pontosP2 += 1
                    }
                    break
                case 1:
                    let manobrabilidadeP1 = personagem1.manobrabilidade + dadoP1
                    let manobrabilidadeP2 = personagem2.manobrabilidade + dadoP2
                    if(manobrabilidadeP1 > manobrabilidadeP2) {
                        console.log(personagem1.nome + " manobrou na curva!")
                        pontosP1 += 1
                    } else if(manobrabilidadeP2 > manobrabilidadeP1) {
                        console.log(personagem2.nome + " manobrou na curva!")
                        pontosP2 += 1
                    }
                    break
                case 2:
                    let poderP1 = personagem1.poder + dadoP1
                    let poderP2 = personagem2.poder + dadoP2
                    if(poderP1 > poderP2) {
                        console.log(personagem1.nome + " soltou poder!")
                        pontosP1 += 1
                    } else if(poderP2 > poderP1) {
                        console.log(personagem2.nome + " soltou poder!")
                        pontosP2 += 1
                    }
                    break
            }
        }
        pontosP1 > pontosP2 ? console.log(personagem1.nome + " venceu a corrida!") : console.log(personagem2.nome + " venceu a corrida!")
    }
}

const Mario = new Personagem("Mario", 4, 3, 3)
const Peach = new Personagem("Peach", 3, 4, 2)
const Yoshi = new Personagem("Yoshi", 2, 4, 3)
const Bowser = new Personagem("Bowser", 5, 2, 5)
const Luigi = new Personagem("Luigi", 3, 4, 4)
const DonkeyKong = new Personagem("Donkey Kong", 2, 2, 5)

const personagens = [Mario, Peach, Yoshi, Bowser, Luigi, DonkeyKong]

console.log("🏁 Seja bem-vindo a corrida Mario Kart! Lista de personagens:\n1) Mario\n2) Peach\n3) Yoshi\n4) Bowser\n5) Luigi\n6) Donkey Kong\n")

rl.question("Digite o personagem 1: ", (answer) => {
    const player1 = personagens[parseInt(answer)-1]
    rl.question("Agora digite o personagem 2: ", (answer) => {
        const player2 = personagens[parseInt(answer)-1]
        const corrida = new Corrida(player1, player2)
        corrida.iniciar_corrida(corrida.personagem1, corrida.personagem2)
        rl.close()
    })
})