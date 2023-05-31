import './Page.css'
import NavBar from '../NavBar/NavBar'
import { MapContextProvider } from '../../Context/MapaContext';

const Page = ({ children }) => {
    return(
        <MapContextProvider>
            <NavBar />
            {children}
        </MapContextProvider>
    )
}

export default Page;