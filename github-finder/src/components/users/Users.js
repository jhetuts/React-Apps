import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={styledUsers}>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

const styledUsers = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
	gridAutoRows: 'minmax(100px, auto)',
};
export default Users;
