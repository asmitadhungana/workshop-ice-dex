require("@nomiclabs/hardhat-waffle");
const dotenv = require('dotenv');
dotenv.config({path: '.env'});

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    frost: {
      url: `https://frost-rpc.icenetwork.io:9933`,
      accounts: [DEPLOYER_PRIVATE_KEY]
    }
  }
};


