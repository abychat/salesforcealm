({
    doInit: function(component, event, helper) {
        helper.getProperties(component);
    },

    onRangeChange: function(component, event, helper) {
        component.set("v.minPrice", event.getParam("minValue"));
        component.set("v.maxPrice", event.getParam("maxValue"));
        helper.getProperties(component);
	},
    
    onPagePrevious: function(component, event, helper) {
		var page = component.get("v.page") || 1;
        page = page - 1;
        helper.getProperties(component, page);
	},
    
	onPageNext: function(component, event, helper) {
		var page = component.get("v.page") || 1;
        page = page + 1;
        helper.getProperties(component, page);
	}

})