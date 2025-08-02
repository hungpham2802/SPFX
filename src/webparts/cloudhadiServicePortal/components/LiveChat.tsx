import * as React from 'react';
import styles from './CloudhadiServicePortal.module.scss';
function LiveChat() {
    return (
        <div className={styles.cloudhadiServicePortal}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <span className={styles.title}>Live Chat</span>
                        <div id="LiveChat">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LiveChat;