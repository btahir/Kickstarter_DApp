import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x7d75e045001a8c00569975428eb6231d5711f01A'
);

export default instance;

