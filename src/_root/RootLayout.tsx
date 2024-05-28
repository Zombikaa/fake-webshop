import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const RootLayout = () => {
  return (
    <>
    <section className="w-full bg-primary">
        <div className="flex justify-center items-center sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
            <Navbar />
        </div>
        </div>
        <div className={`bg-primary sm:px-16 px-6 flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
            <Outlet />
        </div>
      </div>
    </section>
    </>
  )
}

export default RootLayout