import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Navbar() {

    const navigate=useNavigate()
    const {handleLogout}=useContext(AuthContext)
    {/*Mudar estado de Temas*/}
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const location = useLocation()

    function logout(){
        handleLogout()
        alert("Usuário desconectado")
        navigate("/")
    }

    if (location.pathname === "/login" || location.pathname === "/cadastro" || location.pathname === "/") {
        return (
        <>
            <div className="w-full flex justify-between p-3 pb-30 bg-gray-50 text-gray-50 text-xl">
                <div className="w-full flex justify-between items-center px-4">
                    <div className="w-60">
                        <Link to="/home"><img src="src/assets/blogpessoal-logonavbar.svg" alt="Logo" /></Link>
                    </div>
                
                    <div className="flex gap-8">
                        <Link to="/home" className=" text-gray-500 rounded-lg p-2 py-1">Home</Link>
                        <Link to="/cadastro" className=" bg-yellow-600 rounded-lg p-2 py-1">Cadastre-se</Link>
                    </div>
                </div>
            </div>
        </>
        );
    }

    return (
        <>
            <div className="w-full flex justify-between pt-5 pb-5 p-1 bg-gray-50 text-gray-800">
                <div className="w-full flex justify-between items-center px-8">
                    <div className="w-60"><Link to='/home'><img src="src/assets/blogpessoal-logonavbar.svg"/></Link></div>

                        <div className='flex gap-4 justify-end text-xl pb-1 text-gray-50 bg-yellow-600 rounded-lg p-2 py-1'>
                            <Link to="/home">Home</Link>
                            <Link to='/postagens'>Postagens</Link>

                            {/* Inserção do dropdown em Temas*/}
                            <div className="relative">
                                <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="flex items-center cursor-pointer">
                                    Temas
                                    {/* Inserção da setinha :) (poderia inserir no assets, mas não entendi porque precisaria importar) */}
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                    {/* Edição do drop*/}
                                    {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg z-10">
                                    <Link to='/temas' className='block px-4 py-2 text-gray-500 hover:bg-gray-200'>Ver Temas</Link>
                                    <Link to='/cadastrartema' className='block px-4 py-2 text-gray-500 hover:bg-gray-200'>Cadastrar Tema</Link>
                                </div>
                                )}
                            </div>
                                <Link to='/perfil'>Perfil</Link>
                                <Link to='' onClick={logout}>Sair</Link>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Navbar