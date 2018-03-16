// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'

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
  ({classes, isOpen, close}: Props) => (<Drawer open={isOpen} onClose={close}>
    <List className={classes.list}>
      <ListItem component={Link} to='/' button onClick={close}>
        <ListItemText primary='Home' />
      </ListItem>
      <ListItem component={Link} to='/about' button onClick={close}>
        <ListItemText primary='About' />
      </ListItem>
      <ListItem component={Link} to='/topics' button onClick={close}>
        <ListItemText primary='Topics' />
      </ListItem>
    </List>
  </Drawer>)
)
