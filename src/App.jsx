import Maindiv from "./Maindiv.jsx";
import Dp from "./Dp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Login  from "../src/Login.jsx";
import About from "./About.jsx";
import Admin from "./admin.jsx";
import Login1 from "./Login1.jsx";
import BioPage from "./BioPage.jsx";
import BioPage2 from "./Biopage2.jsx";
import Analytics from "./Analytics.jsx";
import Mainlogin from "./Mainlogin";
import Mainlogin2 from "./Mainlogin2";
import Preview from "./Previewphone.jsx";


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
       <Route path="/signup" element={<Mainlogin/>}></Route>
       <Route path="/login" element={<Mainlogin2/>}></Route>
       <Route path="/radhe" element={<BioPage2/>}></Route>
       <Route path="/reset" element={<Maindiv/>}></Route>


       <Route path="/biopage" element={<BioPage/>}></Route>
       <Route path="/anaytics" element={<Analytics/>}></Route>
       <Route path="/kk" element={<Preview/>}></Route>





       <Route path="/:fname" element={ <Dp/>}></Route>
        </Routes>
     </BrowserRouter>  
     
     
         
               

             
            
         
          
              
              
        </>
    );
}
export default App;