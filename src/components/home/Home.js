import React from 'react';
import { connect } from 'react-redux';

import Posts from '../myTodoList/Posts';

export const Home = (props) => {
  return (
    <div>
      <Posts />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
