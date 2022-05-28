// Stylesheet
import './assets/styles/bootstrap-grid.min.css'

// Files
import HomePageSEO from './components/meta/HomePageSEO'
import Header from "./components/home/Header"
import Main from "./components/home/Main"

function App() {
  return (
    <div className="App">
      <HomePageSEO/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
