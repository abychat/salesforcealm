@isTest
public with sharing class SampleDataControllerTest {
    
    static testMethod void testGetPropertyList() {
        Test.startTest();
        SampleDataController.importSampleData();
        Test.stopTest();
        List<Property__c> properties = [SELECT Id from Property__c];
        System.assertEquals(18, properties.size());
    }
}
