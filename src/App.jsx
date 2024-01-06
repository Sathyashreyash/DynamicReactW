import { useEffect, useState } from "react";
import Background from "./components/background/background";
import Navbar from "./components/navbar/nav";
import Hero from "./components/hero/Hero";


export const App = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() =>{
    setInterval(() => {
       setHeroCount((count) => {return count===2?0 : count+1})
    }, 8000);
  }, [])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}></Background>
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  )
}

export default App;
