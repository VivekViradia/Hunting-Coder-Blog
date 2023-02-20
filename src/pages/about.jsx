import { useState } from "react";
import NavBar from "./navbar";
import styles from "@/styles/Home.module.css";

const About = () => {

    const [message, setMessage] = useState(false);
    const handleSubscribe = () => {
        setMessage(true);
    }

    return (
        <main className={styles.main}>
            <div>
                <div className={styles.divstyle}>
                    <h3>To know more the about  Blog Subscribe Below</h3>
                    {message && <p>LOL! It's just a testing model</p>}
                    <button onClick={handleSubscribe}>Subscribe</button>
                </div>
            </div>
        </main>


    )
}

export default About;