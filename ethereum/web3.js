import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//We are on browser with metamask
	web3 = new Web3(window.web3.currentProvider);
} else {
	//Off browser or no metamask
	const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/3182ffd698d445f99f64ad1dd9679627');
	web3 = new Web3(provider);
}

export default web3;
