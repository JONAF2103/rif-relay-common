import RelayData from './RelayData';
import { ForwardRequest, DeployRequestStruct } from './ForwardRequest';
export interface RelayRequest {
    request: ForwardRequest;
    relayData: RelayData;
}
export interface DeployRequest {
    request: DeployRequestStruct;
    relayData: RelayData;
}
export declare function cloneRelayRequest(relayRequest: RelayRequest): RelayRequest;
export declare function cloneDeployRequest(deployRequest: DeployRequest): DeployRequest;
