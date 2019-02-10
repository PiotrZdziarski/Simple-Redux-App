import React, { Component } from 'react';

class Promises extends Component {

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

        const promise1 = Promise.resolve('Hello world');
        const promise2 = 10;
        const promise3 = new Promise((resolve) =>
             setTimeout(resolve, 2000, "Goodbye")
        );
        const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json());

        Promise.all([promise1, promise2, promise3, promise4]).then(values => {
           console.log(values);
        });

        this.createPost({
            title: 'Post three',
            body: "This is post three"
        })
            .then(this.getPosts)
            .catch(err => console.log(err));
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
                if(error) {
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

export default Promises;