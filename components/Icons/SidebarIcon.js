import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { SidebarButtonContainer } from '../StyledComponents/Sidebar.styled'

const SidebarIcon = ({Icon, title, path}) => {
  const router = useRouter()

  return (
    <SidebarButtonContainer>
      <Link href={path} className={` ${router.pathname === path ? "activeTab" : "unactiveTab"} md:p-6 p-2 mb-1 mr-1 md:hover:bg-white cursor-pointer rounded-sm flex items-center text-gray-500 border-transparent shadow-sm border-b-2 active:border-black`}>
            <Icon className="h-5 inline"/> 
            <div className='pl-2 hidden md:inline-flex '>
              {title}  
            </div>
      </Link>
    </SidebarButtonContainer>
  )
}

export default SidebarIcon




// sm = 640px
// md = 768px
// lg = 1024px
// xl = 1280px
// 2xl= 1536px