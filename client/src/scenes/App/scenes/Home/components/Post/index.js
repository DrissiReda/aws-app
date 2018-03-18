// @flow
import type { Node } from 'react'
import React, { Component, Fragment } from 'react'
import { withStyles } from 'material-ui/styles/index'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight'

const styles = {
  elevated: {
    position: 'relative',
    zIndex: '1'
  },
  post: {
    alignItems: 'stretch'
  },
  avatar: {
    width: '60px',
    height: '60px'
  },
  postBody: {
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '24px'
  },
  postTitle: {
    fontSize: '0.9rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  postTitleSep: {
    fontSize: 'inherit',
    lineHeight: 'inherit',
    verticalAlign: 'middle'
  },
  postText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}

type Props = {
  classes: {
    elevated: string,
    post: string,
    avatar: string,
    postBody: string,
    postTitle: string,
    postTitleSep: string,
    postText: string
  },
  date: string,
  author: string,
  avatar: string,
  children?: Node
}

export default withStyles(styles)(class Post extends Component<Props, any> {
  onMouseOver = () => this.setState({elevation: Post.focusElevation})
  onMouseOut = () => this.setState({elevation: Post.restElevation})

  constructor (props: Props) {
    super(props)
    this.state = {
      elevation: Post.restElevation
    }
  }

  static get restElevation () {
    return 2
  }

  static get focusElevation () {
    return 6
  }

  render () {
    return <Paper className={this.state.elevation !== Post.restElevation ? this.props.classes.elevated : ''}
      elevation={this.state.elevation}>
      <ListItem divider classes={{root: this.props.classes.post}} onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}>
        <Avatar className={this.props.classes.avatar} alt={this.props.author} src={this.props.avatar} />
        <ListItemText className={this.props.classes.postBody}>
          <Fragment>
            <Typography className={this.props.classes.postTitle} variant='display1' gutterBottom>
              {this.props.author}
              <KeyboardArrowRightIcon className={this.props.classes.postTitleSep} />
              {this.props.date}
            </Typography>
            <div className={this.props.classes.postText} >
              {this.props.children}
            </div>
          </Fragment>
        </ListItemText>
      </ListItem>
    </Paper>
  }
})
