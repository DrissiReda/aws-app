// @flow
import type { Node } from 'react'
import React from 'react'
import { withStyles } from 'material-ui/styles/index'

const styles = {
  root: {}
}

type Props = {
  classes: {
    root: string
  },
  children?: Node
}

export default withStyles(styles)(
  (props: Props) => (<div className={props.classes.root}>
    {props.children}
  </div>)
)
