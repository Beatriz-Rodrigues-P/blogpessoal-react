import { useNavigate } from 'react-router-dom'
import './Cadastro.css'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import { RotatingLines } from 'react-loader-spinner'
import { ToastAlert } from '../../utils/ToastAlert'

function Cadastro(){

    const navigate=useNavigate()
    const [isLoading, setIsLoading]=useState<boolean>(false)
    const [confirmarSenha, setConfirmarSenha]=useState<string>("")
    const [usuario, setUsuario]=useState<Usuario>({
            id:0,
            nome:"",
            usuario:"",
            senha:"",
            foto:""
    })

    useEffect(()=>{
        if(usuario.id!==0){
            retornar()
        }
    },[usuario])

    function retornar(){
        navigate("/login")
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }


    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        if(confirmarSenha===usuario.senha && usuario.senha.length>=8){
            setIsLoading(true)

            try{
                await cadastrarUsuario("/usuarios/cadastrar", usuario, setUsuario)
                ToastAlert("Usuário cadastrado com sucesso!", "sucesso")
            }catch(error){
                ToastAlert("Erro ao cadastrar usuário.", "erro")
            }
        }else{
            ToastAlert("Dados do usuário estão inconsistentes. Por favor, verifique as informações inseridas e tente novamente!", "erro")
            setUsuario({...usuario, senha: ""})
            setConfirmarSenha("")
        }

        setIsLoading(false)
    }

    console.log(JSON.stringify(usuario))
    console.log(confirmarSenha)

return(
    <>
    <div className="lg:block">
        <div className=" place-items-center bg-gray-50 pb-25">
            <form className="mb-10 pb-2 pt-3 flex justify-center items-center flex-col w-1/2 gap-3 border-1 border-yellow-600 bg-white p-15 rounded-1g shadow-md" onSubmit={cadastrarNovoUsuario}>
                <h2 className='text-gray-900 text-2xl mt-2'>Cadastrar</h2>
                <div className="flex flex-col w-full">
                    <label htmlFor="nome" className="font-normal text-gray-900">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder=" nome"
                        className="border-1 border-yellow-600 rounded p-1"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="usuario" className="font-normal text-gray-900">Usuario</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder=" e-mail"
                        className="border-1 border-yellow-600 rounded p-1"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="foto" className="font-normal text-gray-900">Foto</label>
                    <input
                        type="text"
                        id="foto"
                        name="foto"
                        placeholder=" foto"
                        className="border-1 border-yellow-600 rounded p-1"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="senha" className="font-normal text-gray-900">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder=" senha"
                        className="border-1 border-yellow-600 rounded p-1"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="confirmarSenha" className="font-normal text-gray-900">Confirmar senha</label>
                    <input
                        type="password"
                        id="confirmarSenha"
                        name="confirmarSenha"
                        placeholder=" confirmar senha"
                        className="border-1 border-yellow-600 rounded p-1"
                        value={confirmarSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                    />
                </div>

                <div className="flex justify-around w-full gap-8 py-5">
                <button 
                        type='submit'
                        className='rounded text-white bg-yellow-600  hover:bg-yellow-700
                        w-1/2 py-2 flex justify-center cursor-pointer'>

                        {isLoading?(
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                        ):(<span>Cadastrar</span>
                        )}
                    </button>

                    <button 
                        type='reset'
                        className='rounded text-white bg-red-600 
                        hover:bg-red-700 w-1/2 py-1 cursor-pointer' 
                        onClick={retornar}>
                        Cancelar
                    </button>

                </div>
            </form>
        </div>
    </div>
    </>
)
}

export default Cadastro