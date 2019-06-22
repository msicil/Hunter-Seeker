import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import BountyHub from '../../ethereum/bountyhub';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class FundForm extends Component {
	state = {
		value: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async (event) => {
		event.preventDefault();

		const bountyHub = BountyHub(this.props.address);

		this.setState({ loading: true, errorMessage: '' });

		try {
			const accounts = await web3.eth.getAccounts();
			await bountyHub.methods.fundHub().send({
				from: accounts[0],
				value: web3.utils.toWei(this.state.value, 'ether')
			});

			Router.replaceRoute(`/bountyhubs/${this.props.address}`);
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false, value: '' });
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Amount</label>
					<Input
						value={this.state.value}
						onChange={(event) => this.setState({ value: event.target.value })}
						label="ether"
						labelPosition="right"
					/>
				</Form.Field>

				<Message error header="Oops!" content={this.state.errorMessage} />
				<Button primary loading={this.state.loading}>
					Deposit
				</Button>
			</Form>
		);
	}
}

export default FundForm;
