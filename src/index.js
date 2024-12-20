import { CryptoBlock } from "./cryptoBlock.js";
import { CryptoBlockChain } from "./cryptoBlockChain.js";

let smashCoin = new CryptoBlockChain();

smashCoin.addNewBlock(
  new CryptoBlock(1, "01/06/2024", {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50,
  })
);
smashCoin.addNewBlock(
  new CryptoBlock(2, "01/07/2024", {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100,
  })
);
console.log(JSON.stringify(smashCoin, null, 4));
