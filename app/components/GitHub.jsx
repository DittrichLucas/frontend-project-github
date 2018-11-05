import SearchUser from './SearchUser'
import React from 'react'
import Repo from './Repo'

class GitHub extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            repos: [],
        }
    }

    updateUSer(user) {
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
                    updateUSer={ this.updateUSer.bind(this) }
                    updateRepos={ this.updateRepos.bind(this) }
                />
                {
                    this.state.repos.map((repo, index) =>
                        <Repo
                            key={ index }
                            avatarUrl={ repo.owner.avatar_url }
                        />
                    )
                }
            </div>
        )
    }
}

export default GitHub
