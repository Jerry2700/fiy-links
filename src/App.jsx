import Maindiv from "./Maindiv.jsx";
import Dp from "./Dp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Username from "./Username.jsx";
import  Login  from "../src/Login.jsx";
import About from "./About.jsx";
import Admin from "./admin.jsx";
import Login1 from "./Login1.jsx";
import BioPage from "./BioPage.jsx";
import BioPage2 from "./Biopage2.jsx";


const App=()=>{

    return(
        <>
            

         <BrowserRouter>
      <Routes>
       {/* <Route path="/admin" element={<Maindiv/>}></Route> */}
       {/* <Route path="radhe" element={ <Admin/>}></Route> */}
       {/* <Route path="/registration" element={<Username/>}></Route> */}
       {/* <Route path="/login" element={<Login/>}></Route> */}
       {/* <Route path="/about" element={<About/>}></Route> */}
       <Route path="/" element={<Login1/>}></Route>
       <Route path="/profile" element={<BioPage2/>}></Route>

       <Route path="/biopage" element={<BioPage/>}></Route>


       <Route path="/:fname" element={ <Dp/>}></Route>
        </Routes>
     </BrowserRouter>  
     
     
         
               

             
            
         
          
              
              
        </>
    );
}
export default App;