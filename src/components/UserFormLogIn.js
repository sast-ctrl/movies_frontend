import React from 'react';

const UserFormLogIn = () => {
  return (
    <>
      <hr className='mt-5' />

      <div className='row'>
        <div className='col-12 mb-4'>
          <h1 className='text-center mb-4'> Log In </h1>
          
          <form onSubmit={''}>
            <div className='form-group'>
              <label htmlFor='inputUsername'>Username</label>
              <input onChange={''} type={'text'} className='form-control' id='inputUsername' placeholder='username' required />
              <div className='invalid-feedback'> Invalid Credetentials </div>
            </div>
            
            <div className='form-group'>
              <label htmlFor='inputPassword'>Username</label>
              <input onChange={''} type={'password'} className='form-control' id='inputPassword' placeholder='password' required />
              <div className='invalid-feedback'> Invalid Credetentials </div>
            </div>
            
            <button type='submit' className='btn btn-primary'> Log in </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default UserFormLogIn;
