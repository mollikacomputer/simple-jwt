import React from 'react';

const Login = () => {
    return (
        <div className=''>
            <h2 className='text-5xl' > LogIn</h2>
            <form className='flex flex-col '>
            <input type="text" placeholder="email" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="password" class="input input-bordered w-full max-w-xs" />
            <input value='Login' class=" btn w-full max-w-xs" />

            </form>
        </div>
    );
};

export default Login;