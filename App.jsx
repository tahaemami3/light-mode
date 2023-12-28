import './App.css'
import { useState , useRef } from 'react'

function App() {
  
  const [toggel , settoggel] = useState(false)

  const image = useRef();

  const change = useRef();

  function mode () {
    settoggel(!toggel)
    toggel ? document.body.style.backgroundColor = '#fff' : document.body.style.backgroundColor = '#000';
    toggel ? change.current.style.backgroundColor = '#000' : change.current.style.backgroundColor = '#fff';
    toggel ? image.current.src = './icons/sun.png' : image.current.src = './icons/moon.png';
    }



  return (
    <>
    <button className='change-mode' onClick={mode} ref={change}>
      <img src="./icons/sun.png" alt="" className='icon' ref={image}/>
    </button>
    </>
  )
}

export default App
