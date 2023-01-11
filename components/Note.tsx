import React from "react";
import styles from "../styles/Note.module.css"

const Note: React.FC<{title: string, text: string}> = ({ title, text }) => {
    return (
        <>
            <div className={styles.container} >
                <h1>{title}</h1>
                <hr style={{width: "100%", color: "gray"}} />
                <p>{text}</p>
            </div>
        </>
    );
}

export default Note;
