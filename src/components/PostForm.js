import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from "../actions/postActions";

class PostForm extends Component {


    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post);
    }


    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <br/>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" onChange={ this.onChange } value={ this.state.title }/>
                </div>
                <br/>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea id="body" name="body" onChange={ this.onChange } value={ this.state.body }/>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);