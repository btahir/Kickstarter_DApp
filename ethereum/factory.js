import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x387A91251b8C651AF1b5C9106B2C92A12691FCf6'
);

export default instance;

