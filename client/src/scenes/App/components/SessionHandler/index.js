// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignInDialog from './components/SignInDialog/index'
import { toggleSignIn } from './services/actions'
import * as validator from 'email-validator'
import ProgressDialog from './components/ProgressDialog/index'
import axios from 'axios'

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
  emailHelp: ?string,
  waiting: boolean
}

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component<Props, State> {
  handleConfirm = () => {
    // this.setState({waiting: true})
    axios.post('/signin', {
      email: this.state.email,
      password: this.state.password
    }).then((response) => {
      // this.setState({waiting: false})
      // this.props.toggleSignIn(false)
      console.log(response)
    }).catch((error) => {
      // this.setState({waiting: false})
      console.log(error)
    })
  }

  handleClose = () => {
    this.setState({
      email: '',
      password: '',
      emailHelp: null
    })
    this.props.toggleSignIn(false)
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
    event.target.value.length === 0 || validator.validate(event.target.value)
      ? this.setState({emailHelp: null})
      : this.setState({emailHelp: 'Invalid email'})
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
      emailHelp: null,
      waiting: false
    }
  }

  render () {
    if (this.state.waiting) {
      return <ProgressDialog />
    } else {
      return <SignInDialog open={this.props.isOpen} email={this.state.email} password={this.state.password}
        emailHelp={this.state.emailHelp} handleConfirm={this.handleConfirm} handleClose={this.handleClose}
        handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange}
        disableSignIn={this.state.emailHelp || this.state.password.length === 0 || this.state.email.length === 0} />
    }
  }
})
