import { Link } from "react-router-dom";

const Eszkozok = () => {
  const data = [
    {
      title: "FDS 5009-116R csavarhúzó készlet",
      price: "7.190",
      image: "csavarhuzo-keszlet",
      url: "/eszkozok/fds-5009-116r-csavarhuzo-keszlet",
    },
    {
      title: "FISKARS SOLID ÁSÓ 117X18CM FÉM",
      price: "11.990",
      image: "aso",
      url: "/eszkozok/fiskars-solid-aso-117-x-18cm-fem",
    },
    {
      title: "HRN 536 VYE Önjáró Fűnyíró",
      price: "59.990",
      image: "funyiro",
      url: "/eszkozok/hrn-526-vye-onjaro-funyiro",
    },
    {
      title: "Stiebel Eltron SHO AC 1000 12 bojler álló 1000 L 12 kW",
      price: "699.990",
      image: "bojler",
      url: "/eszkozok/stiebel-eltron-sho-ac-1000-12-bojler-allo-1000-l-12-kw",
    },
    {
      title: "Gorenje MO4250CLB Grilles mikro sütő 20 liter Retro",
      price: "44.990",
      image: "mikro",
      url: "/eszkozok/gorenje-mo4250clb-grilles-mikro-suto-20-liter-retro",
    },
    {
      title: "Bosch GSR 18V-60 C akkus szénkefe nélküli fúró-csavarozó",
      price: "19.990",
      image: "furo",
      url: "/eszkozok/bosch-gsr-18v-60-c-akkus-szenkefe-nelkuli-furo-csavarhuzo",
    },
  ];

  const getRandomStarImage = () => {
    const randomStar = Math.floor(Math.random() * 5) + 1;
    return `/assets/${randomStar}-star.png`;
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-[40px]">Eszközök</h1>
      <div className="mt-10 gap-4 grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {data.map(({title, price, image, url}, index) => {
          return (
              <div key={index} className="bg-gray-300 termek rounded-[10px] p-5">
                <Link to={`${url}`}>
                <img
                  className="mx-auto"
                  src={`/assets/Termékek/Eszközök/${image}.png`}
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

export default Eszkozok;
