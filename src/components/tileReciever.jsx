import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

function TileReciever() {
    const images=[
        "/src/assets/food1.jpg",
        "/src/assets/food2.jpg",
        "/src/assets/food3.jpg",
        "/src/assets/food4.jpg",
        "/src/assets/food5.jpg",
        "/src/assets/food6.jpg",
        "/src/assets/food7.jpg",
        "/src/assets/food8.jpg",
    ]
    const [csvData, setCsvData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const fetchCSVData = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQJuN_jlb8-GEg5kJxZy959epe7jwuMJ6BsqpRtk24mF4Ix4ilMdwBDxtFyInX0keRg7-3cyKdd9-i5/pub?output=csv')
            const parsedCsvData = parseCSV(response.data)
            setCsvData(parsedCsvData)
            setIsLoading(false)
            setIsDataLoaded(true)
        } catch (error) {
            console.error('Error fetching CSV data:', error)
        }
    },[]);
    function parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
        const headers = rows[0].split(','); // Extract headers (assumes the first row is the header row)
        const data = []; // Initialize an array to store parsed data
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(','); // Split the row, handling '\r' characters
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }
            data.push(rowObject);
        }
        return data;
    }
    useEffect(()=>{
        fetchCSVData()
    }, [fetchCSVData]);
    return (
        <div>
        {isLoading ? (
            <div className='flex items-center justify-center p-52'>
                <div className="animate-pulse flex flex-col items-center gap-4 w-60">
                <div>
                <div className="w-48 h-6 bg-slate-400 rounded-md"></div>
                <div className="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
                </div>
                <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                <div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
            </div>
          </div>
        ) : (
        <div className="px-20 py-10 gap-20 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-1">
            {/* tile 1 */}
            {isDataLoaded && csvData.map((row, index) => {
            const randomImageUrl = images[Math.floor(Math.random() * images.length)]
                    return (
                        <div
                            key={index}
                            className="group flex flex-col justify-start items-start gap-2 w-80 h-56 duration-500 relative rounded-lg p-4 bg-gradient-to-br from-blue-800 to-black hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
                        >
                            <div
                                style={{
                                    backgroundImage: `url('${randomImageUrl}')`,
                                    backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                            }}
                            className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-400"
                            alt="image here"
                        ></div>

                        <div className="">
                            <h2 className="text-2xl font-bold mb-2 text-white">{row.Food}</h2>
                            <p className="text-gray-200 line-clamp-3">{row.Description}</p>
                        </div>
                        <button
                            className="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6"
                        >
                            View More
                        </button>
                    </div>
                    )
                })}
            
            </div>
        )}
        </div>
    )

}


export default TileReciever;



