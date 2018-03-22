// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignInDialog from './components/SignInDialog/index'
import { toggleSignIn } from './services/actions'
import ProgressDialog from './components/ProgressDialog/index'
import { initSession } from '../../services/sessionHandler'

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
    // this.setState({waiting: true})
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
    if (this.state.waiting) {
      return <ProgressDialog />
    } else {
      return <SignInDialog open={this.props.isOpen} email={this.state.email} password={this.state.password}
        handleConfirm={this.handleConfirm} handleClose={this.handleClose} handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange} />
    }
  }
})
