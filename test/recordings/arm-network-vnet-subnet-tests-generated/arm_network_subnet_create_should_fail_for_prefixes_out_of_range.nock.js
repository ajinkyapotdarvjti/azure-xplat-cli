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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName?api-version=2017-08-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '285',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc8aeb79-d3e0-4fce-91d1-81bb2669923b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'f1868132-754e-413c-b9ee-51195ab0edd5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130726Z:f1868132-754e-413c-b9ee-51195ab0edd5',
  date: 'Fri, 01 Sep 2017 13:07:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName?api-version=2017-08-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '285',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc8aeb79-d3e0-4fce-91d1-81bb2669923b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'f1868132-754e-413c-b9ee-51195ab0edd5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130726Z:f1868132-754e-413c-b9ee-51195ab0edd5',
  date: 'Fri, 01 Sep 2017 13:07:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"networkSecurityGroupName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\",\r\n  \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"965c66a6-f588-4bc6-b5a9-68c8f01201c9\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6200',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2d8769d0-b121-43ba-a38e-571dbefc1395"',
  'x-ms-request-id': '8454311a-1238-493b-99a6-768322274ead',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e51ef3d9-449d-4c68-93e0-472dae16b917',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130728Z:e51ef3d9-449d-4c68-93e0-472dae16b917',
  date: 'Fri, 01 Sep 2017 13:07:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"networkSecurityGroupName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\",\r\n  \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"965c66a6-f588-4bc6-b5a9-68c8f01201c9\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"2d8769d0-b121-43ba-a38e-571dbefc1395\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6200',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2d8769d0-b121-43ba-a38e-571dbefc1395"',
  'x-ms-request-id': '8454311a-1238-493b-99a6-768322274ead',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e51ef3d9-449d-4c68-93e0-472dae16b917',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130728Z:e51ef3d9-449d-4c68-93e0-472dae16b917',
  date: 'Fri, 01 Sep 2017 13:07:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"8077a255-f7cf-4bee-9410-a1f7f07744d8\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"33287236-59b5-474a-8e75-20cc78b60ab3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '453',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8077a255-f7cf-4bee-9410-a1f7f07744d8"',
  'x-ms-request-id': '1c227d03-17d4-4215-a048-02ea0aca89bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '252970e2-81e5-4989-a9d5-6682a6a5460a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130729Z:252970e2-81e5-4989-a9d5-6682a6a5460a',
  date: 'Fri, 01 Sep 2017 13:07:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"8077a255-f7cf-4bee-9410-a1f7f07744d8\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"33287236-59b5-474a-8e75-20cc78b60ab3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '453',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8077a255-f7cf-4bee-9410-a1f7f07744d8"',
  'x-ms-request-id': '1c227d03-17d4-4215-a048-02ea0aca89bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '252970e2-81e5-4989-a9d5-6682a6a5460a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130729Z:252970e2-81e5-4989-a9d5-6682a6a5460a',
  date: 'Fri, 01 Sep 2017 13:07:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName?api-version=2017-08-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"NetcfgInvalidSubnet\",\r\n    \"message\": \"Subnet 'prefixesOutOfRangeName' is not valid in virtual network 'virtualNetworkName'.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a8246c09-d8ab-4ff7-ae1c-946fca0d3184',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5a784161-94ad-43f2-8479-8c0cc9057ec6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130730Z:5a784161-94ad-43f2-8479-8c0cc9057ec6',
  date: 'Fri, 01 Sep 2017 13:07:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName?api-version=2017-08-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"NetcfgInvalidSubnet\",\r\n    \"message\": \"Subnet 'prefixesOutOfRangeName' is not valid in virtual network 'virtualNetworkName'.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a8246c09-d8ab-4ff7-ae1c-946fca0d3184',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5a784161-94ad-43f2-8479-8c0cc9057ec6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130730Z:5a784161-94ad-43f2-8479-8c0cc9057ec6',
  date: 'Fri, 01 Sep 2017 13:07:29 GMT',
  connection: 'close' });
 return result; }]];