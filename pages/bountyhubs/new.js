import React, {Component} from 'react'
import {Form, Button, Input, Message} from 'semantic-ui-react'
import Layout from '../../client/components/Layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {Router} from '../../routes'

class BountyHubNew extends Component {
  state = {
    accessPoint: '',
    errorMessage: '',
    loading: false
  }

  onSubmit = async event => {
    event.preventDefault()

    this.setState({loading: true, errorMessage: ''})

    try {
      const accounts = await web3.eth.getAccounts()
      await factory.methods.createBountyHub(this.state.accessPoint).send({
        from: accounts[0]
      })
      console.log('done')
      Router.pushRoute('/')
    } catch (err) {
      this.setState({errorMessage: err.message})
    }

    this.setState({loading: false})
  }

  render() {
    return (
      <Layout>
        <h3>Create a Bounty Hub</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Access Point</label>
            <Input
              label="URL"
              labelPosition="right"
              value={this.state.accessPoint}
              onChange={event =>
                this.setState({accessPoint: event.target.value})
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    )
  }
}

export default BountyHubNew
