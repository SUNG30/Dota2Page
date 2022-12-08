import { FC, Fragment } from "react";
import { Breadcrumb, Dropdown, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import type { MenuProps } from "antd";
interface navmenuProps {}

const Navmenu: FC<navmenuProps> = (props) => {
  const item2s = [
    { label: "HERO", key: "item-1" }, // remember to pass the key prop
    { label: "ESPORT", key: "item-2" },
    { label: "NEWS", key: "item-3" }, // which is required
    { label: "ITEMS", key: "item-4" },
  ];
  const menu = (
    <Menu
      style={{
        border: "2px solid rgba(255,255,255,.6)",
        backgroundColor: "rgba(255,255,255,.2)",
        fontSize: "14px",
        letterSpacing: "2px",
        marginTop: "5px",
        opacity: ".8",
        textTransform: "uppercase",
        marginBottom: "4px",
        paddingLeft: "10px",
        paddingRight: "10px",
        transitionDuration: ".2s",
        color: "white",
        fontWeight: 700,
     
        
      }}
    >
      <Menu.Item style={{ color: "white" }}>PATCHES</Menu.Item>
      <Menu.Item style={{ color: "white" }}>GAMEPLAY UPDATE</Menu.Item>
      <Menu.Item style={{ color: "white" }}>PERVIOUS UPDATES</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
      <Header
        style={{
          position: "sticky",
          top: "",
          zIndex: 1,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "16px",
            fontSize: "18px",
            letterSpacing: "2px",

            marginTop: "5px",
            opacity: ".8",
            textTransform: "uppercase",
            marginBottom: "4px",
            paddingLeft: "10px",
            paddingRight: "10px",
            fontWeight: 700,
            color: "white",
          }}
        >
          <img
            style={{ width: "250px" }}
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png"
          />
        </div>
        <Dropdown overlay={menu}>
          <a
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              position: "absolute",
              top: "5%",
              right: "70%",
              textAlign: "center",
              fontSize: "18px",
              color: "#fff",
              letterSpacing: "2px",
              fontWeight: 600
              //  border: "2px solid rgba(255,255,255,.6)"
            }}
          >
            GAME
          </a>
        </Dropdown>

        <Menu
        className= "secondMenu"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          // items={new Array(3).fill(null).map((_, index) => ({
          //   key: String(index + 1),
          //   label: `nav ${index + 1}`,
          // }))}
          items={item2s}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            position: "absolute",
            top: "0%",
            width: '400px',
            right: "30%",
            textAlign: "center",
            fontSize: "18px",
            color: "#fff",
            fontWeight: 700,
            // display:"flex",
            // justifyItems: "space-between"
            
            //  border: "2px solid rgba(255,255,255,.6)"
          }}
        />
      </Header>
    </Layout>
  );
};

export { Navmenu };
