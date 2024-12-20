import { CryptoBlock } from "./cryptoBlock.js";

class CryptoBlockChain {
  // creates the array of blockchains
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty = 3;
  }

  startGenesisBlock() {
    return new CryptoBlock(0, "01/01/2024", "Initial Block in the Chain", "0");
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  // gets the previous block hash to point then computes new hash to the new block
  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock.hash;
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
  }

  checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];

      //  verify if the current block has its original hash
      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }

      //  verify the preceding block has its original hash
      if (precedingBlock.hash !== precedingBlock.computeHash()) {
        return false;
      }

      return true; //  return true for blocks that have valid hashes
    }
  }
}

export { CryptoBlockChain };
