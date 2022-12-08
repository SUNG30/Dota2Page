import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import { Dotacard } from "./components/herocard";
import axios from "axios";
import { url } from "inspector";
import { Filtercontainer } from "./components/headernav";
import { Navmenu } from "./components/navmenu";
interface dotaItems {
  localized_name: string;
  id: number;
  primary_attr: "str" | "int" | "agi";
  img: string;
}

function App() {
  const [data, setdata] = useState<dotaItems[]>([]);

  useEffect(() => {
    axios
      .get("https://api.opendota.com/api/heroStats")
      .then((res) => {
        console.log("log res", res);
        const value = res.data;
        setdata(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 
  return (
    <div 
      style={{
        background:
          "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg')     center fixed",
         backgroundSize: "cover",
        height: "100%",
         overflow: "hidden",
        width: "100%",
        
      }}
    >
      <Navmenu />
      <Filtercontainer />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
      
        {data.map((hero) => {
          return (
            <Dotacard
              key={hero.id}
              name={hero.localized_name}
              heroId={hero.id}
              heroattr={hero.primary_attr}
              heroimg={hero.img}
            />
          );
        })}
       

      </div>
    </div>
  );
}
export default App;
