// @flow
import type { Node } from 'react'
import React from 'react'
import { withStyles } from 'material-ui/styles/index'

const styles = {
  root: {
    'width': '100%'
  }
}

type Props = {
  classes: {
    root: string
  },
  date: string,
  author: string,
  children?: Node
}

export default withStyles(styles)(
  (props: Props) => (<div className={props.classes.root}>
    <div>{props.date}</div>
    <div>{props.author}</div>
    <div>{props.children}</div>
  </div>)
)
