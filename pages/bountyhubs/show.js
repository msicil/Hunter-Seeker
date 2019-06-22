import React, { Component } from 'react';
import { Card, Grid, Button, GridColumn } from 'semantic-ui-react';
import Layout from '../../client/components/Layout';
import FundForm from '../../client/components/FundForm';
import BountyHub from '../../ethereum/build/BountyHub.json';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';
import HuntForm from '../../client/components/HuntForm';

class BountyHubShow extends Component {
	static async getInitialProps(props) {
		const bountyHub = await new web3.eth.Contract(JSON.parse(BountyHub.interface), props.query.address);
		const accounts = await web3.eth.getAccounts();

		const summary = await bountyHub.methods.getSummary().call({
			from: accounts[0]
		});

		return {
			address: props.query.address,
			balance: summary[0],
			huntCount: summary[1],
			accessPoint: summary[2],
			manager: summary[3]
		};
	}

	renderCards() {
		const { balance, manager, accessPoint, huntCount } = this.props;

		const items = [
			{
				header: manager,
				meta: 'Address of Manager',
				description: '',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: accessPoint,
				meta: 'Access Point (URL)',
				description: 'Target URL the hunter should try and infiltrate'
			},
			{
				header: huntCount,
				meta: 'Number of Active Hunts',
				description: 'Number of hidden keys within the Access Point'
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Hub Balance (ether)',
				description: 'Available funds left to award'
			}
		];

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<h3>Bounty Hub</h3>
				<Grid>
					<Grid.Row>
						<Grid.Column width={9}>
							{this.renderCards()}
							<h4 className="ui horizontal divider header">
								<i className="paper plane icon" />
								Submit Solution
							</h4>
						</Grid.Column>

						<Grid.Column width={6}>
							<h4 className="ui horizontal divider header">
								<i className="ethereum icon" />
								Fund Bounty Hub
							</h4>
							<FundForm address={this.props.address} />
							<h4 className="ui horizontal divider header">
								<i className="user secret icon" />
								Create New Hunt
							</h4>
							<HuntForm address={this.props.address} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column />
					</Grid.Row>
				</Grid>
			</Layout>
		);
	}
}

export default BountyHubShow;
