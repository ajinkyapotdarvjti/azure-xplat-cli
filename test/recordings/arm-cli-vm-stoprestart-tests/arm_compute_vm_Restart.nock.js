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
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMStart/providers/Microsoft.Compute/virtualMachines/xplatvmStSp?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"sourceImage\": {\r\n        \"id\": \"/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/images/ad072bd3082149369c449ba5832401ae__Windows-Server-RDSHwO365P-on-Windows-Server-2012-R2-20150128-0010\"\r\n      },\r\n      \"destinationVhdsContainer\": \"https://xplattstoragestsp2079.blob.core.windows.net/xplatteststoragecntstsp/\",\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"xplatvmStSp-os-20150417-074644-828040\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplattstoragestsp2079.blob.core.windows.net/xplatteststoragecntstsp/xplatvmStSp-os-20150417-074644-828040.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmStSp\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMStart/providers/Microsoft.Network/networkInterfaces/xplattestnicStSp\"}]},\r\n    \"provisioningState\": \"updating\"\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMStart/providers/Microsoft.Compute/virtualMachines/xplatvmStSp\",\r\n  \"name\": \"xplatvmStSp\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1553',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8e700741-beed-44dc-8a5f-d2faba758822',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31914',
  'x-ms-correlation-request-id': '86075e1b-ab4e-4e94-92bc-1021ad973596',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T194831Z:86075e1b-ab4e-4e94-92bc-1021ad973596',
  date: 'Fri, 17 Apr 2015 19:48:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMStart/providers/Microsoft.Compute/virtualMachines/xplatvmStSp?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"sourceImage\": {\r\n        \"id\": \"/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/images/ad072bd3082149369c449ba5832401ae__Windows-Server-RDSHwO365P-on-Windows-Server-2012-R2-20150128-0010\"\r\n      },\r\n      \"destinationVhdsContainer\": \"https://xplattstoragestsp2079.blob.core.windows.net/xplatteststoragecntstsp/\",\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"xplatvmStSp-os-20150417-074644-828040\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplattstoragestsp2079.blob.core.windows.net/xplatteststoragecntstsp/xplatvmStSp-os-20150417-074644-828040.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmStSp\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMStart/providers/Microsoft.Network/networkInterfaces/xplattestnicStSp\"}]},\r\n    \"provisioningState\": \"updating\"\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMStart/providers/Microsoft.Compute/virtualMachines/xplatvmStSp\",\r\n  \"name\": \"xplatvmStSp\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1553',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8e700741-beed-44dc-8a5f-d2faba758822',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31914',
  'x-ms-correlation-request-id': '86075e1b-ab4e-4e94-92bc-1021ad973596',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T194831Z:86075e1b-ab4e-4e94-92bc-1021ad973596',
  date: 'Fri, 17 Apr 2015 19:48:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMStart/providers/Microsoft.Compute/virtualMachines/xplatvmStSp/restart?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/fe2063f3-1888-4e1c-905d-1489ea624e29?monitor=true&api-version=2014-12-01-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/fe2063f3-1888-4e1c-905d-1489ea624e29?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fe2063f3-1888-4e1c-905d-1489ea624e29',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1161',
  'x-ms-correlation-request-id': '013e4613-b96f-4b2d-9a1a-3b200097e14f',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T194832Z:013e4613-b96f-4b2d-9a1a-3b200097e14f',
  date: 'Fri, 17 Apr 2015 19:48:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMStart/providers/Microsoft.Compute/virtualMachines/xplatvmStSp/restart?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/fe2063f3-1888-4e1c-905d-1489ea624e29?monitor=true&api-version=2014-12-01-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/fe2063f3-1888-4e1c-905d-1489ea624e29?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fe2063f3-1888-4e1c-905d-1489ea624e29',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1161',
  'x-ms-correlation-request-id': '013e4613-b96f-4b2d-9a1a-3b200097e14f',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T194832Z:013e4613-b96f-4b2d-9a1a-3b200097e14f',
  date: 'Fri, 17 Apr 2015 19:48:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/fe2063f3-1888-4e1c-905d-1489ea624e29?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"id\": \"fe2063f3-1888-4e1c-905d-1489ea624e29\",\r\n  \"status\": \"succeeded\",\r\n  \"startTime\": \"2015-04-17T19:48:32.8756036+00:00\",\r\n  \"endTime\": \"2015-04-17T19:48:33.5787322+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '182',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6d46c0f9-e9c5-4ea4-aa37-0c5eb401221b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31887',
  'x-ms-correlation-request-id': '7f86fec8-4bf1-437c-a98c-049c2ecdf511',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T194905Z:7f86fec8-4bf1-437c-a98c-049c2ecdf511',
  date: 'Fri, 17 Apr 2015 19:49:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/fe2063f3-1888-4e1c-905d-1489ea624e29?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"id\": \"fe2063f3-1888-4e1c-905d-1489ea624e29\",\r\n  \"status\": \"succeeded\",\r\n  \"startTime\": \"2015-04-17T19:48:32.8756036+00:00\",\r\n  \"endTime\": \"2015-04-17T19:48:33.5787322+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '182',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6d46c0f9-e9c5-4ea4-aa37-0c5eb401221b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31887',
  'x-ms-correlation-request-id': '7f86fec8-4bf1-437c-a98c-049c2ecdf511',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T194905Z:7f86fec8-4bf1-437c-a98c-049c2ecdf511',
  date: 'Fri, 17 Apr 2015 19:49:05 GMT',
  connection: 'close' });
 return result; }]];
