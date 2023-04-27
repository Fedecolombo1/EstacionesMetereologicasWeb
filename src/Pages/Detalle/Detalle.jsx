import React from 'react'
import './Detalle.css'
import Page from '../../components/Page/Page'
import EstacionDetalle from '../../components/EstacionDetalle/EstacionDetalle'

function Detalle() {
  return (
    <Page>
        <div className="contariner-fluid" style={{marginTop: '8vh'}}>
            <EstacionDetalle />
        </div>
    </Page>
  )
}

export default Detalle