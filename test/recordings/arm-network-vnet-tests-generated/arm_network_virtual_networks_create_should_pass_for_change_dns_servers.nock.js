// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/changeDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0b31c34e-8344-494e-af39-8d8c1c8dccfb',
  'x-ms-correlation-request-id': '0b31c34e-8344-494e-af39-8d8c1c8dccfb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131804Z:0b31c34e-8344-494e-af39-8d8c1c8dccfb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 13:18:03 GMT',
  connection: 'close',
  'content-length': '173' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/changeDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0b31c34e-8344-494e-af39-8d8c1c8dccfb',
  'x-ms-correlation-request-id': '0b31c34e-8344-494e-af39-8d8c1c8dccfb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131804Z:0b31c34e-8344-494e-af39-8d8c1c8dccfb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 13:18:03 GMT',
  connection: 'close',
  'content-length': '173' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"774785f9-ec17-43f9-a522-cb8b75800891\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '666',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'bb61a8b7-4609-46f0-b6bc-743b5f9d0532',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/bb61a8b7-4609-46f0-b6bc-743b5f9d0532?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e705c020-bfd2-4586-99a1-275e26693a2f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131808Z:e705c020-bfd2-4586-99a1-275e26693a2f',
  date: 'Fri, 01 Sep 2017 13:18:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"774785f9-ec17-43f9-a522-cb8b75800891\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '666',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'bb61a8b7-4609-46f0-b6bc-743b5f9d0532',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/bb61a8b7-4609-46f0-b6bc-743b5f9d0532?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e705c020-bfd2-4586-99a1-275e26693a2f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131808Z:e705c020-bfd2-4586-99a1-275e26693a2f',
  date: 'Fri, 01 Sep 2017 13:18:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/bb61a8b7-4609-46f0-b6bc-743b5f9d0532?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8e0823f3-1165-426a-906a-7c8174f3112f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'd2ba5d13-143f-47fc-b0fc-b005b3a873a0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131839Z:d2ba5d13-143f-47fc-b0fc-b005b3a873a0',
  date: 'Fri, 01 Sep 2017 13:18:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/bb61a8b7-4609-46f0-b6bc-743b5f9d0532?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8e0823f3-1165-426a-906a-7c8174f3112f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'd2ba5d13-143f-47fc-b0fc-b005b3a873a0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131839Z:d2ba5d13-143f-47fc-b0fc-b005b3a873a0',
  date: 'Fri, 01 Sep 2017 13:18:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"74823cc0-35f5-468b-9fec-d9d719155816\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '667',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"74823cc0-35f5-468b-9fec-d9d719155816"',
  'x-ms-request-id': '76c9a2d8-d922-47b4-bd62-3452d9f573df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '7d5b110d-d60b-43f8-9566-6dd45a5a24d1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131841Z:7d5b110d-d60b-43f8-9566-6dd45a5a24d1',
  date: 'Fri, 01 Sep 2017 13:18:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"74823cc0-35f5-468b-9fec-d9d719155816\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '667',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"74823cc0-35f5-468b-9fec-d9d719155816"',
  'x-ms-request-id': '76c9a2d8-d922-47b4-bd62-3452d9f573df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '7d5b110d-d60b-43f8-9566-6dd45a5a24d1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131841Z:7d5b110d-d60b-43f8-9566-6dd45a5a24d1',
  date: 'Fri, 01 Sep 2017 13:18:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"74823cc0-35f5-468b-9fec-d9d719155816\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '667',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"74823cc0-35f5-468b-9fec-d9d719155816"',
  'x-ms-request-id': '5f1ac2fc-3c05-461d-b940-056534ab9ed4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '439f633e-531b-40d7-9b53-402d0552f73c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131842Z:439f633e-531b-40d7-9b53-402d0552f73c',
  date: 'Fri, 01 Sep 2017 13:18:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"74823cc0-35f5-468b-9fec-d9d719155816\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '667',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"74823cc0-35f5-468b-9fec-d9d719155816"',
  'x-ms-request-id': '5f1ac2fc-3c05-461d-b940-056534ab9ed4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '439f633e-531b-40d7-9b53-402d0552f73c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131842Z:439f633e-531b-40d7-9b53-402d0552f73c',
  date: 'Fri, 01 Sep 2017 13:18:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01', '*')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"02fe289f-6f56-4d34-bdd9-3cb4ea9f95ad\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'ce0d6a43-2e97-4d7b-89c3-4dd314fb9853',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/ce0d6a43-2e97-4d7b-89c3-4dd314fb9853?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'af6681de-183a-4f99-a836-278b0a50f8cf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131843Z:af6681de-183a-4f99-a836-278b0a50f8cf',
  date: 'Fri, 01 Sep 2017 13:18:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01', '*')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"02fe289f-6f56-4d34-bdd9-3cb4ea9f95ad\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'ce0d6a43-2e97-4d7b-89c3-4dd314fb9853',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/ce0d6a43-2e97-4d7b-89c3-4dd314fb9853?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'af6681de-183a-4f99-a836-278b0a50f8cf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131843Z:af6681de-183a-4f99-a836-278b0a50f8cf',
  date: 'Fri, 01 Sep 2017 13:18:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/ce0d6a43-2e97-4d7b-89c3-4dd314fb9853?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'afd553ab-765a-490b-9c40-fe68cfe2f8f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'a3fc0472-f22d-4d32-9bca-e3202e54aeb9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131915Z:a3fc0472-f22d-4d32-9bca-e3202e54aeb9',
  date: 'Fri, 01 Sep 2017 13:19:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/ce0d6a43-2e97-4d7b-89c3-4dd314fb9853?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'afd553ab-765a-490b-9c40-fe68cfe2f8f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'a3fc0472-f22d-4d32-9bca-e3202e54aeb9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131915Z:a3fc0472-f22d-4d32-9bca-e3202e54aeb9',
  date: 'Fri, 01 Sep 2017 13:19:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"a579d4be-e891-4905-8215-6a2b9fcc9b26\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a579d4be-e891-4905-8215-6a2b9fcc9b26"',
  'x-ms-request-id': '606b4984-08f4-43e2-b0dd-5116f4069ed7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '50385baf-d2fe-4c02-8eaa-f982cab9f91b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131916Z:50385baf-d2fe-4c02-8eaa-f982cab9f91b',
  date: 'Fri, 01 Sep 2017 13:19:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"a579d4be-e891-4905-8215-6a2b9fcc9b26\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a579d4be-e891-4905-8215-6a2b9fcc9b26"',
  'x-ms-request-id': '606b4984-08f4-43e2-b0dd-5116f4069ed7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '50385baf-d2fe-4c02-8eaa-f982cab9f91b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131916Z:50385baf-d2fe-4c02-8eaa-f982cab9f91b',
  date: 'Fri, 01 Sep 2017 13:19:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"a579d4be-e891-4905-8215-6a2b9fcc9b26\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a579d4be-e891-4905-8215-6a2b9fcc9b26"',
  'x-ms-request-id': '29df9371-c3c2-40a2-a538-43f4a0fe0172',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '4f59e045-014a-4b43-a7db-7b3d3c99b8cc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131917Z:4f59e045-014a-4b43-a7db-7b3d3c99b8cc',
  date: 'Fri, 01 Sep 2017 13:19:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"a579d4be-e891-4905-8215-6a2b9fcc9b26\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9286b1ef-3c18-4ca0-9d2f-d1bdf7fb607d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a579d4be-e891-4905-8215-6a2b9fcc9b26"',
  'x-ms-request-id': '29df9371-c3c2-40a2-a538-43f4a0fe0172',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '4f59e045-014a-4b43-a7db-7b3d3c99b8cc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131917Z:4f59e045-014a-4b43-a7db-7b3d3c99b8cc',
  date: 'Fri, 01 Sep 2017 13:19:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/7ac90952-bd35-4fe4-9eca-443b889bb17f?api-version=2017-08-01',
  'retry-after': '10',
  'x-ms-request-id': '7ac90952-bd35-4fe4-9eca-443b889bb17f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/7ac90952-bd35-4fe4-9eca-443b889bb17f?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '471bead4-a17c-4136-b14b-5647543e9727',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131920Z:471bead4-a17c-4136-b14b-5647543e9727',
  date: 'Fri, 01 Sep 2017 13:19:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/7ac90952-bd35-4fe4-9eca-443b889bb17f?api-version=2017-08-01',
  'retry-after': '10',
  'x-ms-request-id': '7ac90952-bd35-4fe4-9eca-443b889bb17f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/7ac90952-bd35-4fe4-9eca-443b889bb17f?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '471bead4-a17c-4136-b14b-5647543e9727',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131920Z:471bead4-a17c-4136-b14b-5647543e9727',
  date: 'Fri, 01 Sep 2017 13:19:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/7ac90952-bd35-4fe4-9eca-443b889bb17f?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '88b46bc9-ce17-4d36-848f-4716266b5350',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0249512e-6c83-4730-b19f-46a556d0bbd9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131951Z:0249512e-6c83-4730-b19f-46a556d0bbd9',
  date: 'Fri, 01 Sep 2017 13:19:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/7ac90952-bd35-4fe4-9eca-443b889bb17f?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '88b46bc9-ce17-4d36-848f-4716266b5350',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0249512e-6c83-4730-b19f-46a556d0bbd9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131951Z:0249512e-6c83-4730-b19f-46a556d0bbd9',
  date: 'Fri, 01 Sep 2017 13:19:51 GMT',
  connection: 'close' });
 return result; }]];