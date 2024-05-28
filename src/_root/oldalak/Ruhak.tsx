import { useState } from "react";
import { Link } from "react-router-dom";

const Ruhak = () => {
  const [category, setCategory] = useState("Férfi");

  const data = [
    {
      title: "PAOK FC Póló",
      price: "4.190",
      image: "polo",
      url: "/ruhak/paok-fc-polo",
      category: "Férfi",
    },
    {
      title: "Fila Skort Nicole Scuba Blue Női szoknya",
      price: "2.990",
      image: "szoknya",
      url: "/ruhak/fila-skort-nicole-scuba-blue-noi-szoknya",
      category: "Nő",
    },
    {
      title: "Brandit M65 Giant téli kabát, olivazöld",
      price: "8.990",
      image: "kabat-ferfi",
      url: "/ruhak/brandit-m65-giant-teli-kabat-olivazold",
      category: "Férfi",
    },
    {
      title: "Női kabát HECTOR black",
      price: "8.990",
      image: "kabat-noi",
      url: "/ruhak/noi-kabat-hector-black",
      category: "Nő",
    },
    {
      title: "Adven Slimmy férfi nadrág fekete",
      price: "3.990",
      image: "nadrag-ferfi",
      url: "/ruhak/adven-slimmy-ferfi-nadrag-fekete",
      category: "Férfi",
    },
    {
      title: "Vízlepergető bélelt rózsaszín női nadrág",
      price: "6.990",
      image: "nadrag-noi",
      url: "/ruhak/vizlepergeto-belelt-rozsaszin-noi-nadrag",
      category: "Nő",
    },
  ];

  const getRandomStarImage = () => {
    const randomStar = Math.floor(Math.random() * 5) + 1;
    return `/assets/${randomStar}-star.png`;
  };

  const filteredData = data.filter(item => item.category === category);

  return (
    <div>
      <h1 className="text-center font-extrabold text-[40px]">Ruhák</h1>
      <div className="mydict">
	<div>
		<label>
			<input type="radio" name="radio" checked={category === "Férfi"} onChange={() => setCategory("Férfi")}/>
			<span>Férfi</span>
		</label>
		<label>
			<input type="radio" name="radio" checked={category === "Nő"} onChange={() => setCategory("Nő")}/>
			<span>Nő</span>
		</label>
	</div>
</div>
      <div className="mt-10 gap-4 grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {filteredData.map(({ title, price, image, url }, index) => {
          return (
            <div key={index} className="bg-gray-300 termek rounded-[10px] p-5">
              <Link to={`${url}`}>
                <img
                  className="mx-auto"
                  src={`/assets/Termékek/Ruhák/${image}.png`}
                  width={150}
                  alt=""
                />
              </Link>
              <p className="font-bold text-center">{title}</p>
              <img
                src={getRandomStarImage()}
                width={100}
                alt="csillag"
                className="mx-auto mt-2"
              />
              <button className="overflow-hidden ml-1 mr-1 p-2 mt-5 h-12 bg-blue-400 w-full uppercase rounded-[5px] text-white border-none text-xl font-bold cursor-pointer relative z-10 group">
                {price} Ft
                <span className="absolute w-full h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                <span className="absolute w-full h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                <span className="absolute w-full h-32 -top-8 -left-2 bg-sky-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                <span className="group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                  Kosárba
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ruhak;
