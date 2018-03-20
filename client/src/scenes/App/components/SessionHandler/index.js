// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignInDialog from './components/SignInDialog/index'
import { toggleSignIn } from './services/actions'

const mapStateToProps = state => ({
  isOpen: state.sessionHandler.signInDialog.isOpen
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
  emailHelp: string
}

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component<Props, State> {
  handleConfirm = () => {
    // send request to server and close if connection accepted
    // display a <CircularProgress /> while waiting for response?
    this.props.toggleSignIn(false)
  }

  handleClose = () => {
    this.setState({
      email: '',
      password: ''
    })
    this.props.toggleSignIn(false)
  }

  handleEmailChange = event => {
    // test for common email errors and update this.state.emailHelp
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
      emailHelp: '',
      passwordHelp: ''
    }
  }

  render () {
    return <SignInDialog open={this.props.isOpen} email={this.state.email} password={this.state.password}
      emailHelp={this.state.emailHelp} handleConfirm={this.handleConfirm} handleClose={this.handleClose}
      handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange} />
  }
})
