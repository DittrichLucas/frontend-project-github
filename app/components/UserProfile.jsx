import React from 'react'
import Repo from './Repo'

function UserProfile(props) {
        const userInfo = props.user ?
            (
                <div className="row">
                    <div className="col-lg-4">
                        <img className="img-circle" src={ props.user.avatar_url } alt="avatar" width="140" height="140" />
                        <h2>{ props.user.login }</h2>
                        <p>{ props.user.name }</p>
                        <p>Followers: { props.user.followers } / Following: { props.user.following }</p>
                        <p><a className="btn btn-default" href={ props.user.html_url } role="button">View details</a></p>
                    </div>
                    <div className="col-lg-8">
                        <Repo repos={ props.repos } />
                    </div>
                </div>
            ) : null

        return userInfo
    }

// UserProfile.propTypes = {
//     user: PropTypes.object,
//     repos: PropTypes.array,
// }

export default UserProfile