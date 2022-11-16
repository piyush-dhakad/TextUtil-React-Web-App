import {useState} from "react"
import Navbar from './components/Navbar'
import TextForm from "./components/TextForm"
import About from "./components/About"
import Alert from "./components/Alert"
import { BrowserRouter, Routes, Route } from "react-router-dom";	


function App() {
const [mode,setMode] = useState("light");	
const [alert,setAlert] = useState(null);

const showAlert = (message,type)=>{
setAlert({
msg: message,
type:type
});

setTimeout(()=>{
setAlert(null)
},2000);
}

const toggel = (ev)=>{
ev.preventDefault();
if(mode === "light"){
setMode("dark");
document.body.style.backgroundColor="skyblue"
showAlert("dark Mode Enable...","light");
document.title ="TextUtil - dark Mode";
}
else {
setMode("light");
document.body.style.backgroundColor="white"
showAlert("Light Mode Enable","primary");
document.title ="TextUtil - light Mode";
}
}
  return (
<>
<BrowserRouter>

<Navbar  title="LOGO Text" changemode={mode} toggelfun={toggel}/>
<Alert alert={alert}/>
<div className="container">

<Routes>
{/* exect lgane se react exect same path hone pr hi naviget krega*/}
<Route index exect path="/" element={<TextForm title="Text Change App" showAlert={showAlert} changemode={mode} /> } />    
<Route exect path="about" element={<About />} />

</Routes>


</div>
</BrowserRouter>
</>
  );
}

export default App;
  