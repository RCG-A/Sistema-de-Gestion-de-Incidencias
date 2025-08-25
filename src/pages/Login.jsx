import React from 'react';
import Login from '../components/template/Login';

const LoginPage = () => {
    return (
        
            <div className='flex w-full h-screen'>
        <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Login></Login>
        </div>
        <div className='hidden lg:w-1/2 lg:flex h-full  items-center justify-center bg-gray-200 '>
        <div className='w-80 h-10 bg-gradient-to-tr from-black to-white rounded-full '></div>
        <div>
        <img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/scotiabank_logo_icon_170755.png' style={{width:"38rem"}}/>
      </div>
        </div>  
            </div>
        
    );
}

export default LoginPage;
