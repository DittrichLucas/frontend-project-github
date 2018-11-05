import React from 'react'

const Repo = props =>
    <div style={ { background: '#EEE', height: 50, width: '100%' } }>
        <img
            src={ props.avatarUrl }
            style={ { width: '48px', height: '48px', borderRadius: '24px' } }
        />
    </div>

export default Repo