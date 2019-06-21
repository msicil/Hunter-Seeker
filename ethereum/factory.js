import web3 from './web3';
import BountyHubFactory from './build/BountyHubFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(BountyHubFactory.interface),
	'0xCa459EDF5ab10d00042b67067af0720cB1CDB5b0'
);

export default instance;
