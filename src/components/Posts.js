import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions";
// import Users from './Users';
import PostForm from './PostForm';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    componentDidUpdate(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    
    renderPosts(){
        return this.props.posts.map(post => {
            return (               
                <Card.Body key={post.id}>
                    <Card body>
                        <Row>
                            <Col md={2} className='d-flex justify-content-center align-items-center'>
                                <img src={require('../imgs/profile.png')} width="75px" alt=""/>
                            </Col>
                            <Col md={10}>
                                <h3>{ post.title }</h3>
                                <p>{post.body}</p>
                                {/* <Users id={post.userId} /> */}
                            </Col>
                        </Row>
                    </Card>
                </Card.Body>
            )
        })
    }

    render() {
        return (
             <Card className='mt-5'>
                <Card.Header>
                    <h2>
                        Posts List
                    </h2>
                </Card.Header>
                <PostForm />
                {this.renderPosts()}
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.items,
        newPost: state.posts.item,
    }
}


export default connect(mapStateToProps, { fetchPosts })(Posts);
