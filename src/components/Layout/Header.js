import React, { Component } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const reactBoard = `img/reactboard.png`;
  return (
    <>
      <header className={classes.header}>
        <h1>ReactBoard 🎲</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.bg}>
        <div className={classes["main-image"]}>
          <img
            src={process.env.PUBLIC_URL + reactBoard}
            alt="보드게임일러스트"
          />
        </div>
      </div>
    </>
  );
};
export default Header;
