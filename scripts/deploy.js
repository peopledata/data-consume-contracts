const { ethers } = require("hardhat");

async function main() {
    [owner] = await ethers.getSigners();
    const DataConsumeContract = await ethers.getContractFactory("DataConsumeContract");
    const dataConsumeContract = await DataConsumeContract.deploy();
    await dataConsumeContract.deployed();

    console.log(`DataConsumeContract deployed to ${dataConsumeContract.address}`)
    

}
  
  // npx hardhat run --network localhost scripts/deploy.js
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });