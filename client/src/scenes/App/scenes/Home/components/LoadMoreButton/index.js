// @flow
import React from 'react'
import { withStyles } from 'material-ui/styles/index'
import { ListItem, ListItemText } from 'material-ui/List'
import ElevatedItem from '../ElevatedItem/index'

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
  onClick: Function
}

export default withStyles(styles)((props: Props) => <ElevatedItem reactive>
  <ListItem button onClick={props.onClick} className={props.classes.button}>
    <ListItemText primary='Load more' />
  </ListItem>
</ElevatedItem>)
