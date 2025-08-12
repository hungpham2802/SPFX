import * as React from 'react';
import { spfi, SPFI } from "@pnp/sp";
import { SPFx } from "@pnp/sp/presets/all";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";

import styles from './CloudhadiServicePortal.module.scss';
import { DetailsList, DetailsListLayoutMode } from '@fluentui/react';
import { Link } from '@fluentui/react';
import CreateRequest from './CreateRequest';
// Column headers.
const columns = [
    { key: 'Title', name: 'Request No.', fieldName: 'Title', minWidth: 70, maxWidth: 200, isResizable: true },
    { key: 'RequestTitle', name: 'Request Title', fieldName: 'RequestTitle', minWidth: 160, maxWidth: 200, isResizable: true },
    { key: 'RequestStatus', name: 'Status', fieldName: 'RequestStatus', minWidth: 70, maxWidth: 200, isResizable: true }
];
// Render list of requests.
import { WebPartContext } from '@microsoft/sp-webpart-base';

interface IViewMyRequestsProps {
    context: WebPartContext;
}

function ViewMyRequests(props: IViewMyRequestsProps) {

    // On component mount
    React.useEffect(() => {
        loadMyRequests();
    }, [])

    // Reset to view requests.
    const resetViewRequest = () => {
        setDoViewRequest(false);
    };

    // state variables for request items.
    interface IResultItem {
        ID: number;
        Title: JSX.Element;
        RequestTitle: string;
        RequestStatus: string;
    }
    const [myItems, setMyItems] = React.useState<IResultItem[]>([]);

    // state variables for viewing individual request.
    const [doViewRequest, setDoViewRequest] = React.useState(false);
    const [requestID, setRequestID] = React.useState(0);

    // Load Service requests
    const loadMyRequests = async () => {
        const sp: SPFI = spfi().using(SPFx(props.context));
        let currentUser = await sp.web.currentUser();
        interface IServicePortalItem {
            Id: number;
            Title: string;
            RequestTitle: string;
            RequestStatus: string;
        }

        interface IResultItem {
            ID: number;
            Title: JSX.Element;
            RequestTitle: string;
            RequestStatus: string;
        }

        await sp.web.lists.getByTitle("Service Portal").items
            .filter(`Author/EMail eq '${currentUser.Email}'`)
            .select('Id', 'Title', 'RequestTitle', 'RequestStatus')()
            .then((items: IServicePortalItem[]) => {
                let result: IResultItem[] = [];
                items.forEach((element: IServicePortalItem) => {
                    result.push({
                        ID: element.Id,
                        Title: <Link href="#">{element.Title}</Link>,
                        RequestTitle: element.RequestTitle,
                        RequestStatus: element.RequestStatus
                    });
                });
                setMyItems(result);
            });
    };
    // On click of item.
    const _onItemInvoked = (item: any): void => {
        // call child component with ID     
        setRequestID(item.ID);
        setDoViewRequest(true);
    };

    // Load all requests.
    if (!doViewRequest) {
        return (
            <div className={styles.cloudhadiServicePortal}>
                <div className={styles.container}>
                    <span className={styles.title}>My Service Requests</span>
                    <DetailsList
                        items={myItems}
                        columns={columns}
                        layoutMode={DetailsListLayoutMode.justified}
                        onItemInvoked={_onItemInvoked}
                    />
                </div>
            </div>
        );
    }
    // Call to load individual request.
    else {
        return (
            <CreateRequest ID={requestID} resetView={resetViewRequest} context={props.context} />
        );
    }
}
export default ViewMyRequests;
