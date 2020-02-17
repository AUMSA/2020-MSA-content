import React from 'react'
import PropTypes from 'prop-types'
import Video from './Video'

function Displayer(props) {
  return <div>
    {props.posts.map((post) => <Video post={post} />)}
  </div>
}

Displayer.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Displayer
