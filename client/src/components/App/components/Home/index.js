// @flow
import React from 'react'
import { withStyles } from 'material-ui/styles/index'

const styles = {
  root: {
    'margin-top': 100
  }
}

type Props = {
  classes: {
    root: string
  }
}

export default withStyles(styles)(
  (props: Props) => (<div className={props.classes.root}>
    Messages will be displayed here
  </div>)
)
