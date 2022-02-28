const hre = require("hardhat");

async function main() {
  // Deploy the token contract
  const Token = await ethers.getContractFactory("Token");
  token = await Token.deploy("Barcelona", "BARCA", (10 ** 18).toString());
  await token.deployed();

  // Deploy the factory contract
  const Factory = await hre.ethers.getContractFactory("Factory");
  const factory = await Factory.deploy();

  await factory.deployed();

  // Create an Exchange through the factory contract
  await factory.createExchange(token.address);

  // Get the address of the deployed exchange
  const exchangeAddress = await factory.getExchange(token.address);

  console.log("Factory deployed to:", factory.address);
  console.log("Exchange deployed to:", exchangeAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });