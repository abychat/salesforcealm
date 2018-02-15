({
	showDaysOnMarket : function(component) {
        var property = component.get("v.property");
        console.log(component.get("v.property"));
        console.log(property);
        var daysOnMarket = property.Days_On_Market__c;
        var status = "green";
        if (daysOnMarket > 60) {
            status = 'red';
        } else if (daysOnMarket > 30) {
            status = 'orange'
        }
        console.log(property.Date_Listed__c);
        console.log(new Date(property.Date_Listed__c).toLocaleString('en-US', {month: 'short', year: 'numeric', day: 'numeric'}));
        component.set("v.status", status);
        component.set("v.formattedDateListed", new Date(property.Date_Listed__c).toLocaleString('en-US', {month: 'short', year: 'numeric', day: 'numeric'}));
	}
})