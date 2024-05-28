import { Link } from "react-router-dom";

const Elelmiszerek = () => {
  const data = [
    {
      title: "Falusi kenyér 1KG",
      price: "990",
      image: "kenyer",
      url: "/elelmiszerek/falusi-kenyer-1kg",
    },
    {
      title: "Liszt GYERMELYI BL55 1KG",
      price: "1.990",
      image: "liszt",
      url: "/elelmiszerek/liszt-gyermelyi-bl55-1kg",
    },
    {
      title: "Tarka tejföl 20%",
      price: "650",
      image: "tejfol",
      url: "/elelmiszerek/tarka-tejfol-20-szazalek",
    },
    {
      title: "Magyar Tej UHT tej 2,8% 1 l",
      price: "420",
      image: "tej",
      url: "/elelmiszerek/magyar-tej-uht-tej-2,8-szazalek-1-liter",
    },
    {
      title: "Gazda füstölt érlelt sonka 200 g szeletelt",
      price: "499",
      image: "sonka",
      url: "/elelmiszerek/gazda-fustolt-erlelt-sonka-200-szeletelt",
    },
    {
      title: "Medve sajt tejszínes 140g",
      price: "890",
      image: "sajt",
      url: "/elelmiszerek/medve-sajt-tejszines-140-g",
    },
  ];

  const getRandomStarImage = () => {
    const randomStar = Math.floor(Math.random() * 5) + 1;
    return `/assets/${randomStar}-star.png`;
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-[40px]">Élelmiszerek</h1>
      <div className="mt-10 gap-4 grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {data.map(({title, price, image, url}, index) => {
          return (
              <div key={index} className="bg-gray-300 termek rounded-[10px] p-5">
                <Link to={`${url}`}>
                <img
                  className="mx-auto"
                  src={`/assets/Termékek/Élelmiszerek/${image}.png`}
                  width={150}
                  alt=""
                />
                </Link>
                <p className="font-bold text-center">
                  {title}
                </p>
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

export default Elelmiszerek;
