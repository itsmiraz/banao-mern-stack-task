import { Toaster } from 'react-hot-toast'
import './App.css'
import Banner from './Components/Header/Banner/Banner'
import Header from './Components/Header/Header'
import MainNavber from './Components/MainNavber/MainNavber'
import Posts from './Components/Posts/Posts'

function App() {

  return (
    <section>
      <Header></Header>
      <Banner></Banner>
      <MainNavber></MainNavber>
      <Posts></Posts>
      <Toaster></Toaster>
    </section>
  )
}

export default App
