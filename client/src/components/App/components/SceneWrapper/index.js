// @flow
import type { Node } from 'react'
import React from 'react'
import { withStyles } from 'material-ui/styles/index'

const styles = {
  wrapper: {
    'margin-top': '100px',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'width': '93%',
    'max-width': '800px',
    'border': '5px solid',
    'border-color': 'blue'
  }
}

type Props = {
  classes: {
    wrapper: string
  },
  children?: Node
}

export default withStyles(styles)(
  (props: Props) => (<div className={props.classes.wrapper}>
    {props.children}
  </div>)
)
