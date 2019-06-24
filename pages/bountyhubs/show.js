import React, { Component } from 'react';
import { Card, Grid, Table, Segment } from 'semantic-ui-react';
import Layout from '../../client/components/Layout';
import FundForm from '../../client/components/FundForm';
import BountyHub from '../../ethereum/build/BountyHub.json';
import web3 from '../../ethereum/web3';
import HuntForm from '../../client/components/HuntForm';
import SubmitForm from '../../client/components/SubmitForm';

class BountyHubShow extends Component {
	static async getInitialProps(props) {
		const bountyHub = await new web3.eth.Contract(JSON.parse(BountyHub.interface), props.query.address);
		const accounts = await web3.eth.getAccounts();

		const summary = await bountyHub.methods.getSummary().call({
			from: accounts[0]
		});

		const hunts = await bountyHub.methods.getHunts().call({
			from: accounts[0]
		});

		const huntOptions = hunts.map((hunt, index) => {
			return {
				key: index.toString(),
				value: index.toString(),
				text: index.toString()
			};
		});

		return {
			address: props.query.address,
			balance: summary[0],
			huntCount: summary[1],
			accessPoint: summary[2],
			manager: summary[3],
			status: summary[4],
			hunts,
			huntOptions
		};
	}

	renderCards() {
		const { balance, accessPoint } = this.props;

		const items = [
			{
				header: accessPoint,
				meta: 'Access Point (URL)',
				description: 'Target URL the hunter should try and infiltrate'
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
				<h3>
					Bounty Hub
					<h4>Status: {this.props.status}</h4>
				</h3>

				<Grid celled>
					<Grid.Row>
						<Grid.Column width={11}>
							{this.renderCards()}
							<Table celled>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Index</Table.HeaderCell>
										<Table.HeaderCell>Reward (ether)</Table.HeaderCell>
										<Table.HeaderCell>Complete</Table.HeaderCell>
										<Table.HeaderCell>Solution</Table.HeaderCell>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									{this.props.hunts.map((hunt, index) => {
										return (
											<Table.Row key={index + '-hunt'}>
												<Table.Cell>{index}</Table.Cell>
												<Table.Cell>
													{hunt.reward ? web3.utils.fromWei(hunt.reward, 'ether') : ''}
												</Table.Cell>
												<Table.Cell>{hunt.complete ? hunt.complete.toString() : ''}</Table.Cell>
												<Table.Cell>{hunt.solution}</Table.Cell>
											</Table.Row>
										);
									})}
								</Table.Body>
							</Table>
							<SubmitForm address={this.props.address} huntOptions={this.props.huntOptions} />
						</Grid.Column>

						<Grid.Column width={5} style={{ paddingTop: '30px' }}>
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
				</Grid>
			</Layout>
		);
	}
}

export default BountyHubShow;
