import { ReactNode } from "react";
import styles from "styles/Layout/Main.module.scss"
import * as PropsUtl from "lib/propsUtl";

const Main = ({ children, className, style }: { children: ReactNode, } & PropsUtl.css) => {
    return (
        <main id={styles.main} className={className} style={style}>
            {children}
        </main>
    )
}

export default Main;