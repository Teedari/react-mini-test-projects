import React from 'react'
import Comments from '../components/Comments'


function Components() {
  const data  = {
    'author': {
      'name': 'Dari Godfred',
      'imgUrl': '../images/profile.jpg'
    },
    'text': 'Hello everyone, is a beautiful day',
    'date': new Date().toLocaleString()
  }
  return (
    <Comments data = {data}/>
  )
}

export default Components
