import React from "react";

import Bdy from './comp/body.js'
import Navbar from "./comp/navbar.js";
import About from "./comp/About.js";
import Footer  from "./comp/footer.js";
import Devs  from "./comp/devs.js";
import E from "./comp/ex.js";
import Coiins from "./comp/coiins.js";

function App() {
  
  return (
    <div>

      <Navbar/>
      
      <Bdy/>

      <About/>

      <Coiins/>

      <Devs/>

      <Footer/>

      <E/>

    </div>
  );
}

export default App;


// Blockchain service provider..