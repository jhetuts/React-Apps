import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
	render() {
		const { users } = this.props;
		return (
			<div style={styledUsers}>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

const styledUsers = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
	gridAutoRows: 'minmax(100px, auto)',
};

export default Users;
