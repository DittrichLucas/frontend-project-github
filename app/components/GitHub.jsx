import SearchUser from './SearchUser'

const GitHub = 
() => {
    return {
        user: null,
        repos: [],
    }
}

(user) => {
    this.setState({ user: user })
}

(repos) => {
    this.setState({ repos: repos })
}

() => {
<div className='container'>
    <SearchUser 
        updateUSer={this.updateUSer}
        updateRepos={this.updateRepos}
    />
</div>
}

export default GitHub
