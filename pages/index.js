import { getSession } from "next-auth/react";
import Image from "next/image";
import { SigninContainer } from "../components/StyledComponents/Login.styled";
import { signIn } from "next-auth/react";
import RootLayout from "../components/Layout/RootLayout";
import UserFeed from "./userfeed";

export default function Home({session}) {

  const UserLogin = () => {
    return (
      <SigninContainer className="cursor-pointer">
        <button onClick={signIn} className="active:border-b-4 active:border-black shadow-xl" >
          <Image rel="preloded" as="font" src='/foodifyy-logo.png' alt='foodifyy logo' width={40} height={40} priority style={{width:"auto", height:"auto"}} />
          <div className='ml-3 text-[1.3rem] md:text-3xl font-medium'>
              Sign in to Foodifyy
          </div>
        </button>
      </SigninContainer>
    )
  }

  if(!session) return <UserLogin/>

  else {
    return (
      <RootLayout>
        <UserFeed/>
      </RootLayout> 
    )
  }
}

export async function getServerSideProps(context){
  // get the user
  const session = await getSession(context)
  return {
    props: {
      session : session
    }
  }
}