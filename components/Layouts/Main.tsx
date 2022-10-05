import { ReactNode } from "react";
import styles from "styles/Layout/Main.module.scss"

const Main = ({ children }: { children: ReactNode }) => {
    return (
        <main id={styles.main}>
            {children}
        </main>
    )
}

export default Main;