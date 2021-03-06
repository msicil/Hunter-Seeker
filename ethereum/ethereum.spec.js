const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const provider = ganache.provider()
const web3 = new Web3(provider)

const compiledFactory = require('../ethereum/build/BountyHubFactory.json')
const compliledBounty = require('../ethereum/build/BountyHub.json')

let accounts
let factory
let bountyAddress
let bounty

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'})

  console.log('done')

  await factory.methods.createBountyHub('google.com').send({
    from: accounts[0],
    gas: '1000000'
  })

  ;[bountyAddress] = await factory.methods.getDeployedHubs().call()
  bounty = await new web3.eth.Contract(
    JSON.parse(compliledBounty.interface),
    bountyAddress
  )
})

describe('Bounties', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address)
    assert.ok(bounty.options.address)
  })

  it('marks caller as the bounty manager', async () => {
    const manager = await bounty.methods.manager().call()
    assert.equal(accounts[0], manager)
  })

  xit('allows people to contribute money and marks them as approvers', async () => {
    await bounty.methods.contribute().send({
      value: '200',
      from: accounts[1]
    })
    const isContributor = await bounty.methods.approvers(accounts[1]).call()
    assert(isContributor)
  })

  xit('requires a minimum contribution', async () => {
    try {
      await bounty.methods.contribute().send({
        value: '5',
        from: accounts[1]
      })
      assert(false)
    } catch (err) {
      assert(err)
    }
  })

  xit('allows a manager to make a payment request', async () => {
    await bounty.methods
      .createRequest('Buy batteries', '100', accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      })
    const request = await bounty.methods.requests(0).call()

    assert.equal('Buy batteries', request.description)
  })

  xit('processes requests', async () => {
    await bounty.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    })

    await bounty.methods
      .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({from: accounts[0], gas: '1000000'})

    await bounty.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    })

    await bounty.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    })

    let balance = await web3.eth.getBalance(accounts[1])
    balance = web3.utils.fromWei(balance, 'ether')
    balance = parseFloat(balance)

    assert(balance > 104)
  })
})
