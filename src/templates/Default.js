import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Default({ children }) {
  return (
    <>
      <Header />

      { children }

      <Footer />
    </>
  )
}