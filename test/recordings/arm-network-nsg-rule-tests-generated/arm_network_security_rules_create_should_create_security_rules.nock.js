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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-08-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '295',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4e6507cd-c423-4941-a0b7-22606ade7106',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '8b74d5f5-939f-4f00-b77a-869fa9cbe8ce',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114507Z:8b74d5f5-939f-4f00-b77a-869fa9cbe8ce',
  date: 'Fri, 01 Sep 2017 11:45:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-08-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '295',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4e6507cd-c423-4941-a0b7-22606ade7106',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '8b74d5f5-939f-4f00-b77a-869fa9cbe8ce',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114507Z:8b74d5f5-939f-4f00-b77a-869fa9cbe8ce',
  date: 'Fri, 01 Sep 2017 11:45:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"securityRuleName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n  \"etag\": \"W/\\\"81877179-352b-46ff-bfab-da005fe2d126\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"description\": \"createdesc\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"1025\",\r\n    \"destinationPortRange\": \"4242\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/16\",\r\n    \"destinationAddressPrefix\": \"11.0.0.0/24\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [],\r\n    \"destinationPortRanges\": [],\r\n    \"sourceAddressPrefixes\": [],\r\n    \"destinationAddressPrefixes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '784',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '42b7e660-6d26-46a9-ba15-94ce183f317f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/42b7e660-6d26-46a9-ba15-94ce183f317f?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'c9b6b126-2693-41d6-bb94-5f2944aa0bf9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114510Z:c9b6b126-2693-41d6-bb94-5f2944aa0bf9',
  date: 'Fri, 01 Sep 2017 11:45:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"securityRuleName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n  \"etag\": \"W/\\\"81877179-352b-46ff-bfab-da005fe2d126\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"description\": \"createdesc\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"1025\",\r\n    \"destinationPortRange\": \"4242\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/16\",\r\n    \"destinationAddressPrefix\": \"11.0.0.0/24\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [],\r\n    \"destinationPortRanges\": [],\r\n    \"sourceAddressPrefixes\": [],\r\n    \"destinationAddressPrefixes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '784',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '42b7e660-6d26-46a9-ba15-94ce183f317f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/42b7e660-6d26-46a9-ba15-94ce183f317f?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'c9b6b126-2693-41d6-bb94-5f2944aa0bf9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114510Z:c9b6b126-2693-41d6-bb94-5f2944aa0bf9',
  date: 'Fri, 01 Sep 2017 11:45:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/42b7e660-6d26-46a9-ba15-94ce183f317f?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9cab6dc3-1a69-4544-9742-83d958f5dd08',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'b0f0177b-3e09-4d07-9ac4-fd093c666cd3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114541Z:b0f0177b-3e09-4d07-9ac4-fd093c666cd3',
  date: 'Fri, 01 Sep 2017 11:45:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/42b7e660-6d26-46a9-ba15-94ce183f317f?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9cab6dc3-1a69-4544-9742-83d958f5dd08',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'b0f0177b-3e09-4d07-9ac4-fd093c666cd3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114541Z:b0f0177b-3e09-4d07-9ac4-fd093c666cd3',
  date: 'Fri, 01 Sep 2017 11:45:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"securityRuleName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n  \"etag\": \"W/\\\"345b571c-3d6e-4a3d-b7f9-a0cab949f747\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"createdesc\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"1025\",\r\n    \"destinationPortRange\": \"4242\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/16\",\r\n    \"destinationAddressPrefix\": \"11.0.0.0/24\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [],\r\n    \"destinationPortRanges\": [],\r\n    \"sourceAddressPrefixes\": [],\r\n    \"destinationAddressPrefixes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '785',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"345b571c-3d6e-4a3d-b7f9-a0cab949f747"',
  'x-ms-request-id': '467e2cf1-bb88-462b-abc4-7abdecad505a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '093f8596-11c1-4dc3-89cf-1676b641b3a9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114542Z:093f8596-11c1-4dc3-89cf-1676b641b3a9',
  date: 'Fri, 01 Sep 2017 11:45:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"securityRuleName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n  \"etag\": \"W/\\\"345b571c-3d6e-4a3d-b7f9-a0cab949f747\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"createdesc\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"1025\",\r\n    \"destinationPortRange\": \"4242\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/16\",\r\n    \"destinationAddressPrefix\": \"11.0.0.0/24\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [],\r\n    \"destinationPortRanges\": [],\r\n    \"sourceAddressPrefixes\": [],\r\n    \"destinationAddressPrefixes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '785',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"345b571c-3d6e-4a3d-b7f9-a0cab949f747"',
  'x-ms-request-id': '467e2cf1-bb88-462b-abc4-7abdecad505a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '093f8596-11c1-4dc3-89cf-1676b641b3a9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114542Z:093f8596-11c1-4dc3-89cf-1676b641b3a9',
  date: 'Fri, 01 Sep 2017 11:45:42 GMT',
  connection: 'close' });
 return result; }]];