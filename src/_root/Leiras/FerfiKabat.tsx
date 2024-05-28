const FerfiKabat = () => {
    const getRandomStarImage = () => {
        const randomStar = Math.floor(Math.random() * 5) + 1;
        return `/assets/${randomStar}-star.png`;
      };
  return (
    <div className="flex h-screen items-center justify-between">
        <div>
            <img src="/assets/Termékek/Ruhák/kabat-ferfi.png" className="mx-auto mb-2" width={300} />
            <p className="text-center font-bold text-xl">Brandit M65 Giant téli kabát, olivazöld <span className="p-1 bg-blue-400 rounded-md text-white font-bold">Férfi</span></p>
            <img
                  src={getRandomStarImage()}
                  width={100}
                  alt="csillag"
                  className="mx-auto mt-2"
                />
            <br />
            <p className="bg-black p-3 rounded-md cursor-pointer text-white uppercase flex justify-between font-extrabold items-center"><img src="/assets/light-cart.png" width={30} alt="" />Kosárba</p>
            <br />
            <div className="bg-gray-200 p-4 rounded-[5px]">
                <h2 className="font-bold text-gray-900 text-2xl">Vélemények</h2>
                <br />
                <div className="flex items-center bg-gray-300 p-3 rounded-md">
                    <img src="/assets/Emberek/fiu2.png" width={50} className="pfp mr-2"/>
                    <div className="flex-col">
                    <p>Rácz Ádám</p>
                    <p className="opacity-50 text-gray-800 italic">Jó az anyaga.</p>
                    </div>
                </div>
                <div className="flex items-center mt-2 bg-gray-300 p-3 rounded-md">
                    <img src="/assets/Emberek/fiu1.png" width={50} className="pfp mr-2"/>
                    <div className="flex-col">
                    <p>Nagy János</p>
                    <p className="opacity-50 text-gray-800 italic">Nem tetszik a póló.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-6 border-[#00000038] border-2 rounded-[5px]">
            <div className="bg-gray-200 p-4 rounded-[5px]">
                <p className="font-bold text-red-600 text-2xl">8.990 Ft</p>
                <p>Forgalmazza a webshop <span className=" text-green-500">(raktáron)</span></p>
            </div>
            <br />
           <div className="flex justify-between">
                <div className="bg-gray-200 border-2 border-blue-700 p-2 w-10 h-10 text-center font-bold text-blue-900 duration-500 cursor-pointer hover:bg-blue-200">S</div>
                <div className="bg-gray-200 border-2 border-blue-700 p-2 w-10 h-10 text-center font-bold text-blue-900 duration-500 cursor-pointer hover:bg-blue-200">M</div>
                <div className="bg-gray-200 border-2 border-blue-700 p-2 w-10 h-10 text-center font-bold text-blue-900 duration-500 cursor-pointer hover:bg-blue-200">L</div>
                <div className="bg-gray-200 border-2 border-blue-700 p-2 w-10 h-10 text-center font-bold text-blue-900 duration-500 cursor-pointer hover:bg-blue-200">XL</div>
           </div>
           <button className="text-center mt-5 text-xl rounded-lg p-3 w-full bg-gradient-to-r font-bold from-orange-400 to-yellow-400">Kedvencekhez ad</button>
        </div>
    </div>
  )
}

export default FerfiKabat