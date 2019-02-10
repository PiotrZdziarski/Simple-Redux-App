import React, { Component } from 'react';

class AsyncAwait extends Component {

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
        this.init();
    }


    async fetchUsers() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return Promise.resolve();
    }

    async init() {
        await this.createPost({
            title: 'Post three',
            body: "This is post three"
        });

        await this.fetchUsers();
        this.getPosts();
    }

    getPosts() {
        setTimeout(() => {
            this.posts.forEach((post, index) => {
                this.state.elements.push(<li key={ index }>{ post.title }</li>);
            });
            this.forceUpdate();
        }, 1000);
    }

    createPost(post) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.posts.push(post);

                const error = false;
                if (error) {
                    reject('Error: Something went wrong');
                }
                resolve();
            }, 2000);
        });
    }

    render() {
        return (
            <div>
                { this.state.elements }
            </div>
        );
    }
}

export default AsyncAwait;