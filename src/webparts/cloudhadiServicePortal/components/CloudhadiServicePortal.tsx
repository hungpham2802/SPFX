import * as React from 'react';


// import  { useState } from 'react';
// import styles from './CloudhadiServicePortal.module.scss';
import type { ICloudhadiServicePortalProps } from './ICloudhadiServicePortalProps';


import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import CreateRequest from './CreateRequest';
import ViewMyRequests from './ViewMyRequests';
import FAQ from './FAQ';
import LiveChat from './LiveChat';
import { ICloudhadiServicePortalState } from './ICloudhadiServicePortalState';

export default class CloudhadiServicePortal extends React.Component<ICloudhadiServicePortalProps, ICloudhadiServicePortalState> {

  public constructor(props: ICloudhadiServicePortalProps) {
    super(props);
    this.state = {
      selectedForm: <CreateRequest context={this.props.context} />
    };
  }
  public render(): React.ReactElement<ICloudhadiServicePortalProps> {



    const onMenuClick = (form: any) => {
      this.setState({ selectedForm: form });
    };
    const _items: ICommandBarItemProps[] = [
      {
        key: 'New',
        text: 'New Request',
        iconProps: { iconName: 'Add' },
        onClick: () => onMenuClick(<CreateRequest context={this.props.context} />)
      },
      {
        key: 'View',
        text: 'View My Requests',
        iconProps: { iconName: 'GroupedList' },
  onClick: () => onMenuClick(<ViewMyRequests context={this.props.context} />)
      },
      {
        key: 'FAQ',
        text: 'FAQ',
        iconProps: { iconName: 'Questionnaire' },
        onClick: () => onMenuClick(<FAQ />)
      },
      {
        key: 'Chat',
        text: 'Live Chat',
        iconProps: { iconName: 'Chat' },
        onClick: () => onMenuClick(<LiveChat />)
      }
    ];

    return (
      <div>
        <CommandBar
          items={_items}
        />
        <div>
          {this.state.selectedForm}
        </div>
      </div>
    );
  }
}


