// @flow
import React from 'react'
import { withStyles } from 'material-ui/styles/index'
import { ListItem, ListItemText } from 'material-ui/List'
import ElevatedItem from '../../../../components/ElevatedItem'

const styles = {
  button: {
    textAlign: 'center',
    padding: '24px'
  }
}

type Props = {
  classes: {
    button: string
  },
  handleClick: Function
}

export default withStyles(styles)((props: Props) => <ElevatedItem>
  <ListItem button onClick={props.handleClick} className={props.classes.button}>
    <ListItemText primary='Sign in to post' />
  </ListItem>
</ElevatedItem>)
