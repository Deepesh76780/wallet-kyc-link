async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const token = await ethers.deployContract("KycLink");
  
    console.log("Token address:", await token.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    // 0xDB5b8968117C49A6541B34336567DcFfE85d4c16
    // 0x6A9d5718894375afD894AcFef15898D95D28BcB8