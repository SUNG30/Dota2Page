import { Button } from "antd";
import { FC, Fragment, useState } from "react";
import { SearchOutlined, DownloadOutlined } from "@ant-design/icons";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { icons } from "antd/es/image/PreviewGroup";
import { url } from "inspector";

interface headernavProps {}

const Filtercontainer: FC<headernavProps> = (props) => {
  const [size, setSize] = useState<SizeType>("large");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        fontFamily: "Roboto, sans-serif",
        fontSize: "20px",
        
        fontWeight: 700
      }}
    >
      <p style={{ color: "white" }}>FILTER HEROS</p>
      <div style={{ display: "flex" }}>
        <p style={{ display: "flex", color: "white" }}>ATTRIBUTE</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "white" }}>COMPLEXITY</p>
      </div>
      <Button
        style={{
          width: "250px",
          height: "50px",
            right:"20px",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0)",
          fontFamily: "Roboto, sans-serif",
          fontSize:"20px",
          fontWeight: 700

        }}
        icon={<SearchOutlined />}
      >
        Search
      </Button>
    </div>
  );
};
export { Filtercontainer };
