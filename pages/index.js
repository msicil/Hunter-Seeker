import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../client/components/Layout';
import { Link } from '../routes';

class BountyIndex extends Component {
	static async getInitialProps() {
		const bountyHubs = await factory.methods.getDeployedHubs().call();

		return { bountyHubs };
	}

	render() {
		return (
			<Layout>
				<div>
					<h3>Active Bounty Hubs</h3>
					<Link route="/bountyhubs/new">
						<a>
							<Button floated="right" content="Create Bounty Hub" icon="add circle" primary />
						</a>
					</Link>
					<Card.Group>
						{this.props.bountyHubs.map((details, index) => {
							return (
								<Card key={index} fluid>
									<Card.Content>
										<Card.Header>{details.accessPoint}</Card.Header>
										<Card.Meta>{details.bountyHubAddress}</Card.Meta>
									</Card.Content>
									<Card.Content extra>
										<Link route={`/bountyhubs/${details.bountyHubAddress}`}>
											<a>View Bounty Hub</a>
										</Link>
									</Card.Content>
								</Card>
							);
						})}
					</Card.Group>
				</div>
			</Layout>
		);
	}
}

export default BountyIndex;
