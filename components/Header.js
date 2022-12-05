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

  return (
    <HeaderContainer>
        <LeftInnerContainer>
            <Image className='cursor-pointer' alt='Foodifyylogo' src='/foodifyy-logo.png' width="30" height="30" />
            <SearchBar>
                <MagnifyingGlassIcon className='h-4 text-gray-600' />
                <input className='hidden md:inline-flex  bg-transparent placeholder-gray-500 text-xs outline-none mx-1' type="text" name="query" placeholder='Search...' />
            </SearchBar>
        </LeftInnerContainer>

        {/* right */}
        <RightInnerContainer>
            <Image 
                className='rounded-sm text-[0.6em]' 
                src={session.user.image}
                width="30"
                height="30"
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