import web3 from './web3'
import BountyHub from './build/BountyHub.json'

export default address => {
  console.log(BountyHub.interface, address)
  return new web3.eth.Contract(JSON.parse(BountyHub.interface), address)
}
