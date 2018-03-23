// @flow
import React from 'react'
import { withStyles } from 'material-ui/styles/index'
import { ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import SendIcon from 'material-ui-icons/Send'
import ElevatedItem from '../../../../components/ElevatedItem'

const styles = {
  editBoxItem: {
    display: 'block',
    padding: '24px 24px 14px 24px'
  },
  buttonWrapper: {
    paddingTop: '8px',
    textAlign: 'right'
  },
  postButton: {
    marginLeft: '10px'
  }
}

type Props = {
  classes: {
    editBoxItem: string,
    buttonWrapper: string,
    postButton: string
  },
  post: string,
  errorText: ?string,
  handleChange: Function,
  handlePost: Function
}

export default withStyles(styles)((props: Props) => <ElevatedItem>
  <ListItem className={props.classes.editBoxItem}>
    <TextField placeholder='Post something' multiline rowsMax='0' value={props.post} onChange={props.handleChange}
      margin='dense' fullWidth error={Boolean(props.errorText)} helperText={props.errorText} />
    <div className={props.classes.buttonWrapper}>
      <Button variant='flat' color='primary' aria-label='Post' onClick={props.handlePost}>
        Post<SendIcon className={props.classes.postButton} />
      </Button>
    </div>
  </ListItem>
</ElevatedItem>)
