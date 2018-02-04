const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })
		.send({ from: accounts[0], gas:'1000000' });

	factory.setProvider(provider);

	await factory.methods.createCampaign('100').send({
		from: accounts[0],
		gas: '1000000'
	});

	[campaignAddress] = await factory.methods.getDeployedCampaigns().call();
	campaign = await new web3.eth.Contract(
		JSON.parse(compiledCampaign.interface),
		campaignAddress
	);

});

describe( 'Campaign', () => {
	it('deploys a factory and a campaign', () => {
		assert.ok(factory.options.address);
		assert.ok(campaign.options.address);
	});

	it('marks caller as the campaign manager', async () => {
		const manager = await campaign.methods.manager().call();
		assert.equal(accounts[0], manager);
	});

	it('allows people to contribute money and marks them as approvers', async () => {
		await campaign.methods.contribute().send({
			value: '200',
			from: accounts[1]
		});
		const isContributer = await campaign.methods.approvers(accounts[1]);
		assert(isContributer);
	});

	it('requires a minimum contribution', async () => {
		try {
			await campaign.methods.contribute().send({
				value: '5',
				from: accounts[1]
			});
			assert(false);
		} catch (err) {
			assert(err);
		}
	});

	it('allows a manager to make a payment request', async () => {
		await campaign.methods
		.createRequest('Buy batteries', '100', accounts[1])
		.send({ from: accounts[0], gas: '1000000'});

		const request = await campaign.methods.requests(0).call();
	
		assert.equal('Buy batteries', request.description);
	});

	// contribute to contract
	it('processes requests', async () => {
		await campaign.methods.contribute().send({
			from: accounts[0],
			value: web3.utils.toWei('10', 'ether')
		});

		// create request
		await campaign.methods
		.createRequest('new request', web3.utils.toWei('5', 'ether'), accounts[1] )
		.send({ from: accounts[0], gas: '1000000'});

		// vote on request and approve it
		await campaign.methods.approveRequest(0).send({
			from: accounts[0],
			gas: '1000000'
		});

		// finalize the request after approval
		await campaign.methods.finalizeRequest(0).send({
			from: accounts[0],
			gas: '1000000'
		});

		let balance = await web3.eth.getBalance(accounts[1]);
		balance = web3.utils.fromWei(balance, 'ether');
		balance = parseFloat(balance);

		// Can't use 105 because some money is used up as gas in other operations in other tests.
		// So allow for some flexibility by going for a lower number.
		assert(balance > 104);


	});



});
