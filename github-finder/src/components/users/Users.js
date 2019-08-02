import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
	state = {
		users: [
			{
				id: 1,
				login: 'mojomboasddddddddddddddddddddddddddddddddd',
				avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
				html_url: 'https://github.com/mojombo',
			},
			{
				id: 2,
				login: 'defunkt',
				avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
				html_url: 'https://github.com/defunkt',
			},
			{
				id: 3,
				login: 'pjhyett',
				avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
				html_url: 'https://github.com/pjhyett',
			},
			{
				id: 3,
				login: 'pjhyett',
				avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
				html_url: 'https://github.com/pjhyett',
			},
		],
	};

	render() {
		const { users } = this.state;
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
