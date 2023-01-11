import React from "react"
import styles from "../styles/NoUser.module.css"

const Popup: React.FC<{text: string, color: string, onClick: () => void}> = ({ text, color, onClick }) => {
    return (
        <>
            <div className={styles.popup} style={{backgroundColor: color}}>
                {text}
                <span className={styles.x} onClick={() => onClick()}>x</span>
            </div>
        </>
    )
}

export default Popup;