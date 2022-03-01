import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import Header from '../components/Header'
import Footer from '../components/Footer'

const ChildrenWrapper = styled(Box)(({theme}) => ({
  padding: theme.spacing(6, 0, 6)
}))

export default function Default({ children }) {
  return (
    <>
      <Header />
        <ChildrenWrapper>
          { children }
        </ChildrenWrapper>
      <Footer />
    </>
  )
}