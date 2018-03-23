// @flow
import type { Node } from 'react'
import React from 'react'
import { withStyles } from 'material-ui/styles/index'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight'
import ElevatedItem from '../ElevatedItem/index'

const styles = theme => ({
  post: {
    alignItems: 'stretch'
  },
  avatar: {
    width: '60px',
    height: '60px'
  },
  postBody: {
    ...theme.typography.subheading,
    padding: '10px 4px 10px 24px'
  },
  postTitle: {
    ...theme.typography.display1,
    fontSize: '0.9rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '0.35rem'
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
})

type Props = {
  classes: {
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

export default withStyles(styles)((props: Props) => <ElevatedItem reactive>
  <ListItem divider classes={{root: props.classes.post}}>
    <Avatar className={props.classes.avatar} alt={props.author} src={props.avatar} />
    <div className={props.classes.postBody}>
      <div className={props.classes.postTitle}>
        {props.author}
        <KeyboardArrowRightIcon className={props.classes.postTitleSep} />
        {props.date}
      </div>
      <div className={props.classes.postText}>
        {props.children}
      </div>
    </div>
  </ListItem>
</ElevatedItem>)
