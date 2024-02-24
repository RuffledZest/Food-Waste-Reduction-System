function TileDonor() {
    return <div className="px-5 py-10 gap-20 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-1">




        {/* tile 1 */}

        <div

            className="group flex flex-col justify-start items-start gap-2 w-80 h-56 bg-gradient-to-br from-blue-800 to-black duration-500 relative rounded-lg p-4 hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
        >
            <div
                style={{
                    // transform: "translateZ(75px)",
                    // transformStyle: "preserve-3d",
                    backgroundImage: "url('src/assets/wheat-and-flour-g2k-57bb87385f9b58cdfd6ab04b.jpg')",
                    backgroundPosition: "center",
                    // backdropFilter: "blur(100px)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // backdropFilter: "blur(20px)",
                }}
                className="flex flex-col items-center justify-center absolute duration-700 shadow-md group-hover:-translate-y-10 group-hover:-translate-x-1/4 hover:scale-[1.9] -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg   "
                alt="image here "
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className="text-blue-800">
                    ADD ITEM</p></div>

            <div className="">
                <h2 className="text-2xl font-bold mb-2 text-white -bottom-10 -right-10 w-1/2 h-1/2">Make a new post</h2>
                <p className="text-gray-200 line-clamp-3">
                    

                </p>
            </div>
            {/* <button
                className="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6"
            >
                Explore
            </button> */}
        </div>


        {/* tile 2 */}
        <div
            className="group flex flex-col justify-start items-start gap-2 w-80 h-56 duration-500 relative rounded-lg p-4 bg-gradient-to-br from-blue-800 to-black hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
        >
            <div


                style={{
                    // transform: "translateZ(75px)",
                    // transformStyle: "preserve-3d",
                    backgroundImage: "url('src/assets/basmati-rice-recipe.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // backdropFilter: "blur(20px)",
                }}
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-400"
                alt="image here"
            ></div>

            <div className="">
                <h2 className="text-2xl font-bold mb-2 text-white">Rice</h2>
                <p className="text-gray-200 line-clamp-3">
                    Type: Grains
                    <br />
                    Quantity: 20kg
                    <br />
                    Expiry: 20/10/2022
                </p>
            </div>
            <button
                className="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6"
            >
                Explore
            </button>
        </div>


        {/* tile 3 */}
        <div

            className="group flex flex-col justify-start items-start gap-2 w-80 h-56 duration-500 relative rounded-lg p-4 bg-gradient-to-br from-blue-800 to-black hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
        >
            <div

                style={{
                    // transform: "translateZ(75px)",
                    // transformStyle: "preserve-3d",
                    backgroundImage: "url('src/assets/wheat-and-flour-g2k-57bb87385f9b58cdfd6ab04b.jpg')",
                    backgroundPosition: "center",
                    // backdropFilter: "blur(100px)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // backdropFilter: "blur(20px)",
                }}
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-400"
                alt="image here"
            ></div>

            <div className="">
                <h2 className="text-2xl font-bold mb-2 text-white">Wheat</h2>
                <p className="text-gray-200 line-clamp-3">
                    Type: Grains
                    <br />
                    Quantity: 20kg
                    <br />
                    Expiry: 20/10/2022
                </p>
            </div>
            <button
                className="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6 "
            >
                Explore
            </button>
        </div>

    </div>
}


export default TileDonor;



