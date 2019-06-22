import web3 from './web3'
import BountyHubFactory from './build/BountyHubFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(BountyHubFactory.interface),
  '0xDD07b36D8a416013582Ef3a1276AB3f999Aec195'
)

export default instance
