import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-yellow-600 border bg-gray-50 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-yellow-600 py-1 px-4 items-center gap-4 text-gray-100">
                    <img
                        src={postagem.usuario?.foto}
                        className='h-10 rounded-full'
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-x1 text-center'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-3 '>
                    <h4 className='text-lg font-medium text-gray-600'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>

            <div className="flex m-4 cursor-pointer">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-gray-600 bg-gray-50 border-1 border-yellow-600
                    flex items-center justify-center text-sm px-0 py-0'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarpostagem/${postagem.id}`} 
                    className='text-white bg-red-700 
                    w-full flex items-center justify-center text-sm px-0 py-0'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem