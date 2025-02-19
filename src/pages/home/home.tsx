function Home(){

    // tsx tem o padrão primeira letra minuscula a segunda palavra maiuscula, como, justifyContent

    return (
        <div className="bg-indigo-900 flex justify-center">
            <div className='container grid grid-cols-2 text-white'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl max-sm:text-2xl font-bold'>
                        Seja bem-vindo!
                    </h2>

                    <p className='text-xl'>
                        Expresse aqui seus pensamentos e opiniões 🙂
                    </p>

                    <div className="flex justify-around gap-4">
                        <div className='rounded text-white border-white border-solid border-2 py-2 px-4'>
                                Nova postagem
                        </div>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <img src="https://i.imgur.com/fyfri1v.png" alt="Imagem página Home" className='w-2/3'/>
                </div>
            </div>
        </div>
    )
}

export default Home