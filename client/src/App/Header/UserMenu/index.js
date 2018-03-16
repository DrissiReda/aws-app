// @flow
import React from 'react'
import { withStyles } from 'material-ui/styles'
import Menu, { MenuItem } from 'material-ui/Menu'

const styles = {}

type Props = {
  classes: { list: string },
  open: boolean,
  handleClose: Function
}

export default withStyles(styles)(
  (props: Props) => (<Menu open={props.open} onClose={props.handleClose}>
    <MenuItem onClick={props.handleClose}>Profile</MenuItem>
    <MenuItem onClick={props.handleClose}>My account</MenuItem>
    <MenuItem onClick={props.handleClose}>Logout</MenuItem>
  </Menu>)
)
