import React, { Suspense } from 'react'
import Dashboad from './Dashboard.js';
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'



const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const TheContent = () => {
    return (
        <main className="c-main">
            <CContainer fluid>
                <Suspense fallback={loading}>
                    <Dashboad />
                </Suspense>
            </CContainer>
        </main>
    )
}

export default React.memo(TheContent)
