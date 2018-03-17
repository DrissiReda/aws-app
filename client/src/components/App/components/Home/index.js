// @flow
import React from 'react'
import PostList from './components/PostList/index'
import Post from './components/Post/index'

const dummyMessages = [
  {
    id: 1,
    date: '1/2/3',
    author: 'AAAAAAA',
    text: 'srnt ni rsntrs trs trt rst r rst'
  },
  {
    id: 2,
    date: '1/2/3',
    author: 'AAAAAAA',
    text: 'srnt ni rsntrs trs trt rst r rst'
  },
  {
    id: 3,
    date: '1/2/3',
    author: 'AAAAAAA',
    text: 'srnt ni rsntrs trs trt rst r rst'
  },
  {
    id: 4,
    date: '1/2/3',
    author: 'AAAAAAA',
    text: 'srnt ni rsntrs trs trt rst r rst'
  },
  {
    id: 5,
    date: '1/2/3',
    author: 'AAAAAAA',
    text: 'srnt ni rsntrs trs trt rst r rst'
  },
  {
    id: 6,
    date: '1/2/3',
    author: 'AAAAAAA',
    text: 'srnt ni rsntrs trs trt rst r rst'
  },
  {
    id: 7,
    date: '1/2/3',
    author: 'AAAAAAA',
    text: 'srnt ni rsntrs trs trt rst r rst'
  }
]

export default () => (<PostList>
  {dummyMessages.map(message => (
    <Post key={message.id} date={message.date} author={message.author}>
      {message.text}
    </Post>
  ))}
</PostList>)
