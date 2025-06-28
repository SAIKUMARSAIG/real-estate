// import React from 'react'
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects';
// import NavBar from './components/NavBar';
import Testimonials from './components/Tesstimonals';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = React.useState(0);

  return (
    <>
      {/* <h1>Hello</h1>
      <p>Count: {count}</p>
      <button className='h-9 w-24 px-2 my-3 mx-2 rounded-sm bg-gradient-to-br from-blue-500 to-violet-700 cursor-pointer focus:bg-gradient-to-tr focus:from-red-500 focus:from-gray-700   bg-orange-500 focus:ring-4 focus:ring-lime-300' onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
      {/* <NavBar /> */}

      <Header></Header>
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <Card /> */}
    </>
  )
}

export default App
