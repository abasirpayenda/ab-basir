import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class Users extends Component {
    componentDidMount(){
        this.props.fetchUsers(this.props.id);
    }
    render() {
        const { user } = this.props; 

        if(!user) {
            return null;
        }

        return (
            <footer className="blockquote-footer">
                Posted by <cite title="Source Title">{user.name}</cite>
            </footer>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.id)
    }
}

export default connect(mapStateToProps, { fetchUsers })(Users);
