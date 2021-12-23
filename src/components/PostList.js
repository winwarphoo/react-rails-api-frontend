import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from './Post';

const PostList = (props) => {
  const posts = props.posts.map((post) => {
    return(
      <Grid item xs={4} key={post.id}>
        <Post
          title={post.title}
          content={post.content}
          id={post.id}
          onDelete={props.onDelete}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={4}>
      {posts}
    </Grid>
  );
}

export default PostList;