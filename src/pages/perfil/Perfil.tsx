import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlert } from '../../utils/ToastAlert'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlert('Você precisa estar logado', "info")
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className='container max-w-md mt-4 m-auto  rounded-2xl overflow-hidden bg-yellow-600'>

            <img 
                className='rounded-full w-56 mb-10 mt-10 mx-auto border-2 border-gray-50' 
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div 
                className=" flex flex-col 
                    bg-gray-50 text-gray-600 text-2xl items-center justify-center pt-10 pb-12"
            >
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>

        </div>
    )
}

export default Perfil