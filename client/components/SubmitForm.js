import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import BountyHub from '../../ethereum/bountyhub';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class SubmitForm extends Component {
	state = {
		index: '',
		secret: '',
		solution: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async (event) => {
		event.preventDefault();

		const bountyHub = BountyHub(this.props.address);

		this.setState({ loading: true, errorMessage: '' });

		try {
			const accounts = await web3.eth.getAccounts();
			const returnString = await bountyHub.methods
				.submitSolution(this.state.index, this.state.secret, this.state.solution)
				.send({
					from: accounts[0]
				});

			console.log(returnString);

			Router.replaceRoute(`/bountyhubs/${this.props.address}`);
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false, secret: '', solution: '', index: '' });
	};

	render() {
		return (
			<div style={{ marginRight: '20px', marginTop: '25px' }}>
				<h4 className="ui horizontal divider header">
					<i className="paper plane icon" />
					Submit Solution
				</h4>
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Group widths="equal">
						<Form.Field>
							<label>Index</label>
							<Input
								value={this.state.index}
								onChange={(event) => this.setState({ index: event.target.value })}
							/>
						</Form.Field>
						<Form.Field>
							<label>Discovered Secret</label>
							<Input
								value={this.state.secret}
								onChange={(event) => this.setState({ secret: event.target.value })}
								label="address"
								labelPosition="right"
							/>
						</Form.Field>
					</Form.Group>
					<Form.Field>
						<label>Solution</label>
						<Form.TextArea
							value={this.state.solution}
							onChange={(event) => this.setState({ solution: event.target.value })}
						/>
					</Form.Field>

					<Message error header="Oops!" content={this.state.errorMessage} />
					<Button primary loading={this.state.loading}>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default SubmitForm;
