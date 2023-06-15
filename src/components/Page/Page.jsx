import './Page.css'
import NavBar from '../NavBar/NavBar'
import { MapContextProvider } from '../../Context/MapaContext';

const Page = ({ children }) => {
    return(
        <div style={{marginTop: '8vh'}}>
            <MapContextProvider>
                <NavBar />
                {children}
            </MapContextProvider>
        </div>
    )
}

export default Page;