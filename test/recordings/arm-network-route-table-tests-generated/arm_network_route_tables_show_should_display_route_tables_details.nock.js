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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"c7cbcd2d-9ab9-4470-9178-446c297c35fb\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6eabcbfa-27d2-43a0-92f8-88ba60e6f4c0\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c7cbcd2d-9ab9-4470-9178-446c297c35fb"',
  'x-ms-request-id': 'a54c5cea-a9de-43e3-8ba1-5196d8fb1d17',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '4669ba99-985d-4637-8445-a83df98e7bd5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T101719Z:4669ba99-985d-4637-8445-a83df98e7bd5',
  date: 'Fri, 01 Sep 2017 10:17:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"c7cbcd2d-9ab9-4470-9178-446c297c35fb\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6eabcbfa-27d2-43a0-92f8-88ba60e6f4c0\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c7cbcd2d-9ab9-4470-9178-446c297c35fb"',
  'x-ms-request-id': 'a54c5cea-a9de-43e3-8ba1-5196d8fb1d17',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '4669ba99-985d-4637-8445-a83df98e7bd5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T101719Z:4669ba99-985d-4637-8445-a83df98e7bd5',
  date: 'Fri, 01 Sep 2017 10:17:18 GMT',
  connection: 'close' });
 return result; }]];