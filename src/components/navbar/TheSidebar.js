import React from 'react'
import {
    CCreateElement,
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavTitle,
    CSidebarMinimizer,
    CSidebarNavDropdown,
    CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'


const navigation = [
    {
        _tag: 'CSidebarNavItem',
        name: 'Dashbord',
        icon: <CIcon content={freeSet.cilSpeedometer} customClasses="c-sidebar-nav-icon" />,
        badge: {
            color: 'info',
            text: 'NEW',
        }
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Wall Count',
        icon: <CIcon size={'lg'} content={freeSet.cilSettings} customClasses="c-sidebar-nav-icon" />,
        badge: {
            color: 'info',
        }
    },
    {
        _tag: 'CSidebarNavTitle',
        _children: ['Theme']
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Typography',
        to: '/theme/typography',
        icon: 'cil-pencil',
    },
    {
        _tag: 'CSidebarNavTitle',
        _children: ['Components']
    },
]

const TheSidebar = () => {


    return (
        <CSidebar
        >
            <CSidebarBrand className="d-md-down-none" >
                ADMIN PANNEL
                <CIcon
                    className="c-sidebar-brand-full"
                    content={freeSet.logoNegative}
                    height={35}
                />
                <CIcon
                    className="c-sidebar-brand-minimized"
                    name="sygnet"
                    height={35}
                />
            </CSidebarBrand>
            <CSidebarNav>

                <CCreateElement
                    items={navigation}
                    components={{
                        CSidebarNavDivider,
                        CSidebarNavDropdown,
                        CSidebarNavItem,
                        CSidebarNavTitle
                    }}
                />
            </CSidebarNav>
            <CSidebarMinimizer className="c-d-md-down-none" />
        </CSidebar>
    )
}

export default TheSidebar

