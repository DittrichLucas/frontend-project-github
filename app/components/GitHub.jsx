import React from 'react'

const GitHub = () =>
    <div className='container'>
        <div className='jumbotron'>
            <h1>GitHub Info</h1>
            <div className='row'>
                <form>
                    <div className='form-group'>
                    <label>Username</label>
                    <input 
                        type='text'
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
    </div>

export default GitHub
