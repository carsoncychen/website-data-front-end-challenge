import React from "react";
import styles from "./Chart.module.css";

// TODO: Implement
export const ChartHeader = ({ text }) => (
  <div className={`row ${styles.header}`}>
    <div className={styles.header__label}>Title</div>
    <text className={styles.header__text}>{text}</text>
  </div>
)
