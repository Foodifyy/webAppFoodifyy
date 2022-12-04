import { ChartBarIcon, HomeIcon, Squares2X2Icon, UserGroupIcon, ViewfinderCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import SidebarIcon from './Icons/SidebarIcon'
import { SidebarContainer } from './StyledComponents/Sidebar.styled'

const Sidebar = () => {

  const SidebarIconList = [
    {
      title: "Home",
      icon: HomeIcon,
      path: '/'
    },
    {
      title: "Scan",
      icon: ViewfinderCircleIcon,
      path: '/foodscan'
    },
    {
      title: "Global",
      icon: Squares2X2Icon,
      path: '/global'
    },
    {
      title: "Club",
      icon: UserGroupIcon, 
      path: '/club'
    },
    {
      title: "Nutrient-data",
      icon: ChartBarIcon,
      path: '/nutrientdata'
    },

  ]

  return (
    <SidebarContainer>
      {
        SidebarIconList.map(element => {
          return <SidebarIcon key={element.title} path={element.path} Icon={element.icon} title={element.title} />
        })
      }
    </SidebarContainer>
  )
}

export default Sidebar