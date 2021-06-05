import Navbar from './layout/navbar/navbar'
import HomePage from './pages/home'
import {useEffect} from 'react'
function App() {
  useEffect(()=>{
    let alert=document.querySelector('.alert')
    setTimeout(()=>{
      alert.style.display = "none"
    },3000)
  },[]) 
  return (
    <>
        <div className='alert' style={{backgroundColor:"rgb(129, 216, 250)",textAlign:"center",fontSize:"20px",color:'white',fontWeight:"bolder"}}>!! Not Yet Mobile Responsive !!</div>
        <Navbar />
        <HomePage />
    </>
  );
}

export default App;
