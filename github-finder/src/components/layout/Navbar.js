import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
	static defaultProps = {
		title: 'Github Finder',
		icon: 'fab fa-github',
	};

	render() {
		const { title, icon } = this.props;
		return (
			<nav className='navbar bg-dark'>
				<h1>
					<a href='/'>
						<i className={icon} /> {title}
					</a>
				</h1>
			</nav>
		);
	}

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	};
}

export default Navbar;
