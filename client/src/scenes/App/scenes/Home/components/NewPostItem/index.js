// @flow
import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles/index'
import SignInButton from './components/SignInItem'
import EditBoxItem from './components/EditBoxItem'

const styles = {
  signInButton: {
    textAlign: 'center',
    padding: '24px'
  },
  editBoxItem: {
    display: 'block',
    padding: '24px 24px 14px 24px'
  },
  editBoxButtons: {
    paddingTop: '8px',
    textAlign: 'right'
  },
  editBoxSendButton: {
    marginLeft: '10px'
  }
}

type Props = {
  signedIn: boolean
}

type State = {
  post: string,
  errorText: ?string
}

export default withStyles(styles)(class extends Component<Props, State> {
  signInItem = () => <SignInButton handleClick={this.onSignIn} />

  editBoxItem = () => <EditBoxItem post={this.state.post} errorText={this.state.errorText} handleChange={this.onChange}
    handlePost={this.onPost} />

  onSignIn = () => {
    // open sign in dialog
  }

  onPost = () => {
    console.log(this.state.post)
    this.setState({
      post: '',
      errorText: null
    })
  }

  onChange = ({target: {value}}) => {
    if (value.length < this.constructor.maxPostLength) {
      this.setState({
        post: value,
        errorText: null
      })
    } else if (value.length === this.constructor.maxPostLength) {
      this.setState({
        post: value,
        errorText: this.constructor.lengthError
      })
    }
  }

  constructor (props: Props) {
    super(props)
    this.state = {
      post: '',
      errorText: null
    }
  }

  static get maxPostLength () {
    return 255
  }

  static get lengthError () {
    return 'Posts are limited to 255 characters'
  }

  static get postError () {
    return 'Error: message could not be posted'
  }

  render () {
    return this.props.signedIn ? this.editBoxItem() : this.signInItem()
  }
})
