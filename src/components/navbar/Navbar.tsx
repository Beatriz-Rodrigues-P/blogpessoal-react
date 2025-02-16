import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='
                w-full 
                flex 
                justify-center 
                p-4
                bg-indigo-900 
                text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Blog pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens'>
                            Postagens
                        </Link>
                        <Link to='/temas'>
                            Temas
                        </Link>
                        <Link to='/cadastrar-temas'>
                            Cadastrar tema
                        </Link>
                        <Link to='/perfil'>
                            Perfil
                        </Link>
                        <Link to='/logout'>
                            Sair
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar