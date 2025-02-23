import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home(){

    // tsx tem o padrão primeira letra minuscula a segunda palavra maiuscula, como, justifyContent

    return (
        <>
        <div className="bg-yellow-600 flex justify-center">
            <div className='container grid grid-cols-2 text-gray-100'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-4xl max-sm:text-2xl font-bold p-5'>Mi casa es su casa!</h2>

                    <p className='text-x0.5 text-justify pb-5'>
                    Venha, pegue um café e compartilhe conosco no blog Rede 4.0! Este espaço é dedicado a todas as mães que vivem a emocionante jornada da maternidade atrelada às inovações tecnológicas. Junte-se a nós para contar suas histórias, experiências e desafios. Faça daqui sua rede de apoio emocional, onde você pode se expressar livremente e encontrará relatos inspiradores. Aqui, você terá a oportunidade de se conectar, aprender e crescer com outras mães que equilibram a vida familiar e a paixão pelo mundo tech. Nossa comunidade está pronta para acolher você e suas vivências!
                    </p>

                    <div className="flex justify-around gap-4">
                        <ModalPostagem />
                    </div>
                </div>

                <div id="imagem" className="flex justify-center ">
                    <img src="https://ik.imagekit.io/n0nz1jfh6/Blog%20pessoal/blogpessoal-fotohome.avif?updatedAt=1740286273344" alt="Imagem página Home" className='w-2/3 ml-35'/>
                </div>
            </div>
        </div>
        <ListaPostagens/>
        </>
    )
}

export default Home