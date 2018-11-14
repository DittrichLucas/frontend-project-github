import SearchUser from './SearchUser'
import React from 'react'
import UserProfile from './UserProfile';

class GitHub extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            repos: [],
        }
    }

    updateUser(user) {
        this.setState({ user })
    }

    updateRepos(repos) {
        this.setState({ repos })
    }

    render() {
        console.log(this.state.user)
        return (
            <div className='container'>
                <SearchUser
                    updateUser={ this.updateUser.bind(this) }
                    updateRepos={ this.updateRepos.bind(this) }
                />
                <UserProfile
                    user={ this.state.user }
                    repos={ this.state.repos }
                />
            </div>
        )
    }
}

export default GitHub
