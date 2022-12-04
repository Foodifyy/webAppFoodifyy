import Image from 'next/image'
import React from 'react'
import { ArrowLeftOnRectangleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import {HeaderContainer, LeftInnerContainer, RightInnerContainer, SearchBar } from './StyledComponents/Header.styled'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Header = () => { 
  const router  = useRouter()
  const handleSignout = async () => {
     await router.push('/')
     signOut()
  }
  const {data: session} = useSession()
//   const HeaderIconList = [
//     {
//         title: "Home",
//         icon: HomeIcon,
//         active: true
//     },
//     {
//         title: "Club",
//         icon: UserGroupIcon, 
//         active: false
//     },
//     {
//         title: "Global",
//         icon: Squares2X2Icon,
//         active: false
//     },
//     {
//         title: "Scan",
//         icon: ViewfinderCircleIcon,
//         active: false
//     },
//     {
//         title: "NutrientPlot",
//         icon: ChartBarIcon,
//         active: false
//     }
//   ]

  return (
    <HeaderContainer>
        <LeftInnerContainer>
            <Image className='cursor-pointer' priority alt='logo' src='/foodifyy-logo.png' width="30" height="30" />
            <SearchBar>
                <MagnifyingGlassIcon className='h-4 text-gray-600' />
                <input className='hidden md:inline-flex  bg-transparent placeholder-gray-500 text-xs outline-none mx-1' type="text" name="query" placeholder='Search...' />
            </SearchBar>
        </LeftInnerContainer>

        {/* <CenterInnerContainer>
            <div className='flex items-center space-x-6 md:space-x-6 ' >
            {
                HeaderIconList.map(element => {
                    return <HeaderIcon Icon={element.icon} key={element.title}/>
                })
            }
            </div>
        </CenterInnerContainer> */}

        {/* right */}
        <RightInnerContainer>
            <Image 
                className='rounded-full' 
                src={session.user.image}
                width={30}
                height={30}
                layout="fixed"
                alt='user Image'
            />
            <div className='whitespace-nowrap md:text-medium' >
                {session.user.name}
            </div>
            <ArrowLeftOnRectangleIcon onClick={handleSignout} className='h-4 md:h-5 cursor-pointer ' />
        </RightInnerContainer>
    </HeaderContainer>
  )
}

export default Header