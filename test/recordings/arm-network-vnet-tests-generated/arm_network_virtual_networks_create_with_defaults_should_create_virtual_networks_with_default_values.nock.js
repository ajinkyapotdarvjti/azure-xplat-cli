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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/virtualNetworksDefaultName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '79aea9d0-e68c-48ea-9b0c-8a543fca5b09',
  'x-ms-correlation-request-id': '79aea9d0-e68c-48ea-9b0c-8a543fca5b09',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131520Z:79aea9d0-e68c-48ea-9b0c-8a543fca5b09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 13:15:19 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/virtualNetworksDefaultName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '79aea9d0-e68c-48ea-9b0c-8a543fca5b09',
  'x-ms-correlation-request-id': '79aea9d0-e68c-48ea-9b0c-8a543fca5b09',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131520Z:79aea9d0-e68c-48ea-9b0c-8a543fca5b09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 13:15:19 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"61d9dc17-90d5-4d48-b2c9-82bde06506bc\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"5e462b6b-2eeb-4368-b9bd-c7b64fe9caa7\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '678',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '54237743-1adb-43f3-8b34-dfc9a730cf7b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/54237743-1adb-43f3-8b34-dfc9a730cf7b?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ac5c1c3c-8cb4-4be9-a6a2-fc7db21530b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131524Z:ac5c1c3c-8cb4-4be9-a6a2-fc7db21530b6',
  date: 'Fri, 01 Sep 2017 13:15:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"61d9dc17-90d5-4d48-b2c9-82bde06506bc\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"5e462b6b-2eeb-4368-b9bd-c7b64fe9caa7\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '678',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '54237743-1adb-43f3-8b34-dfc9a730cf7b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/54237743-1adb-43f3-8b34-dfc9a730cf7b?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ac5c1c3c-8cb4-4be9-a6a2-fc7db21530b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131524Z:ac5c1c3c-8cb4-4be9-a6a2-fc7db21530b6',
  date: 'Fri, 01 Sep 2017 13:15:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/54237743-1adb-43f3-8b34-dfc9a730cf7b?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd771ddec-6c4a-4180-8f93-b075c783fdff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '695e74ff-cb76-49c8-ad07-17a842c624cb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131555Z:695e74ff-cb76-49c8-ad07-17a842c624cb',
  date: 'Fri, 01 Sep 2017 13:15:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/54237743-1adb-43f3-8b34-dfc9a730cf7b?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd771ddec-6c4a-4180-8f93-b075c783fdff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '695e74ff-cb76-49c8-ad07-17a842c624cb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131555Z:695e74ff-cb76-49c8-ad07-17a842c624cb',
  date: 'Fri, 01 Sep 2017 13:15:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"45958c3b-1103-46e5-a239-5800fed27041\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5e462b6b-2eeb-4368-b9bd-c7b64fe9caa7\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"45958c3b-1103-46e5-a239-5800fed27041"',
  'x-ms-request-id': '8c25cc39-c8f5-400a-ade6-c3cc523de648',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'aa450884-f46e-47c3-86fb-37150c04b1bc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131556Z:aa450884-f46e-47c3-86fb-37150c04b1bc',
  date: 'Fri, 01 Sep 2017 13:15:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"45958c3b-1103-46e5-a239-5800fed27041\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5e462b6b-2eeb-4368-b9bd-c7b64fe9caa7\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"45958c3b-1103-46e5-a239-5800fed27041"',
  'x-ms-request-id': '8c25cc39-c8f5-400a-ade6-c3cc523de648',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'aa450884-f46e-47c3-86fb-37150c04b1bc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131556Z:aa450884-f46e-47c3-86fb-37150c04b1bc',
  date: 'Fri, 01 Sep 2017 13:15:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"45958c3b-1103-46e5-a239-5800fed27041\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5e462b6b-2eeb-4368-b9bd-c7b64fe9caa7\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"45958c3b-1103-46e5-a239-5800fed27041"',
  'x-ms-request-id': 'e45bbe09-fbf7-4d25-92b4-2b96e930c3c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '674213f1-648d-4648-a781-d12f71df18f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131558Z:674213f1-648d-4648-a781-d12f71df18f9',
  date: 'Fri, 01 Sep 2017 13:15:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"45958c3b-1103-46e5-a239-5800fed27041\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5e462b6b-2eeb-4368-b9bd-c7b64fe9caa7\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"45958c3b-1103-46e5-a239-5800fed27041"',
  'x-ms-request-id': 'e45bbe09-fbf7-4d25-92b4-2b96e930c3c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '674213f1-648d-4648-a781-d12f71df18f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131558Z:674213f1-648d-4648-a781-d12f71df18f9',
  date: 'Fri, 01 Sep 2017 13:15:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/ff8a0803-a535-450e-b6f0-385ae8a8fa81?api-version=2017-08-01',
  'retry-after': '10',
  'x-ms-request-id': 'ff8a0803-a535-450e-b6f0-385ae8a8fa81',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/ff8a0803-a535-450e-b6f0-385ae8a8fa81?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0a54b2ce-9da1-486b-be91-a29c1c170d72',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131600Z:0a54b2ce-9da1-486b-be91-a29c1c170d72',
  date: 'Fri, 01 Sep 2017 13:15:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/ff8a0803-a535-450e-b6f0-385ae8a8fa81?api-version=2017-08-01',
  'retry-after': '10',
  'x-ms-request-id': 'ff8a0803-a535-450e-b6f0-385ae8a8fa81',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/ff8a0803-a535-450e-b6f0-385ae8a8fa81?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0a54b2ce-9da1-486b-be91-a29c1c170d72',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131600Z:0a54b2ce-9da1-486b-be91-a29c1c170d72',
  date: 'Fri, 01 Sep 2017 13:15:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/ff8a0803-a535-450e-b6f0-385ae8a8fa81?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9729c852-3c96-4b9b-ad6c-489dc06e6bf0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c2025882-f832-4c37-a03e-7016c1a8fe5a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131632Z:c2025882-f832-4c37-a03e-7016c1a8fe5a',
  date: 'Fri, 01 Sep 2017 13:16:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/ff8a0803-a535-450e-b6f0-385ae8a8fa81?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9729c852-3c96-4b9b-ad6c-489dc06e6bf0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c2025882-f832-4c37-a03e-7016c1a8fe5a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T131632Z:c2025882-f832-4c37-a03e-7016c1a8fe5a',
  date: 'Fri, 01 Sep 2017 13:16:31 GMT',
  connection: 'close' });
 return result; }]];