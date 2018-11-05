import React from 'react'
import GitHubUser from '../services/GitHubUser'

class SearchUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange(event){
        this.setState({ value: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault()

        GitHubUser.getByUsername(this.refs.username.value)
            .then((response) => { this.props.updateUSer( response.data ) })

        GitHubUser.getReposByUsername(this.refs.username.value)
            .then((response) => { this.props.updateRepos( response.data ) })
    }

    render() {
        return (
            <div className='jumbotron'>
                <h1>GitHub Info</h1>
                <div className='row'>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className='form-group'>
                            <label>Username</label>
                            <input
                                type='text'
                                ref='username'
                                className='form-control'
                                placeholder='Ex.: DittrichLucas'
                                value={this.state.value}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-primary'>
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchUser