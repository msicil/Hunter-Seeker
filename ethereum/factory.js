import web3 from './web3';
import BountyHubFactory from './build/BountyHubFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(BountyHubFactory.interface),
	'0x40ccAA70623C787d7FB07AF0a278A78461b4829B'
);

export default instance;
