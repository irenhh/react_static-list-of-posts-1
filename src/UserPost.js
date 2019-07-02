import React from 'react';
import PropTypes from 'prop-types';
import PostBody from './PostBody';
import PostComment from './PostComment';

function UserPost(props) {
  return (
    <div>
      <PostBody
        postItem={props.post}
      />

      {props.post.comments.map(comment => (
        <PostComment
          commentItem={comment}
        />
      ))}
    </div>
  );
}

UserPost.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.object,
  }).isRequired,
};

export default UserPost;
