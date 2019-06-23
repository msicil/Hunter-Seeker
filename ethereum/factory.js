import web3 from './web3';
import BountyHubFactory from './build/BountyHubFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(BountyHubFactory.interface),
	'0x54b1ecAD4446E070010a2D22237D46FE9E7f2f70'
);

export default instance;
