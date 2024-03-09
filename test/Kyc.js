const { expect } = require("chai");

describe("Kyc contract", function () {
  it("Add Address to wallet", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();
    console.log(owner,addr1,addr2);
    const KycToken = await ethers.deployContract("KycLink");
    const adx = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const add = await KycToken.addWallet(
      "Qme3jnyb5oQ6Jgya5fD53MkgAPXbvi21uExGweUmLiwvBj",
      adx
    );

    const data = await KycToken.getWallet(
      "Qme3jnyb5oQ6Jgya5fD53MkgAPXbvi21uExGweUmLiwvBj"
    );
    expect(data[0]).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  });
});
