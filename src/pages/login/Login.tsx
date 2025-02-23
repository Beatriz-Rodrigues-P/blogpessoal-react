import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';


function Login() {

    const navigate= useNavigate()
    const [usuarioLogin, setUsuarioLogin]=useState<UsuarioLogin>({} as UsuarioLogin)
    const {usuario, handleLogin, isLoading}=useContext(AuthContext)

    useEffect(()=>{
        if(usuario.token!==""){
            navigate("/home")
        }
    },[usuario])
    
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]:e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    console.log(JSON.stringify(usuarioLogin))

    return (
        <>
        <div className="lg:block">
            <div className="grid h-screen place-items-center bg-gray-50 pb-45">
                <form className="pt-4 pb-10 flex justify-center items-center flex-col w-1/3 gap-7 border-1 border-yellow-600 bg-white p-15 rounded-1g shadow-md" onSubmit={login}>
                    <h2 className='text-gray-900 text-2xl mt-3'>Acessar a conta</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario" className="font-normal">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder=" e-mail"
                            className="border-1 border-yellow-600 rounded p-1"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>)=>atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="senha" className="font-normal">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder=" senha"
                            className="border-1 border-yellow-600 rounded p-1"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>)=>atualizarEstado(e)}
                        />
                    </div>

                    <button 
                        type='submit' 
                        className="rounded bg-yellow-600 flex justify-center text-white w-1/1 py-1"
                        style={{cursor: "pointer"}}>
                    
                        {isLoading?(
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}/>
                            ):(
                            <span>Entrar</span>
                        )}
                    </button>

                    <hr className="border-yellow-600 w-full"/>

					<p> <span className='font-normal'>Ainda não tem uma conta? {""}</span>
						<Link to="/cadastro" className="text-yellow-600 hover:underline">
							Cadastre-se
						</Link>
                    </p>

                </form>
            </div>
        </div>
        </>
    )
}

export default Login;