import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../components/StyledComponents/Global'
import { SessionProvider } from "next-auth/react"

const theme = {
  colors:{
    body:"#f9f9f9",
    white: "#ffffff",
    gray_100: "#f3f4f6",
    border: "#c0c3c4"
  },
}


function MyApp({ Component, pageProps }) {


  return (
    <>
      <SessionProvider session={pageProps.session} >
        <ThemeProvider theme={theme} >
        <GlobalStyles/>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
