import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps{
    tema: Tema
}

function CardTemas({tema}: CardTemaProps){
    return(
        <div className='border-yellow-600 border bg-gray-50 
            flex flex-col rounded overflow-hidden justify-between'>
            <header className='flex w-full text-2xl bg-yellow-600 py-1 px-4 items-center gap-4 text-gray-100'>Tema</header>
            <p className='p-8 text-lg bg-gray-50 text-gray-600 h-full'>{tema.descricao}</p>
            
            <div className="flex">
            
                <Link to={`/editartema/${tema.id}`}
                className='w-full text-gray-600 bg-gray-50 border-1 border-yellow-600
                    flex items-center justify-center text-sm px-0 py-0'>
                <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} 
                    className='text-white bg-red-700 
                    w-full flex items-center justify-center text-sm px-0 py-0'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas