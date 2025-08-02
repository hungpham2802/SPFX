import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// Removed IReadonlyTheme import

import * as strings from 'CloudhadiServicePortalWebPartStrings';
import CloudhadiServicePortal from './components/CloudhadiServicePortal';
import { ICloudhadiServicePortalProps } from './components/ICloudhadiServicePortalProps';


export interface ICloudhadiServicePortalWebPartProps {
  description: string;
}

export default class CloudhadiServicePortalWebPart extends BaseClientSideWebPart<ICloudhadiServicePortalWebPartProps> {

  // Removed _isDarkTheme and _environmentMessage

  public render(): void {
    const element: React.ReactElement<ICloudhadiServicePortalProps> = React.createElement(
      CloudhadiServicePortal,
      {
        description: this.properties.description,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  // Removed onInit override related to _environmentMessage


  // Removed _getEnvironmentMessage function

  // Removed onThemeChanged override related to _isDarkTheme

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
