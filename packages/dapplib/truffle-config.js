require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot blanket razor scrub million idea kite slot genius'; 
let testAccounts = [
"0x4709853a89d4164603faa21f0f432b090dcf4b461f8b7d140a13ef221b109fb8",
"0x51303641e6bde0885c517724006295fa420722e590e5c285241f24c30abaf33c",
"0xeebf6effcfb509d1392ca94d90cff9b5d6edf875dd368227c34bd298598ff9a8",
"0x3ba857dbbfd4c975579de339b852d1586fa5a7e129b90393375187173837111b",
"0x17d544d67457a77b7d13c79c8ae9a0d566a8005b7f03de7ab2d1fb8ff50b9e86",
"0x06713a0a8613092bee3e5d06ce1220709e1bd17d687b3882ee7ca615d030a626",
"0x04fa236b861abddf575177783f4c251915afa7323e8305790faf4bd1b7616746",
"0x4f2201e05672150b0f8c589551b020920660c0947c31c6e85cc9acf8b99aae9a",
"0x20674b63b93c18bb118bc5901a4bc86ac9bd6fac64b6db69fc83d026c4928147",
"0x4041d24181b9587e0fa26bf44b795f9af202f6d980661aca0aff4c56cfb8fad3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

