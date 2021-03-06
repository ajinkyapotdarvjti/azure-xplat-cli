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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"localNetworkGatewayName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName\",\r\n  \"etag\": \"W/\\\"db3d85c8-35e1-4783-a07f-62b007d7ecbc\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"91820956-17db-456a-bdb4-c390d9d25c23\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '731',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"db3d85c8-35e1-4783-a07f-62b007d7ecbc"',
  'x-ms-request-id': 'd7525313-bc37-4d22-b88b-13508793b5ca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '6fb0a8be-362b-4a95-95dd-fe44ede02626',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T094323Z:6fb0a8be-362b-4a95-95dd-fe44ede02626',
  date: 'Fri, 01 Sep 2017 09:43:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"localNetworkGatewayName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName\",\r\n  \"etag\": \"W/\\\"db3d85c8-35e1-4783-a07f-62b007d7ecbc\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"91820956-17db-456a-bdb4-c390d9d25c23\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '731',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"db3d85c8-35e1-4783-a07f-62b007d7ecbc"',
  'x-ms-request-id': 'd7525313-bc37-4d22-b88b-13508793b5ca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '6fb0a8be-362b-4a95-95dd-fe44ede02626',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T094323Z:6fb0a8be-362b-4a95-95dd-fe44ede02626',
  date: 'Fri, 01 Sep 2017 09:43:22 GMT',
  connection: 'close' });
 return result; }]];