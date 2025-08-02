import * as React from 'react';
import styles from './CloudhadiServicePortal.module.scss';
function FAQ() {
    return (
        <div className={styles.cloudhadiServicePortal}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <span className={styles.title}>FAQ</span>
                        <div id="FAQ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FAQ;