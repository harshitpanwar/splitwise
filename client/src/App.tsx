import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='bg-'>
      <Header userName={'Anubhav Sahu'}/>
      <Dashboard />
    </div>
  )
}

export default App
