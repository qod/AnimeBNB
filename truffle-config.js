const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
    compilers: {
        solc: {
            version: '0.6.12',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    },


    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "5777"
        },
        "ropsten": {
            provider: () => new HDWalletProvider("", "https://ropsten.infura.io/v3/", 0),
            network_id: 3,
            gas: 8000000,
            gasPrice: 12000000000, // 12 Gwei
        },
        bsctestnet: {
            provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
            network_id: 97,
            gas: 28765632,
            gasPrice: 10000000000, // 10 Gwei
        },
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

    plugins: [
        'truffle-plugin-verify',
        'truffle-contract-size'
    ],

    api_keys: {
        etherscan: "V28HJCGUP2XCHSV5IXXG6IK9W14HHXKDCY"
    },
};
