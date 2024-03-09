// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract KycLink {
    mapping(string => address[]) KycToWallet;


    struct MappingData {
        string key;
        address[] value;
    }

    string[] hashArray;

    // mapping is done between KYC and wallet
    function addWallet(string memory hash, address adx) public {
       
        if(KycToWallet[hash].length == 0)
        {
            hashArray.push(hash);
        }

        KycToWallet[hash].push(adx);
    }

    // get all the KYC
    function getWallet(string memory hash)
        public
        view
        returns (address[] memory)
    {
        return KycToWallet[hash];
    }


    function getAllHash() public view returns (MappingData[] memory) {

        uint256 length = hashArray.length;
        MappingData[] memory result = new MappingData[](length);

        for (uint256 i = 0; i < length; i++) {
            address[] memory value = KycToWallet[hashArray[i]];
            result[i] = MappingData(hashArray[i], value);
        }

        return result;
    }
}

// Qme3jnyb5oQ6Jgya5fD53MkgAPXbvi21uExGweUmLiwvBj , 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
