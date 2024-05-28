const Csavarhuzo = () => {
    const getRandomStarImage = () => {
        const randomStar = Math.floor(Math.random() * 5) + 1;
        return `/assets/${randomStar}-star.png`;
      };
  return (
    <div className="flex h-screen items-center justify-between">
        <div>
            <img src="/assets/Termékek/Eszközök/csavarhuzo-keszlet.png" className="mx-auto mb-2" width={300} />
            <p className="text-center font-bold text-xl">FDS 5009-116R csavarhúzó készlet</p>
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
                    <img src="/assets/Emberek/fiu1.png" width={50} className="pfp mr-2"/>
                    <div className="flex-col">
                    <p>Nagy János</p>
                    <p className="opacity-50 text-gray-800 italic">Nagyszerű termék!</p>
                    </div>
                </div>
                <div className="flex items-center bg-gray-300 mt-2 mb-2 p-3 rounded-md">
                    <img src="/assets/Emberek/no2.png" width={50} className="pfp mr-2"/>
                    <div className="flex-col">
                    <p>Fejes Éva</p>
                    <p className="opacity-50 text-gray-800 italic">Hibásan kaptam meg :(</p>
                    </div>
                </div>
                <div className="flex items-center bg-gray-300 p-3 rounded-md">
                    <img src="/assets/Emberek/fiu2.png" width={50} className="pfp mr-2"/>
                    <div className="flex-col">
                    <p>Rácz Ádám</p>
                    <p className="opacity-50 text-gray-800 italic">Semmi gond nem volt vele.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-6 border-[#00000038] border-2 rounded-[5px]">
            <div className="bg-gray-200 p-4 rounded-[5px]">
                <p className="font-bold text-red-600 text-2xl">7.190 Ft</p>
                <p>Forgalmazza a webshop <span className=" text-green-500">(raktáron)</span></p>
            </div>
            <br />
           <ul>
                <li>- A gumi markolat stabil fogást biztosít</li>
                <li>- Króm-vanádium ötvözetből készült</li>
                <li>- Hosszú élettartam, nagy ellenállás</li>
                <li>- Az állvány hátulján két lyuk található a készlet falhoz rögzítéséhez</li>
                <li>- Használható minden műhelyben és garázsban, 116 szerszámos készletben</li>
           </ul>
           <button className="text-center mt-5 text-xl rounded-lg p-3 w-full bg-gradient-to-r font-bold from-orange-400 to-yellow-400">Kedvencekhez ad</button>
        </div>
    </div>
  )
}

export default Csavarhuzo