import React, { Component } from 'react';

class Callbacks extends Component {

    constructor(props) {
        super(props);
        this.posts = [
            {
                title: 'Post one',
                body: "This is post one"
            },
            {
                title: 'Post two',
                body: "This is post two"
            }
        ];
        this.state = {
            elements: []
        };

        this.getPosts = this.getPosts.bind(this);

        this.createPost({
            title: 'Post three',
            body: "This is post three"
        }, this.getPosts);
    }

    getPosts() {
        setTimeout(() => {
            this.posts.forEach((post, index) => {
                this.state.elements.push(<li key={ index }>{ post.title }</li>);
            });
            this.forceUpdate();
        }, 1000);
    }

    createPost(post, callback) {
        setTimeout(() => {
             this.posts.push(post);
             callback();
        }, 2000);
    }

    render() {
        return (
            <div>
                { this.state.elements }
            </div>
        );
    }
}

export default Callbacks;