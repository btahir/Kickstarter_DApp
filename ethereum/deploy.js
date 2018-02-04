const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
		'mixed future mosquito observe pass machine unfold illness mistake tackle mule wreck',
		'https://rinkeby.infura.io/M5I9AfoSR1imwvWmNdMd'
	);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('attempting to deploy account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: '1000000', from: accounts[0] });

		console.log('Contract deployed to', result.options.address);
};
deploy();