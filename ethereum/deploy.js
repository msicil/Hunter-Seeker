const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/BountyHubFactory.json');

const provider = new HDWalletProvider(
	'limb category quick maid teach gather visual order label nominee engine hidden',
	'https://rinkeby.infura.io/v3/3182ffd698d445f99f64ad1dd9679627'
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: '1000000', from: accounts[0] });

	console.log('Contract deployed to', result.options.address);
};
deploy();
