import React, {Component} from 'react'
import {Card, Button} from 'semantic-ui-react'
import factory from '../ethereum/factory'
import Layout from '../client/components/Layout'
import {Link} from '../routes'

class BountyIndex extends Component {
  static async getInitialProps() {
    const bountyHubs = await factory.methods.getDeployedHubs().call()

    return {bountyHubs}
  }

  renderBountyHubs() {
    const items = this.props.bountyHubs.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/bountyhubs/${address}`}>
            <a>View Bounty Hub</a>
          </Link>
        ),
        fluid: true
      }
    })

    return <Card.Group items={items} />
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Active Bounty Hubs</h3>

          <Link route="/bountyhubs/new">
            <a>
              <Button
                floated="right"
                content="Create Bounty Hub"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderBountyHubs()}
        </div>
      </Layout>
    )
  }
}

export default BountyIndex
