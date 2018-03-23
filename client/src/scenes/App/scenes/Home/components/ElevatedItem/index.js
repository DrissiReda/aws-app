// @flow
import type { Node } from 'react'
import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles/index'
import Paper from 'material-ui/Paper'

const styles = {
  elevated: {
    position: 'relative',
    zIndex: '1'
  }
}

type Props = {
  classes: {
    elevated: string
  },
  reactive: boolean,
  children?: Node
}

type State = {
  elevation: number
}

export default withStyles(styles)(class extends Component<Props, State> {
  onMouseOver = () => this.setState({elevation: this.constructor.focusElevation})
  onMouseOut = () => this.setState({elevation: this.constructor.restElevation})

  constructor (props: Props) {
    super(props)
    this.state = {
      elevation: this.constructor.restElevation
    }
  }

  static get restElevation () {
    return 2
  }

  static get focusElevation () {
    return 6
  }

  render () {
    return <Paper className={this.state.elevation !== this.constructor.restElevation ? this.props.classes.elevated : ''}
      elevation={this.state.elevation} onMouseOver={this.props.reactive && this.onMouseOver}
      onMouseOut={this.props.reactive && this.onMouseOut}>
      {this.props.children}
    </Paper>
  }
})
