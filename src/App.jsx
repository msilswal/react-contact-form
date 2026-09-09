import { useRef } from 'react'
import Contact from './Contact';
import './App.css'

function App() {
  
let emailref = useRef('');
let contactref = useRef('');

let handleemail=(e)=>{
emailref.current = e.target.value;
}

let handlecontact=(e)=>{
  contactref.current = e.target.value;
  
}

const handlesubmit=(e)=>{
  e.preventDefault();
  console.log('email : ',emailref.current,'Contact : ',contactref.current)
}

  return (
        <>
        <Contact submitbtn={handlesubmit} email={handleemail} contact={handlecontact} />
    </>
  )
}

export default App
