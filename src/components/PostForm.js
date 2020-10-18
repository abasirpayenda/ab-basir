import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body, 
      userId: 1,
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{padding: '18px'}}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Body</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </InputGroup>
          <Button variant="primary" size="lg" type='submit'>
            Add New Post
          </Button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
