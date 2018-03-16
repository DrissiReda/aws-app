// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'

const buttons = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'About',
    to: '/about'
  },
  {
    name: 'Topics',
    to: '/topics'
  }
]

const styles = {
  list: {
    width: 250
  }
}

type Props = {
  classes: { list: string },
  isOpen: boolean,
  close: Function
}

export default withStyles(styles)(
  (props: Props) => (<Drawer open={props.isOpen} onClose={props.close}>
    <List className={props.classes.list}>
      {buttons.map(button => (
        <ListItem key={button.name} component={Link} to={button.to} button onClick={props.close}>
          <ListItemText primary={button.name} />
        </ListItem>
      ))}
    </List>
  </Drawer>)
)
