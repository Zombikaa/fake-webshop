
import Aso from './_root/Leiras/Aso'
import Bojler from './_root/Leiras/Bojler'
import Csavarhuzo from './_root/Leiras/Csavarhuzo'
import FerfiKabat from './_root/Leiras/FerfiKabat'
import FerfiNadrag from './_root/Leiras/FerfiNadrag'
import Funyiro from './_root/Leiras/Funyiro'
import Furo from './_root/Leiras/Furo'
import Kenyer from './_root/Leiras/Kenyer'
import Mikro from './_root/Leiras/Mikro'
import NoiKabat from './_root/Leiras/NoiKabat'
import NoiNadrag from './_root/Leiras/NoiNadrag'
import Polo from './_root/Leiras/Polo'
import Szoknya from './_root/Leiras/Szoknya'
import RootLayout from './_root/RootLayout'
import Elelmiszerek from './_root/oldalak/Elelmiszerek'
import Eszkozok from './_root/oldalak/Eszkozok'
import Ruhak from './_root/oldalak/Ruhak'
import './root.css'
import { Routes, Route } from 'react-router-dom'
import Liszt from './_root/Leiras/Liszt'
import Tejfol from './_root/Leiras/Tejfol'
import Tej from './_root/Leiras/Tej'
import Sonka from './_root/Leiras/Sonka'
import Sajt from './_root/Leiras/Sajt'
import GYIK from './_root/oldalak/GYIK'

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            <Route element={<RootLayout />}>
                <Route index path='/' element={<Eszkozok />}/>
                <Route index path='/eszkozok' element={<Eszkozok />}/>
                <Route index path='/ruhak' element={<Ruhak />}/>
                <Route index path='/elelmiszerek' element={<Elelmiszerek />}/>

                <Route index path='/eszkozok/fds-5009-116r-csavarhuzo-keszlet' element={<Csavarhuzo />}/>
                <Route index path='/eszkozok/fiskars-solid-aso-117-x-18cm-fem' element={<Aso />}/>
                <Route index path='/eszkozok/hrn-526-vye-onjaro-funyiro' element={<Funyiro />}/>
                <Route index path='/eszkozok/stiebel-eltron-sho-ac-1000-12-bojler-allo-1000-l-12-kw' element={<Bojler />}/>
                <Route index path='/eszkozok/gorenje-mo4250clb-grilles-mikro-suto-20-liter-retro' element={<Mikro />}/>
                <Route index path='/eszkozok/bosch-gsr-18v-60-c-akkus-szenkefe-nelkuli-furo-csavarhuzo' element={<Furo />}/>

                <Route index path='/ruhak/paok-fc-polo' element={<Polo />}/>
                <Route index path='/ruhak/brandit-m65-giant-teli-kabat-olivazold' element={<FerfiKabat />}/>
                <Route index path='/ruhak/adven-slimmy-ferfi-nadrag-fekete' element={<FerfiNadrag />}/>
                <Route index path='/ruhak/fila-skort-nicole-scuba-blue-noi-szoknya' element={<Szoknya />}/>
                <Route index path='/ruhak/vizlepergeto-belelt-rozsaszin-noi-nadrag' element={<NoiNadrag />}/>
                <Route index path='/ruhak/noi-kabat-hector-black' element={<NoiKabat />}/>

                <Route index path='/elelmiszerek/falusi-kenyer-1kg' element={<Kenyer />}/>
                <Route index path='/elelmiszerek/liszt-gyermelyi-bl55-1kg' element={<Liszt />}/>
                <Route index path='/elelmiszerek/tarka-tejfol-20-szazalek' element={<Tejfol />}/>
                <Route index path='/elelmiszerek/magyar-tej-uht-tej-2,8-szazalek-1-liter' element={<Tej />}/>
                <Route index path='/elelmiszerek/gazda-fustolt-erlelt-sonka-200-szeletelt' element={<Sonka />}/>
                <Route index path='/elelmiszerek/medve-sajt-tejszines-140-g' element={<Sajt />}/>

                <Route index path='/gyik' element={<GYIK />}/>
              


            </Route>
        </Routes>
    </main>
  )
}

export default App
