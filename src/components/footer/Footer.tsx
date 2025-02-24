import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="
                w-full 
                flex 
                justify-between
                bg-yellow-600
                text-gray-50">

                <div className="
                    w-full
                    flex 
                    justify-between
                    items-center 
                    py-3
                    px-4">

                    <p className='text-xl'>
                        Blog Rede 4.0 | Copyright: {data}
                    </p>

                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/beatriz-rodrigues-paula/" target="_blank">
                            <LinkedinLogo size={35}/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <InstagramLogo size={35}/>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                            <FacebookLogo size={35}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer