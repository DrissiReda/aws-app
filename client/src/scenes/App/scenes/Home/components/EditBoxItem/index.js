// @flow
import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles/index'
import ElevatedItem from '../ElevatedItem/index'
import { ListItem, ListItemText } from 'material-ui/List'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import SendIcon from 'material-ui-icons/Send'

const styles = {
  signInButton: {
    textAlign: 'center',
    padding: '24px'
  },
  editBoxItem: {
    display: 'block',
    padding: '16px 24px 18px 24px'
  },
  editBoxButtons: {
    paddingTop: '12px',
    textAlign: 'right'
  },
  editBoxSendButton: {
    marginLeft: '10px'
  }
}

type Props = {
  classes: {
    root: string,
    signInButton: string,
    editBoxItem: string,
    textField: string,
    editBoxButtons: string,
    editBoxSendButton: string
  },
  signedIn: boolean,
  onPost: Function,
  onSignIn: Function,
  maxLength: number
}

type State = {
  post: string,
  maxLengthReached: boolean
}

export default withStyles(styles)(class extends Component<Props, State> {
  signInItem = () => <ElevatedItem>
    <ListItem button onClick={this.props.onSignIn} className={this.props.classes.signInButton}>
      <ListItemText primary='Sign in to post' />
    </ListItem>
  </ElevatedItem>

  editBoxItem = () => <ElevatedItem>
    <ListItem className={this.props.classes.editBoxItem}>
      <TextField placeholder='Post something' multiline rows='3' rowsMax='0' value={this.state.post}
        onChange={this.handlePostChange} className={this.props.classes.textField} margin='dense' fullWidth
        error={this.state.maxLengthReached}
        helperText={this.state.maxLengthReached ? 'Posts are limited to 255 characters' : null} />
      <div className={this.props.classes.editBoxButtons}>
        <Button variant='raised' color='primary' aria-label='Post' onClick={this.onPost}>
          Post<SendIcon className={this.props.classes.editBoxSendButton} />
        </Button>
      </div>
    </ListItem>
  </ElevatedItem>

  onPost = () => {
    this.props.onPost(this.state.post)
    this.setState({
      post: '',
      maxLengthReached: false
    })
  }

  handlePostChange = ({target: {value}}) => {
    if (value.length < this.props.maxLength) {
      this.setState({
        post: value,
        maxLengthReached: false
      })
    } else if (value.length === this.props.maxLength) {
      this.setState({
        post: value,
        maxLengthReached: true
      })
    }
  }

  constructor (props: Props) {
    super(props)
    this.state = {
      post: '',
      maxLengthReached: false
    }
  }

  render () {
    return this.props.signedIn ? this.editBoxItem() : this.signInItem()
  }
})
