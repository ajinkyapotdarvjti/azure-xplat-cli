// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westeurope';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualnetworkgateways/xplatTestvpngateway?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestvpngateway\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway\",\r\n  \"etag\": \"W/\\\"b995af96-78b6-48dc-9c19-a50aeadb7900\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"fe1672a1-612e-4716-a6ac-0c31dbcf168e\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"b995af96-78b6-48dc-9c19-a50aeadb7900\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.11\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/publicIPAddresses/xplatTestIpGateway\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworks/xplatTestVnetGateway/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 0\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1686',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ad8f31a-3e92-4c72-96be-5cc736658b5e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14933',
  'x-ms-correlation-request-id': '7c1441d7-3acc-46e8-a5ea-c76f40cf3325',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T095939Z:7c1441d7-3acc-46e8-a5ea-c76f40cf3325',
  date: 'Wed, 30 Dec 2015 09:59:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualnetworkgateways/xplatTestvpngateway?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestvpngateway\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway\",\r\n  \"etag\": \"W/\\\"b995af96-78b6-48dc-9c19-a50aeadb7900\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"fe1672a1-612e-4716-a6ac-0c31dbcf168e\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"b995af96-78b6-48dc-9c19-a50aeadb7900\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.11\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/publicIPAddresses/xplatTestIpGateway\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworks/xplatTestVnetGateway/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 0\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1686',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ad8f31a-3e92-4c72-96be-5cc736658b5e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14933',
  'x-ms-correlation-request-id': '7c1441d7-3acc-46e8-a5ea-c76f40cf3325',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T095939Z:7c1441d7-3acc-46e8-a5ea-c76f40cf3325',
  date: 'Wed, 30 Dec 2015 09:59:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualnetworkgateways/xplatTestvpngateway?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestvpngateway\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway\",\r\n  \"etag\": \"W/\\\"b995af96-78b6-48dc-9c19-a50aeadb7900\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"fe1672a1-612e-4716-a6ac-0c31dbcf168e\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"b995af96-78b6-48dc-9c19-a50aeadb7900\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.11\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/publicIPAddresses/xplatTestIpGateway\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworks/xplatTestVnetGateway/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 0\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1809',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'f7f112da-e392-4f21-bc79-e5ff69109714',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westeurope/operations/f7f112da-e392-4f21-bc79-e5ff69109714?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '6247ccae-3165-4e02-a095-b1e8f21a8b82',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T095941Z:6247ccae-3165-4e02-a095-b1e8f21a8b82',
  date: 'Wed, 30 Dec 2015 09:59:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualnetworkgateways/xplatTestvpngateway?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestvpngateway\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway\",\r\n  \"etag\": \"W/\\\"b995af96-78b6-48dc-9c19-a50aeadb7900\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"fe1672a1-612e-4716-a6ac-0c31dbcf168e\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"b995af96-78b6-48dc-9c19-a50aeadb7900\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.11\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/publicIPAddresses/xplatTestIpGateway\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworks/xplatTestVnetGateway/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 0\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1809',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'f7f112da-e392-4f21-bc79-e5ff69109714',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westeurope/operations/f7f112da-e392-4f21-bc79-e5ff69109714?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '6247ccae-3165-4e02-a095-b1e8f21a8b82',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T095941Z:6247ccae-3165-4e02-a095-b1e8f21a8b82',
  date: 'Wed, 30 Dec 2015 09:59:41 GMT',
  connection: 'close' });
 return result; }]];
