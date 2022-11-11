import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = ({ items = [] }) => (
  <ul className={styles.list}>
    {items.map((item) => (
      <li key={item.name}>
        <Link to={item.path} className={styles.link}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default Navigation;
