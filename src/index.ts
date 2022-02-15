import { Blockchain } from "./blockchain";


const blockchain = new Blockchain();

const numBlocos = Number(process.argv[3]) || 10
let chain = blockchain.chain

for (let i = 1; i <= numBlocos; i++) {
  const bloco = blockchain.criarBloco(`Bloco ${i}`);
  const mineInfo = blockchain.minerarBloco(bloco);
  chain = blockchain.enviarBloco(mineInfo.blocoMinerado)
}

console.log('____________ BLOCKCHAIN _____________')
console.log(chain)
