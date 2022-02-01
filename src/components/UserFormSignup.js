import React from 'react';

const UserFormSignup = () => {
    return (
        <>
            <hr className='mt-5' />

            <div className='row'>
                <div className='col-12 mb-4'>
                    <h1 className='text-center mb-4'> Sign up </h1>

                    <form onSubmit={''}>
                        <div className='form-group'>
                            <label htmlFor='inputUsername'>Username</label>
                            <input onChange={''} type={'text'} className='form-control' id='inputUsername' placeholder='username' required />
                            <div className='invalid-feedback'> Invalid Credetentials </div>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='inputPassword'>Password</label>
                            <input onChange={''} type={'password'} className='form-control' id='inputPassword' placeholder='password' required />
                            <div className='invalid-feedback'> Invalid Credetentials </div>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='inputPassword'>Confirm your password</label>
                            <input onChange={''} type={'password'} className='form-control' id='inputPassword' placeholder='password' required />
                            <div className='invalid-feedback'> Invalid Credetentials </div>
                        </div>

                        <button type='submit' className='btn btn-primary'> Sign up </button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default UserFormSignup;
