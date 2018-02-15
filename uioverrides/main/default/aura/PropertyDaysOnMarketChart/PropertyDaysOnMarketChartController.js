({
	recordUpdated : function(component, event, helper) {
                console.log('Inside Record Updated');
		var changeType = event.getParams().changeType;
        if (changeType === "LOADED" || changeType === "CHANGED") {
			helper.showDaysOnMarket(component);
        }
	},

   	recordChangeHandler : function(component, event) {
        var id = event.getParam("recordId");
        component.set("v.recordId", id);
        var service = component.find("service");
        service.reloadRecord();
	}

})