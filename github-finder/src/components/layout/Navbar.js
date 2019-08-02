import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
	return (
		<nav className='navbar bg-dark'>
			<h1>
				<a href='/'>
					<i className={icon} /> {title}
				</a>
			</h1>
		</nav>
	);
};
Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github',
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
