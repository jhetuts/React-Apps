import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
	static defaultProps = {
		title: 'Github Finder',
		icon: 'fab fa-github',
	};

	render() {
		const { title, icon } = this.props;
		return (
			<nav className='navbar bg-primary'>
				<h1>
					<i className={icon} /> {title}
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
