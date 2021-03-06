/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/storageInsightConfigsMappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClientContext } from "../operationalInsightsManagementClientContext";

/** Class representing a StorageInsightConfigs. */
export class StorageInsightConfigs {
  private readonly client: OperationalInsightsManagementClientContext;

  /**
   * Create a StorageInsightConfigs.
   * @param {OperationalInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: OperationalInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a storage insight.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param parameters The parameters required to create or update a storage insight.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageInsightConfigsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, storageInsightName: string, parameters: Models.StorageInsight, options?: msRest.RequestOptionsBase): Promise<Models.StorageInsightConfigsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param parameters The parameters required to create or update a storage insight.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, storageInsightName: string, parameters: Models.StorageInsight, callback: msRest.ServiceCallback<Models.StorageInsight>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param parameters The parameters required to create or update a storage insight.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, storageInsightName: string, parameters: Models.StorageInsight, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageInsight>): void;
  createOrUpdate(resourceGroupName: string, workspaceName: string, storageInsightName: string, parameters: Models.StorageInsight, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageInsight>, callback?: msRest.ServiceCallback<Models.StorageInsight>): Promise<Models.StorageInsightConfigsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        storageInsightName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.StorageInsightConfigsCreateOrUpdateResponse>;
  }

  /**
   * Gets a storage insight instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageInsightConfigsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, storageInsightName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageInsightConfigsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, storageInsightName: string, callback: msRest.ServiceCallback<Models.StorageInsight>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, storageInsightName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageInsight>): void;
  get(resourceGroupName: string, workspaceName: string, storageInsightName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageInsight>, callback?: msRest.ServiceCallback<Models.StorageInsight>): Promise<Models.StorageInsightConfigsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        storageInsightName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.StorageInsightConfigsGetResponse>;
  }

  /**
   * Deletes a storageInsightsConfigs resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, storageInsightName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, storageInsightName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, storageInsightName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, workspaceName: string, storageInsightName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        storageInsightName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists the storage insight instances within a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageInsightConfigsListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageInsightConfigsListByWorkspaceResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.StorageInsightListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageInsightListResult>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageInsightListResult>, callback?: msRest.ServiceCallback<Models.StorageInsightListResult>): Promise<Models.StorageInsightConfigsListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.StorageInsightConfigsListByWorkspaceResponse>;
  }

  /**
   * Lists the storage insight instances within a workspace
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageInsightConfigsListByWorkspaceNextResponse>
   */
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageInsightConfigsListByWorkspaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.StorageInsightListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageInsightListResult>): void;
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageInsightListResult>, callback?: msRest.ServiceCallback<Models.StorageInsightListResult>): Promise<Models.StorageInsightConfigsListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkspaceNextOperationSpec,
      callback) as Promise<Models.StorageInsightConfigsListByWorkspaceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs/{storageInsightName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.storageInsightName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.StorageInsight,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.StorageInsight
    },
    201: {
      bodyMapper: Mappers.StorageInsight
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs/{storageInsightName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.storageInsightName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageInsight
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs/{storageInsightName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.storageInsightName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageInsightListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageInsightListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
