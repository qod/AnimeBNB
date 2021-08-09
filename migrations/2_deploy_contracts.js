const AnimeBNB = artifacts.require("AnimeBNB.sol");
const IterableMapping = artifacts.require("IterableMapping.sol");


module.exports = async (deployer) => {

    /*
    deployer.deploy(IterableMapping).then(() => {
        deployer.deploy(MAIN);
    });
    deployer.link(IterableMapping, MAIN);
    */

    deployer.deploy(IterableMapping).then(() => {
        deployer.link(IterableMapping, AnimeBNB);
        return deployer.deploy(AnimeBNB);
    });

    /*
    await deployer.deploy(Token,
        "0xB06a4327FF7dB3D82b51bbD692063E9a180b79D9",
        1,
        1,
        1,
        1,
        1,
        1,
        "0xB06a4327FF7dB3D82b51bbD692063E9a180b79D9",
    ).then(async (r1) => {
        console.log({r1})
    });
    */

}
