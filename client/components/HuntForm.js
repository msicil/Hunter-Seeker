import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import BountyHub from '../../ethereum/bountyhub';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class HuntForm extends Component {
	state = {
		secret: '',
		reward: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async (event) => {
		event.preventDefault();

		const bountyHub = BountyHub(this.props.address);

		this.setState({ loading: true, errorMessage: '' });

		try {
			const accounts = await web3.eth.getAccounts();
			await bountyHub.methods.createHunt(this.state.secret, this.state.reward).send({
				from: accounts[0]
			});

			Router.replaceRoute(`/bountyhubs/${this.props.address}`);
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false, secret: '', reward: '' });
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Hunt Secret</label>
					<Input
						value={this.state.secret}
						onChange={(event) => this.setState({ secret: event.target.secret })}
						label="address"
						labelPosition="right"
					/>
				</Form.Field>
				<Form.Field>
					<label>Reward</label>
					<Input
						value={this.state.reward}
						onChange={(event) => this.setState({ reward: event.target.reward })}
						label="ether"
						labelPosition="right"
					/>
				</Form.Field>

				<Message error header="Oops!" content={this.state.errorMessage} />
				<Button primary loading={this.state.loading}>
					Create
				</Button>
			</Form>
		);
	}
}

export default HuntForm;
