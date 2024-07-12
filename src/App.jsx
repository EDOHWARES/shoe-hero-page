import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {

  return (
    <>
       <section className='bg-black w-full'>
        <div className='max-w-[1440px] w-full mx-auto h-screen py-4 px-6 md:pt-6 md:px-14'>
          <Header />
          <Hero />
        </div>
       </section>
    </>
  )
}

export default App
