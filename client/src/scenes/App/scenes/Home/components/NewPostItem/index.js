// @flow
import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles/index'
import SignInButton from './components/SignInItem'
import EditBoxItem from './components/EditBoxItem'
import { toggleSignIn } from '../../../../components/SignIn/services/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  // TODO: change when connection is handled
  isSignedIn: true
})

const mapDispatchToProps = dispatch => ({
  toggleSignIn: (toggle: ?boolean) => dispatch(toggleSignIn(toggle))
})

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
  isSignedIn: boolean,
  toggleSignIn: Function
}

type State = {
  post: string,
  errorText: ?string
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(class extends Component<Props, State> {
  signInItem = () => <SignInButton handleClick={this.onSignIn} />

  editBoxItem = () => <EditBoxItem post={this.state.post} errorText={this.state.errorText} handleChange={this.onChange}
    handlePost={this.onPost} />

  onSignIn = () => {
    this.props.toggleSignIn(true)
  }

  onPost = () => {
    // TODO: post request
    if (this.state.post.length === 0) {
      this.setState({
        errorText: 'Error: cannot post empty message'
      })
      return
    }
    console.log(this.state.post)
    this.setState({
      post: '',
      errorText: null
    })
  }

  onChange = ({target: {value}}) => {
    if (value.length <= this.constructor.maxPostLength) {
      this.setState({
        post: value,
        errorText: null
      })
    } else {
      this.setState({
        errorText: `Posts are limited to ${this.constructor.maxPostLength} characters`
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

  render () {
    return this.props.isSignedIn ? this.editBoxItem() : this.signInItem()
  }
}))
