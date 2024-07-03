import React from "react";
import Manav from "./navbar";
import FORMinput from "./formulaire";
import './App.css';
import Animation from "./animationA";
import ListeDeTaches from "./tache";
import Ali from "./essaie";

const app = () => {
    return (
   <div>
    
      <Manav/>
    
      <div className="manav" >
         <FORMinput/>
         <div className="animy" >
            <Animation/>
         </div>
      </div>
      <div className="tache">
         <ListeDeTaches/>
      
      </div>
      <div className="tache">
         <Ali/>
      
      </div>
      
   </div>
);
  }
  
  export default app;