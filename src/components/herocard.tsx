import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { FC, Fragment } from "react";
import { Image } from "antd";
import { genHoverStyle } from "antd/es/input/style";

interface cardProps {
  name: string;
  heroId: number;
  heroattr: "str" | "int" | "agi";
  heroimg: string;
}

const Dotacard: FC<cardProps> = (props) => {
  const heroImageName = props.name.toLocaleLowerCase().split(" ").join("_");
  const imgstr = props.heroimg;
  const imgUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImageName}.png`;

  return (
    <Card
     
      onClick={() => {
        // window.open("https://www.dota2.com/hero/", props.name.toLowerCase())
        const heroName = props.name.toLocaleLowerCase().replace(/\s/g, "");
        const redirectUrl = `https://www.dota2.com/hero/${heroName}`;
        console.log("log redirectUrl", redirectUrl);
        window.open(redirectUrl);
      }}
      hoverable
      style={{
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0)",
        // backgroundColor:
        //   props.heroattr === "str"
        //     ? "red"
        //     : props.heroattr === "int"
        //     ? "blue"
        //     : props.heroattr === "agi"
        //     ? "green"
        //     : "White",
        borderColor: "rgba(0, 0, 0, 0)",
        
      }}
    >
      <img className="dotaImg"  src={imgUrl} />
      {/* {props.heroId}.{props.name} */}
    </Card>
  );
};

export { Dotacard };
