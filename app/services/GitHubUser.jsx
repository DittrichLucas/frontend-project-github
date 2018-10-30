import axios from 'axios'

const GitHubUser = {
    getByUsername: (username) => {
        return axios.get('http://api.github.com/users/' + username)
    },
    getReposByUsername: (username) => {
        return axios.get('http://api.github.com/users/' + username + '/repos')
    }
}

module.exports = GitHubUser