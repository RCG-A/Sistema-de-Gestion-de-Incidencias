import React, {useState} from 'react';
import { auth } from '../../services/AxiosUser';
const Login = () => {

const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const [isLoged, setisLoged] = useState(localStorage.getItem("TOKEN"));
    const authUser = (e)=>{
        e.preventDefault()
        auth(username, password)
                .then((response)=>{
            console.log(JSON.stringify(response.status));
            if (JSON.stringify(response.data.token)) {
                console.log(response.data);
                localStorage.setItem("TOKEN", JSON.stringify(response.data.token))
                localStorage.setItem("Id", JSON.stringify(response.data.user.id))
                localStorage.setItem("Nombre", JSON.stringify(response.data.user.name))
                localStorage.setItem("RoleId", JSON.stringify(response.data.user.roleId))
                
               
            } else {
                alert("Usuario y/o contraseña incorrecta");
            }
    
        })
        .catch((error)=>{
            alert("ocurrio un error", error)
            console.log(values.username);
            console.log(values.password);
            console.log("----------------------");
            console.log(error);
            
        })
        .then(()=>{
            
        setInterval(window.location.reload(), 500  );
        })
    
    }

    return (

        <div className='bg-gray-900 w-2/3 h-2/3 justify-center items-center p-10 rounded-2xl'>
            <h1 className='text-zinc-50 text-5xl justify-center '>Bienvenido</h1>
            <form onSubmit={authUser}>
                <div className='items-center'>
                    <label className='text-cyan-50 text-lg'>Usuario</label>
                    <input value={username} onChange={(e)=> setusername(e.target.value)} placeholder='Usuario' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
                </div>
                <div className='items-center'>
                    <label className='text-cyan-50 text-lg'>Contraseña</label>
                    <input value={password} onChange={(e)=> setpassword(e.target.value)} placeholder='Contraseña' type='password' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
                </div>
                <button type='submit' className='bg-white mt-2 hover:bg-stone-50'>Inciar sesion</button>
            </form>

        </div>
    );
}

export default Login;
