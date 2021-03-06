// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"3807e1c8-ec4b-4e06-9e87-e9ae13e6d0ec\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 123456,\r\n    \"totalBytesPerSession\": 1234567,\r\n    \"timeLimitInSeconds\": 17000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"D:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      },\r\n      {\r\n        \"protocol\": \"UDP\",\r\n        \"localIPAddress\": \"\",\r\n        \"localPort\": \"\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1092',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3807e1c8-ec4b-4e06-9e87-e9ae13e6d0ec"',
  'x-ms-request-id': '8c63452e-75a7-4624-b720-6d4be038aab3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'a9d1b489-d6ef-4440-961d-a182c4f8fbaf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T075444Z:a9d1b489-d6ef-4440-961d-a182c4f8fbaf',
  date: 'Fri, 14 Jul 2017 07:54:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"3807e1c8-ec4b-4e06-9e87-e9ae13e6d0ec\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 123456,\r\n    \"totalBytesPerSession\": 1234567,\r\n    \"timeLimitInSeconds\": 17000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"D:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      },\r\n      {\r\n        \"protocol\": \"UDP\",\r\n        \"localIPAddress\": \"\",\r\n        \"localPort\": \"\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1092',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3807e1c8-ec4b-4e06-9e87-e9ae13e6d0ec"',
  'x-ms-request-id': '8c63452e-75a7-4624-b720-6d4be038aab3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'a9d1b489-d6ef-4440-961d-a182c4f8fbaf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T075444Z:a9d1b489-d6ef-4440-961d-a182c4f8fbaf',
  date: 'Fri, 14 Jul 2017 07:54:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/46acd1ae-d218-42ad-860a-d08550aea94b?api-version=2017-08-01',
  'retry-after': '10',
  'x-ms-request-id': '46acd1ae-d218-42ad-860a-d08550aea94b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/46acd1ae-d218-42ad-860a-d08550aea94b?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ca60435b-7b3f-45ce-bcb2-0938de11912f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T075446Z:ca60435b-7b3f-45ce-bcb2-0938de11912f',
  date: 'Fri, 14 Jul 2017 07:54:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/46acd1ae-d218-42ad-860a-d08550aea94b?api-version=2017-08-01',
  'retry-after': '10',
  'x-ms-request-id': '46acd1ae-d218-42ad-860a-d08550aea94b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/46acd1ae-d218-42ad-860a-d08550aea94b?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ca60435b-7b3f-45ce-bcb2-0938de11912f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T075446Z:ca60435b-7b3f-45ce-bcb2-0938de11912f',
  date: 'Fri, 14 Jul 2017 07:54:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/46acd1ae-d218-42ad-860a-d08550aea94b?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c5c78aa5-5945-42e7-b9d8-37b0f5737dd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '09c74c05-290b-4848-a282-e854e4525e05',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T075517Z:09c74c05-290b-4848-a282-e854e4525e05',
  date: 'Fri, 14 Jul 2017 07:55:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/46acd1ae-d218-42ad-860a-d08550aea94b?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c5c78aa5-5945-42e7-b9d8-37b0f5737dd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '09c74c05-290b-4848-a282-e854e4525e05',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T075517Z:09c74c05-290b-4848-a282-e854e4525e05',
  date: 'Fri, 14 Jul 2017 07:55:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-08-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '295',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e622e372-6f94-42ef-bd73-1fc26da96a97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '91b788d3-b9c9-43c6-87cd-ff05f7dafbd5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T075518Z:91b788d3-b9c9-43c6-87cd-ff05f7dafbd5',
  date: 'Fri, 14 Jul 2017 07:55:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-08-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '295',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e622e372-6f94-42ef-bd73-1fc26da96a97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '91b788d3-b9c9-43c6-87cd-ff05f7dafbd5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T075518Z:91b788d3-b9c9-43c6-87cd-ff05f7dafbd5',
  date: 'Fri, 14 Jul 2017 07:55:18 GMT',
  connection: 'close' });
 return result; }]];
