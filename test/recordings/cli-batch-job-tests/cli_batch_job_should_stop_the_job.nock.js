// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .post('/jobs/xplatJob/terminate?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 12 Sep 2016 23:29:02 GMT',
  etag: '0x8D3DB6494BD8A37',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd4303e49-a765-4eb4-987f-c68defed3638',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '7052e349-a9fc-49d1-91df-b12e3febc5af',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJob/terminate',
  date: 'Mon, 12 Sep 2016 23:29:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .post('/jobs/xplatJob/terminate?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 12 Sep 2016 23:29:02 GMT',
  etag: '0x8D3DB6494BD8A37',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd4303e49-a765-4eb4-987f-c68defed3638',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '7052e349-a9fc-49d1-91df-b12e3febc5af',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJob/terminate',
  date: 'Mon, 12 Sep 2016 23:29:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJob?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"xplatJob\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJob\",\"eTag\":\"0x8D3DB6494BD8A37\",\"lastModified\":\"2016-09-12T23:29:02.8034103Z\",\"creationTime\":\"2016-09-12T23:28:53.8441333Z\",\"state\":\"terminating\",\"stateTransitionTime\":\"2016-09-12T23:29:02.8034103Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-09-12T23:28:58.9010582Z\",\"priority\":5,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n  },\"jobManagerTask\":{\r\n    \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"name1\",\"value\":\"value1\"\r\n      },{\r\n        \"name\":\"name2\",\"value\":\"value2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n    },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n  },\"jobPreparationTask\":{\r\n    \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n      },{\r\n        \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n    },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n  },\"jobReleaseTask\":{\r\n    \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n      },{\r\n        \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n      }\r\n    ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n  },\"commonEnvironmentSettings\":[\r\n    {\r\n      \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n    },{\r\n      \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n    }\r\n  ],\"poolInfo\":{\r\n    \"poolId\":\"xplatTestPool\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta3\",\"value\":\"value3\"\r\n    },{\r\n      \"name\":\"meta4\",\"value\":\"value4\"\r\n    }\r\n  ],\"executionInfo\":{\r\n    \"startTime\":\"2016-09-12T23:28:53.8977669Z\",\"poolId\":\"xplatTestPool\",\"terminateReason\":\"UserTerminate\"\r\n  },\"onAllTasksComplete\":\"noaction\",\"onTaskFailure\":\"noaction\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:29:02 GMT',
  etag: '0x8D3DB6494BD8A37',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6e7ae27f-b233-45e5-b3a9-2a99f5d7aa0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '8cf17f68-d50e-4bbf-9f6d-f907956ec2b7',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:29:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJob?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"xplatJob\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJob\",\"eTag\":\"0x8D3DB6494BD8A37\",\"lastModified\":\"2016-09-12T23:29:02.8034103Z\",\"creationTime\":\"2016-09-12T23:28:53.8441333Z\",\"state\":\"terminating\",\"stateTransitionTime\":\"2016-09-12T23:29:02.8034103Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-09-12T23:28:58.9010582Z\",\"priority\":5,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n  },\"jobManagerTask\":{\r\n    \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"name1\",\"value\":\"value1\"\r\n      },{\r\n        \"name\":\"name2\",\"value\":\"value2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n    },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n  },\"jobPreparationTask\":{\r\n    \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n      },{\r\n        \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n    },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n  },\"jobReleaseTask\":{\r\n    \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n      },{\r\n        \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n      }\r\n    ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n  },\"commonEnvironmentSettings\":[\r\n    {\r\n      \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n    },{\r\n      \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n    }\r\n  ],\"poolInfo\":{\r\n    \"poolId\":\"xplatTestPool\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta3\",\"value\":\"value3\"\r\n    },{\r\n      \"name\":\"meta4\",\"value\":\"value4\"\r\n    }\r\n  ],\"executionInfo\":{\r\n    \"startTime\":\"2016-09-12T23:28:53.8977669Z\",\"poolId\":\"xplatTestPool\",\"terminateReason\":\"UserTerminate\"\r\n  },\"onAllTasksComplete\":\"noaction\",\"onTaskFailure\":\"noaction\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:29:02 GMT',
  etag: '0x8D3DB6494BD8A37',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6e7ae27f-b233-45e5-b3a9-2a99f5d7aa0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '8cf17f68-d50e-4bbf-9f6d-f907956ec2b7',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:29:03 GMT',
  connection: 'close' });
 return result; }]];