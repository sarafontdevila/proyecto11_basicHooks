import { useState } from "react";
import Header from "../Header/Header";
import "./Desplegable.css";


const Desplegable = () => {
  const [openned, setOpenned] = useState(false);

  const toggle = () => {
  
    setOpenned(!openned);
  };

  return (
    <>
      <img
        src="../assets/menu.png"
        alt="menu"
        className="menu"
        onClick={toggle}
      />
      {console.log(openned)}
      <div className="desplegable">
        <Header
          h="90svh"
          w={openned ? "300px" : "0px"}
          flexDir="column"
          bgColor="orange"
          r={0}
        />
      </div>
    </>
  );
};

export default Desplegable;