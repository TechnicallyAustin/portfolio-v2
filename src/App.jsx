import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app" className='w-full h-screen flex flex-col border'>
      <header className='h-16 w-full z-10 top-0 left-0'>
        HEADER
      </header>

      <main className='w-full h-full '>
        <section className='w-full h-full relat'>
          Main
        </section>
        <section>Nav</section>
      </main>

      <footer className='w-full h-16 '>
        Footer
      </footer>
    </div>
  )
}

export default App
