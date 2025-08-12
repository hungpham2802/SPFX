import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface ICreateRequestProps {
  ID?: number;
  resetView?: any;
  isAssigned?: boolean;
  context: WebPartContext;
}
  