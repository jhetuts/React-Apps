import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

import axios from 'axios';

import './App.css';
class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
	};

	searchUsers = async text => {
		if (text !== '') {
			this.setState({ loading: true });
			const res = await axios.get(
				`https://api.github.com/search/users?q=${text}&client_id=${
					process.env.REACT_APP_GITHUB_CLIENT_ID
				}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			this.setState({ users: res.data.items, loading: false });
		}
	};

	clearUsers = () => this.setState({ users: [], loading: false });

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => this.setState({ alert: null }), 2500);
	};

	render() {
		const { users, loading, alert } = this.state;
		return (
			<div className='App'>
				<Navbar icon='fab fa-github' title='Github Finder' />
				<div className='container'>
					<Alert alert={alert} />
					<Search
						clearUsers={this.clearUsers}
						searchUsers={this.searchUsers}
						setAlert={this.setAlert}
						showClear={users.length > 0 ? true : false}
					/>
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

export default App;
