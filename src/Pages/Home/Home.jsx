import React, { useEffect } from 'react'
import Page from '../../components/Page/Page'
import "bootstrap/dist/css/bootstrap.min.css";
import MapView from '../../components/MapView/MapView';

function Home() {  
  return (
    <Page>
        <div className="contariner-fluid">
          <MapView className='col-12'/>
      </div>
    </Page>
  )
}

export default Home