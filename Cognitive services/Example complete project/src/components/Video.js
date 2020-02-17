import React from 'react'
import propTypes from 'prop-types'
import ReactPlayer from 'react-player'

function Video(props) {
    const post = props.post
        return <div>            
            <ReactPlayer
            url = {post.videoLink}
            playing
            controls
            />
        </div>
}

Video.propTypes = {
    post: propTypes.object.isRequired
}

export default Video