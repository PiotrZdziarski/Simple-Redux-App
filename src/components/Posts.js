import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/postActions";
import styled from 'styled-components';

const Main = styled.main`
  width: 90%;
  margin: auto;
  text-align: left;
`;

const Post = styled.article`
  margin-top: 40px;
`;


class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <Post key={ post.id }>
                <h3>{ post.title }</h3>
                <p>{ post.body }</p>
            </Post>
        ));

        return (
            <Main>
                <h1>Posts</h1>
                { postItems }
            </Main>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);