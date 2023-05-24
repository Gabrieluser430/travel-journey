import Nav from "./components/Nav.jsx"
import Travel from "./components/Travel.jsx"
import Data from "./Data.js"
import React from "react"


export default function App() {


  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [place, setPlace] = React.useState(Data[currentIndex]);

  const changePlace = () => {
    if (currentIndex < Data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setPlace(Data[currentIndex + 1]);
    } else {
      setCurrentIndex(0);
      setPlace(Data[0]);
    }
  };
  
  return (
    <div>
      <Nav />
      <main>
        <Travel 
        {...place}
        changeButton={changePlace}
         />
      </main>
    </div>
    
    
  )
}