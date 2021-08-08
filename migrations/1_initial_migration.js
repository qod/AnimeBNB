const IterableMapping = artifacts.require('./IterableMapping.sol');
const AnimeBNB = artifacts.require('./AnimeBNB.sol');

module.exports = function(deployer) {
    deployer.deploy(IterableMapping).then(() => {
		deployer.link(IterableMapping, AnimeBNB);
		return deployer.deploy(AnimeBNB);
	});
		
}
