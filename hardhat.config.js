/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
const API_KEY="H2FZ9GmXEt5TjO9MecvRUdWReaT6wxYp";
const SEPOLIA_PRIVATE_KEY="a8db26aa29da236ec52f34f5361a836acf86ad1b0d18bbfe36361b14996dd373";


module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
