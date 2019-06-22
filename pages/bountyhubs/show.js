import React, {Component} from 'react'
import {Card, Grid, Button} from 'semantic-ui-react'
import Layout from '../../client/components/Layout'
import BountyHub from '../../ethereum/build/BountyHub.json'
import web3 from '../../ethereum/web3'
import {Link} from '../../routes'

class BountyHubShow extends Component {
  static async getInitialProps(props) {
    const bountyHub = await new web3.eth.Contract(
      JSON.parse(BountyHub.interface),
      props.query.address
    )
    const accounts = await web3.eth.getAccounts()

    const summary = await bountyHub.methods.getSummary().call({
      from: accounts[0]
    })

    return {
      address: props.query.address,
      balance: summary[0],
      huntCount: summary[1],
      accessPoint: summary[2],
      manager: summary[3]
    }
  }

  renderCards() {
    const {balance, manager, accessPoint, huntCount} = this.props

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:
          'The manager created this campaign and can create requests to withdraw money',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: accessPoint,
        meta: 'Access Point (URL)',
        description: 'Target URL the hunter should try and infiltrate'
      },
      {
        header: huntCount,
        meta: 'Number of Requests',
        description:
          'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      },
      {
        header: huntCount,
        meta: 'Number of Active Hunts',
        description: 'Number of hidden keys within the accessPoint'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this hub has left to award.'
      }
    ]

    return <Card.Group items={items} />
  }

  render() {
    return (
      <Layout>
        <h3>Bounty Hub</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6} />
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/bountyhubs/${this.props.address}/hunts`}>
                <a>
                  <Button primary>View Hunts</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )
  }
}

export default BountyHubShow
