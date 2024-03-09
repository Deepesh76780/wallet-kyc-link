// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract KycLink{
    
    mapping(string => address[])  KycToWallet;

    // mapping is done between KYC and wallet
    function addWallet(string memory hash, address adx) public {
        KycToWallet[hash].push(adx);
    }

    // get all the KYC
    function getWallet(string memory hash) public view returns(address[] memory){
        return KycToWallet[hash];
    }
}

// Qme3jnyb5oQ6Jgya5fD53MkgAPXbvi21uExGweUmLiwvBj , 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
