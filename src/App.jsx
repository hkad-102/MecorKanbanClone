
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Controls from './components/Controls/Controls'
import KanbanBoard from './components/Kanban/KanbanBoard'

function App() {
  

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-[calc(100vw-250px)]'>
        <Navbar />
        <Header />
        <Controls />
        <KanbanBoard />
      </div>
    </div>
  )
}

export default App
