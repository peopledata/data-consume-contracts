require("dotenv").config()
require("@nomiclabs/hardhat-waffle")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
   version: "0.8.0",
  },
  
  paths: {
    artifacts: "./client/src/artifacts",
  },

  networks: {
    hardhat: {
      chainId: 1337
    },
    /*
    goerli: {
      url: 'https://goerli.infura.io/v3/291a07fc83f8438a84bc72d86689978b',
            accounts:[`0x${process.env.PRIVATE_KEY}`]
    }
    */
  },

};