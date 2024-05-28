const Aso = () => {
    const getRandomStarImage = () => {
        const randomStar = Math.floor(Math.random() * 5) + 1;
        return `/assets/${randomStar}-star.png`;
      };
  return (
    <div className="flex h-screen items-center justify-between">
        <div>
            <img src="/assets/Termékek/Eszközök/aso.png" className="mx-auto mb-2" width={300} />
            <p className="text-center font-bold text-xl">FISKARS SOLID ÁSÓ 117X18CM FÉM</p>
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
                    <p className="opacity-50 text-gray-800 italic">Kicsit csalódott vagyok a minőségében.</p>
                    </div>
                </div>
                <div className="flex items-center bg-gray-300 mt-2 mb-2 p-3 rounded-md">
                    <img src="/assets/Emberek/no1.png" width={50} className="pfp mr-2"/>
                    <div className="flex-col">
                    <p>Nagy Anna</p>
                    <p className="opacity-50 text-gray-800 italic">Szó szerint életmentő! Kényelmes és megbízható.</p>
                    </div>
                </div>
                <div className="flex items-center bg-gray-300 p-3 rounded-md">
                    <img src="/assets/Emberek/fiu1.png" width={50} className="pfp mr-2"/>
                    <div className="flex-col">
                    <p>Nagy János</p>
                    <p className="opacity-50 text-gray-800 italic">Sajnos nem váltotta be a hozzá fűzött reményeimet.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-6 border-[#00000038] border-2 rounded-[5px]">
            <div className="bg-gray-200 p-4 rounded-[5px]">
                <p className="font-bold text-red-600 text-2xl">11.990 Ft</p>
                <p>Forgalmazza a webshop <span className=" text-green-500">(raktáron)</span></p>
            </div>
            <br />
           <ul>
                <li>- Megfizethető minőséget kínál bármely kertben</li>
                <li>- Éles, kúpos penge ideális általános ásáshoz és gyep vagy gyökerek vágásához</li>
                <li>- Nyél anyaga: Acél</li>
                <li>- Szín: Fekete, narancssárga</li>
           </ul>
           <button className="text-center mt-5 text-xl rounded-lg p-3 w-full bg-gradient-to-r font-bold from-orange-400 to-yellow-400">Kedvencekhez ad</button>
        </div>
    </div>
  )
}

export default Aso