import Header from '../components/Header'

export default function Default({ children }) {
  return (
    <>
      <Header>
        Header
      </Header>

      { children }

      <footer>
        Footer
      </footer>
    </>
  )
}