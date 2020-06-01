import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'antd';

import * as actions from '../../actions/actions';
import AddPostForm from './AddPostForm';
import UpdatePost from './UpdatePost';
import styled from 'styled-components';
import myPosts from './Posts.module.css';
// import myAntd from 'antd/dist/antd.css';
const AntComponent = styled.div``;

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px 15px;
  margin: 5px;
  cursor: pointer;
  color: ${(props) => props.$draggable || 'black'};
`;

export const Posts = ({
  posts,
  getPosts,
  deletePost,
  updatePost,
  progress,
  loading,
  message,
}) => {
  return (
    <AntComponent>
      <button onClick={getPosts}>Get posts</button>
      <AddPostForm />
      <p>{loading && message}</p>
      <Progress strokeLinecap="square" percent={progress} />
      {posts.map((post) => {
        return (
          <React.Fragment key={post._id}>
            <div className={myPosts.post}>
              <span> ID: {post._id} </span>
              <h4> Title: {post.title} </h4>
              <p> Body: {post.body} </p>
              <button
                style={{ color: 'red' }}
                onClick={() => deletePost(post._id)}
              >
                DELETE
              </button>
              <UpdatePost post={post} updatePost={updatePost} />
              {/* <button style={{color: 'green'}} onClick={() => updatePost(post._id)}>UPDATE</button> */}
            </div>
            <StyledButton $draggable="red" draggable="true">
              Styled button
            </StyledButton>
            <hr />
          </React.Fragment>
        );
      })}
    </AntComponent>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postReducer.posts,
    message: state.postReducer.message,
    loading: state.postReducer.loading,
    progress: state.postReducer.progress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(actions.getPosts()),
    deletePost: (id) => dispatch(actions.deletePost(id)),
    updatePost: (id, updates) => dispatch(actions.updatePost(id, updates)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
