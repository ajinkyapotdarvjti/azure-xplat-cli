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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '40edfff2-c396-40cd-8d1b-37c6cc3de64a',
  'x-ms-correlation-request-id': '40edfff2-c396-40cd-8d1b-37c6cc3de64a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083533Z:40edfff2-c396-40cd-8d1b-37c6cc3de64a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 08:35:33 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '40edfff2-c396-40cd-8d1b-37c6cc3de64a',
  'x-ms-correlation-request-id': '40edfff2-c396-40cd-8d1b-37c6cc3de64a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083533Z:40edfff2-c396-40cd-8d1b-37c6cc3de64a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 08:35:33 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"66b317c7-9ca5-4efa-95d0-def6a55171ae\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"9ed00576-2e69-4215-9717-1e7229f5b0a4\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '694ea940-cb83-4413-a5c3-b8fb30e5b494',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/southeastasia/operations/694ea940-cb83-4413-a5c3-b8fb30e5b494?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'f02f82b4-38f7-4ed2-9c63-246d4ea0d519',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083538Z:f02f82b4-38f7-4ed2-9c63-246d4ea0d519',
  date: 'Fri, 01 Sep 2017 08:35:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"66b317c7-9ca5-4efa-95d0-def6a55171ae\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"9ed00576-2e69-4215-9717-1e7229f5b0a4\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '694ea940-cb83-4413-a5c3-b8fb30e5b494',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/southeastasia/operations/694ea940-cb83-4413-a5c3-b8fb30e5b494?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'f02f82b4-38f7-4ed2-9c63-246d4ea0d519',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083538Z:f02f82b4-38f7-4ed2-9c63-246d4ea0d519',
  date: 'Fri, 01 Sep 2017 08:35:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/southeastasia/operations/694ea940-cb83-4413-a5c3-b8fb30e5b494?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b595934f-afba-4582-8b40-9ecc0c9d167a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2fdd6896-ec9b-4504-8a52-c2ee66e79e1c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083609Z:2fdd6896-ec9b-4504-8a52-c2ee66e79e1c',
  date: 'Fri, 01 Sep 2017 08:36:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/southeastasia/operations/694ea940-cb83-4413-a5c3-b8fb30e5b494?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b595934f-afba-4582-8b40-9ecc0c9d167a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2fdd6896-ec9b-4504-8a52-c2ee66e79e1c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083609Z:2fdd6896-ec9b-4504-8a52-c2ee66e79e1c',
  date: 'Fri, 01 Sep 2017 08:36:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"ad35c9e7-b067-4ea0-b5a5-aef2f997068f\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9ed00576-2e69-4215-9717-1e7229f5b0a4\",\r\n    \"ipAddress\": \"13.76.172.155\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ad35c9e7-b067-4ea0-b5a5-aef2f997068f"',
  'x-ms-request-id': 'a8b78d75-6ed3-4709-a40c-2e3f82cf937e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '7231f8ad-6fa0-4ca8-8bf2-c87b7c7a0952',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083610Z:7231f8ad-6fa0-4ca8-8bf2-c87b7c7a0952',
  date: 'Fri, 01 Sep 2017 08:36:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"ad35c9e7-b067-4ea0-b5a5-aef2f997068f\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9ed00576-2e69-4215-9717-1e7229f5b0a4\",\r\n    \"ipAddress\": \"13.76.172.155\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ad35c9e7-b067-4ea0-b5a5-aef2f997068f"',
  'x-ms-request-id': 'a8b78d75-6ed3-4709-a40c-2e3f82cf937e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '7231f8ad-6fa0-4ca8-8bf2-c87b7c7a0952',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083610Z:7231f8ad-6fa0-4ca8-8bf2-c87b7c7a0952',
  date: 'Fri, 01 Sep 2017 08:36:10 GMT',
  connection: 'close' });
 return result; }]];