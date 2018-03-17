// @flow
import type { Node } from 'react'
import React from 'react'
import { withStyles } from 'material-ui/styles/index'

const styles = {
  container: {
    'margin-top': 100,
    'margin-left': 50,
    'margin-right': 50,
    border: '10px solid',
    'border-color': 'blue'
  }
}

type Props = {
  classes: {
    container: string
  },
  children?: Node
}

export default withStyles(styles)(
  (props: Props) => (<div className={props.classes.container}>
    {props.children}
  </div>)
)
