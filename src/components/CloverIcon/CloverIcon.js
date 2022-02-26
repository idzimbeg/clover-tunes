import React from "react";
import classes from "./CloverIcon.module.css";

const CloverIcon = () => {
  return (
    <div className={classes.container}>
      <div className={classes.clover}>
        <div className={classes.shamrock}>
          <div className={classes.leafOne}></div>
          <div className={classes.leafTwo}></div>
          <div className={classes.leafThree}></div>
        </div>
      </div>
    </div>
  );
};

export default CloverIcon;
