import React from "react";
import styles from "./spinner.module.scss";

export default function Spinner() {
    return (
        <div className={styles.spinnerwrap} >
            <div className="spinner is-loading"></div>
        </div>
    )
}