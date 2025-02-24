import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Postagem from "../../../models/Postagem"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlert } from "../../../utils/ToastAlert"

function DeletarPostagem() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlert('Você precisa estar logado', "info")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPostagem() {
        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlert('Postagem apagada com sucesso', "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                ToastAlert('Erro ao deletar a postagem.', "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/postagens")
    }
    
    return (
        <div className='container w-1/3 mx-auto pt-20'>
            <h1 className="text-3xl text-center my-5 mt-5 text-gray-600">Deletar Postagem</h1>

            <p className="text-lg text-center mb-5 text-gray-600">
                Você tem certeza de que deseja apagar a postagem?
            </p>

            <div className='border-yellow-600 border bg-gray-50 flex flex-col rounded overflow-hidden justify-between'>
                <header className="flex w-full bg-yellow-600 py-1 px-4 items-center gap-4 text-gray-100">
                        Postagem
                </header>

                <div className="p-4">
                    <p className='text-xl h-full text-gray-600 text-x1 font-medium'>{postagem.titulo}</p>
                    <p>{postagem.texto}</p>
                </div>
                <div className="flex m-4 cursor-pointer">
                    <button 
                        className='text-white bg-red-700 w-full flex items-center justify-center text-sm px-0 py-0'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-gray-600 bg-gray-50 border-1 border-yellow-600
                        flex items-center justify-center text-sm px-0 py-0'
                        onClick={deletarPostagem}>
                        
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarPostagem