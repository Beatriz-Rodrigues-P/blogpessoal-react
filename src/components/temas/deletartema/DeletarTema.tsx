import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Tema from "../../../models/Tema"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlert } from "../../../utils/ToastAlert"

function DeletarTema() {

    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
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

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlert('Tema apagado com sucesso', "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                ToastAlert('Erro ao deletar o tema.', "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }
    
    return (
        <div className='container w-1/3 mx-auto pt-20'>
            <h1 className='text-3xl text-center my-5 mt-5 text-gray-600'>Deletar tema</h1>
            <p className='text-lg text-center mb-5 text-gray-600'>
                Você tem certeza de que deseja apagar o tema?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>

            <div className='border-yellow-600 border bg-gray-50 flex flex-col rounded overflow-hidden justify-between'>
                <header className="flex w-full bg-yellow-600 py-1 px-4 items-center gap-4 text-gray-100">
                    Tema
                </header>
                <p className='p-4 text-xl h-full text-gray-600 text-x1 font-medium'>{tema.descricao}</p>

                <div className="flex m-4 cursor-pointer">
                    <button 
                        className='text-white bg-red-700 w-full flex items-center justify-center text-sm px-0 py-0' onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-gray-600 bg-gray-50 border-1 border-yellow-600
                        flex items-center justify-center text-sm px-0 py-0' onClick={deletarTema}>
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
        </div>
    )
}
export default DeletarTema