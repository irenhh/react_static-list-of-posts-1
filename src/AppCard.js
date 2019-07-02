import React from 'react';
import UserInfo from './UserInfo';
import UserPost from './UserPost';
import { posts } from './posts';
import { users } from './users';
import { comments } from './comments';

const postsWithComments = posts.map(post => (
  {
    ...post,
    comments: comments.filter(comment => post.id === comment.postId),
  }
));

const usersWithPosts = users.map(user => (
  {
    ...user,
    posts: postsWithComments.filter(post => user.id === post.userId),
  }
));

function AppCard() {
  return (
    usersWithPosts.map(user => (
      <div className="app-card">
        <UserInfo
          key={user.id}
          user={user}
        />

        <div className="user-post-wrapper">
          {user.posts.map(post => (
            <div className="user-post">
              <UserPost
                post={post}
              />
            </div>
          ))}
        </div>
      </div>
    ))
  );
}

export default AppCard;
