import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <nav>
    <ul>
      <li>
        <Link to="chapter/1">chapter 1</Link>
      </li>
      <li>
        <Link to="chapter/2">chapter 2</Link>
      </li>
    </ul>
  </nav>
);


export default Menu;
