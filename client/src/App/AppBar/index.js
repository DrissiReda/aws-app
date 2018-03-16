// @flow
import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import AccountCircle from 'material-ui-icons/AccountCircle'
import MenuIcon from 'material-ui-icons/Menu'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

type Props = {
  classes: {
    root: string,
    flex: string,
    menuButton: string
  },
  openDrawer: Function,
  title: string
}

export default withStyles(styles)(
  ({classes, openDrawer, title}: Props) => (<AppBar className={classes.root}>
    <Toolbar>
      <IconButton className={classes.menuButton} aria-label='Menu' color='inherit' onClick={openDrawer}>
        <MenuIcon />
      </IconButton>
      <Typography variant='title' className={classes.flex} color='inherit'>
        {title}
      </Typography>
      <IconButton aria-label='User menu' color='inherit'>
        <AccountCircle />
      </IconButton>
    </Toolbar>
  </AppBar>)
)
