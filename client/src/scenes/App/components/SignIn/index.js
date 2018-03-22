// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from './components/Dialog/index'
import { toggleSignIn } from './services/actions'
import { initSession } from '../../services/sessionHandler'

const mapStateToProps = state => ({
  isOpen: state.signIn.dialog.isOpen
})

const mapDispatchToProps = dispatch => ({
  toggleSignIn: (toggle: ?boolean) => dispatch(toggleSignIn(toggle))
})

type Props = {
  isOpen: boolean,
  toggleSignIn: Function
}

type State = {
  email: string,
  password: string,
  waiting: boolean
}

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component<Props, State> {
  handleConfirm = () => {
    const onSuccess = (response) => {
      this.handleClose()
      console.log(response)
    }
    const onError = (error) => {
      this.setState({waiting: false})
      // display wrong email or password error
      console.log(error)
    }
    this.setState({waiting: true})
    initSession(this.state.email, this.state.password, onSuccess, onError)
  }

  handleClose = () => {
    this.setState({
      email: '',
      password: '',
      waiting: false
    })
    this.props.toggleSignIn(false)
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  constructor (props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      waiting: false
    }
  }

  render () {
    return <Dialog open={this.props.isOpen} waiting={this.state.waiting} email={this.state.email}
      password={this.state.password} handleConfirm={this.handleConfirm} handleClose={this.handleClose}
      handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange} />
  }
})
