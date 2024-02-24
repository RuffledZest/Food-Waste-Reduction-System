function ChooseRole() {
    return <div>
        <h1 className="text-5xl tracking-widest my-3 text-center">Join Our Path and Be A Part of Our Journey</h1>
        <section className="p-24 grid grid-cols-2 place-items-center">
            <div className="relative overflow-hidden w-80 h-96 rounded-3xl shadow-2xl cursor-pointer text-2xl font-bold bg-center bg-cover bg-[url('src/assets/donator.jpg')]">
                <div className="z-10 absolute w-full h-full peer"></div>
                <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-transparent backdrop-blur-sm bg-emerald-300 transition-all duration-500"></div>
                <div className="absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-transparent backdrop-blur-md transition-all duration-500">
                <h1 className="p-3 text-4xl bg-gradient-to-r from-rose-800 via-rose-500 to-rose-300 inline-block text-transparent bg-clip-text">Join Us!</h1>
                    <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </div>
                <div className="w-full h-full items-center justify-center flex uppercase">
                    <h1 style={{ background: "transparent"}}>Food Business?</h1>
                </div>
            </div>
            <div className="relative overflow-hidden w-80 h-96 rounded-3xl shadow-2xl cursor-pointer text-2xl font-bold bg-center bg-cover bg-[url('src/assets/receiver.jpg')]">
                <div className="z-10 absolute w-full h-full peer"></div>
                <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-transparent backdrop-blur-sm bg-emerald-300 transition-all duration-500"></div>
                <div className="absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-transparent backdrop-blur-md transition-all duration-500">
                    <h1 className="p-3 text-4xl  bg-gradient-to-r from-red-900 via-rose-500 to-rose-300 inline-block text-transparent bg-clip-text">Join Us!</h1>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </div>
                <div className="w-full h-full items-center justify-center flex uppercase">
                <h1 style={{ background: "transparent"}}>Philanthropist?</h1>
                </div>
            </div>

        </section>
    </div>
}
export default ChooseRole;