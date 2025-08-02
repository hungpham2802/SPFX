import * as React from 'react';
import styles from './CloudhadiServicePortal.module.scss';
function ViewMyRequests() {
    return (
        <div className={styles.cloudhadiServicePortal}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <span className={styles.title}>View My Requests</span>
                        <div id="viewForm">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ViewMyRequests;