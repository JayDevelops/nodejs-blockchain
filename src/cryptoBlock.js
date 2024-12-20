/**
 * index: unique number tracking each block in the blockchain
 * timestamp: record of each occurence of each completed transation
 * data: object containing sender/recipient's details, completed transactions, quantity transactions.
 * precedingHash: pointer to the precedeing hash in the chain
 * Works like a linked list with verfiable cryptography hash
 *
 */
import SHA256 from "crypto-js/sha256.js";

class CryptoBlock {
  constructor(index, timestamp, data, precedingHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = this.computeHash();
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  //  deter users to spam blockchains, must need to go through difficulty to be verified
  proofOfWork(difficulty) {
    if (!Number.isInteger(difficulty) || difficulty <= 0) {
      throw new Error("Difficulty must be a positive integer.");
    }

    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

export { CryptoBlock };
