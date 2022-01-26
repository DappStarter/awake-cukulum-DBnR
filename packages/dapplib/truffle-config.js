require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stomach rival punch pulse install hat army gate'; 
let testAccounts = [
"0x7a6bc5711c2edcdf7c2c2c5e8ec47b37c03b6aa108ed0a91814b87c2f18a8a37",
"0x350fee1cf6faf074d9cef2c21f0bf4af191b138bdee44f238dd62643a63153ef",
"0x8149c181c1b98fdddac54c6714ed8d9784e03b62108da7cbadb4d516bffad0af",
"0x33582b77aeabae62f6e4dcb4d2ea7c15e33ad7b47a26cf56313d70ec4e30faa1",
"0x9e942c1426e209b58e4b30bbd49780923a88aa392253f0158f29231384a66ca8",
"0x4b2f8d90b1685feadff8b332757df563e30a250605b11fa9a10b40371ef34851",
"0x12fa00e9c37c477746e73155ed26271dc0f99d3148453cc2678fad3c9ba443eb",
"0x017566f8cc66e27f00ab7ac67213980063f0903a674447406da00775b5083c0e",
"0x4a13c9c574b39bc6c231215e151dfdd01a7b28a04f483a52912439ad335e2848",
"0x7fcdc669bcab6f80279d6799489d51f691ed6724db6336946d1d9a39b530b1f3"
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

