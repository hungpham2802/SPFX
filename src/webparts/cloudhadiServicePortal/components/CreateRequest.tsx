import * as React from 'react';
import styles from './CloudhadiServicePortal.module.scss';
import { TextField, Dropdown, Stack, IStackTokens, PrimaryButton, DefaultButton } from '@fluentui/react';
const stackTokens: IStackTokens = { childrenGap: 30 };
function CreateRequest() {
  return (
    
        <div className={styles.cloudhadiServicePortal}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <span className={styles.title}>New Service Request</span>
                        <div id="requestForm">
                            <div className={styles.formGrid}>
                                <div className={styles.formGridRow}>
                                    <TextField label="Request Title" required></TextField>
                                    <TextField label="Request Description" multiline rows={4} required></TextField>
                                    <Dropdown
                                        placeholder="Select an option"
                                        label="Related to"
                                        options={[
                                            { key: 'Access', text: 'Access' },
                                            { key: 'Materials', text: 'Materials' },
                                            { key: 'Equipemnts', text: 'Equipments' },
                                            { key: 'General', text: 'General' }
                                        ]}
                                        required
                                    />
                                    <Stack horizontal tokens={stackTokens} className={styles.buttonStack}>
                                        <PrimaryButton className={styles.button} text="Submit" />
                                        <DefaultButton text="Cancel" />
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default CreateRequest;