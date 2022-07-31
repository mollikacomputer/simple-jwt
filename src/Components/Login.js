import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();  
  const handleLogin = event =>{
         
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
            // const loginInfo = {email, pass};
            // console.log(loginInfo);
        fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then( data => {

          if(data.success){
            localStorage.setItem('accessToken', data.accessToken);
            navigate('/order')
          }
          
          console.log(data);
        })
    }

    return (
        <div className=''>
            <h2 className='text-5xl' > LogIn</h2>

            <form onSubmit={handleLogin} className='flex flex-col '>
            <input type="text" placeholder="email" name='email' class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="password" name='password' class="input input-bordered w-full max-w-xs" />
            <input type='submit' value='Login' class=" btn w-full max-w-xs" />

            </form>
        </div>
    );
};

export default Login;