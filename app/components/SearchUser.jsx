import React from 'react'
import GitHubUser from '../services/GitHubUser'

const SearchUser = 
(e) => {
    e.preventDefault()

    let self = this

    GitHubUser.getByUsername(this.refs.username.value)
        .then((response) => { self.props.updateUSer(response.data) })
    
    GitHubUser.getReposByUsername(this.refs.username.value)
        .then((response) => { self.props.updateRepos(response.data) })
}
() => {
    <div className='jumbotron'>
        <h1>GitHub Info</h1>
        <div className='row'>
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label>Username</label>
                    <input 
                        type='text'
                        ref='username'
                        className='form-control'
                        placeholder='Ex.: DittrichLucas'
                    />
                </div>
                <button 
                    type='submit'
                    className='btn btn-primary'>Buscar
                </button>
            </form>
        </div>
    </div>
}

export default SearchUser()