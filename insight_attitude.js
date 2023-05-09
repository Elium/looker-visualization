const visObject = {
 /**
  * Configuration options for your visualization. In Looker, these show up in the vis editor
  * panel but here, you can just manually set your default values in the code.
  **/
  options: {
    first_option: {
    	type: "string",
      label: "My First Option",
      default: "Default Value"
    },
    second_option: {
    	type: "number",
      label: "My Second Option",
      default: 42
    }
  },
 
 /**
  * The create function gets called when the visualization is mounted but before any
  * data is passed to it.
  **/
	create: function(element, config){
		element.innerHTML = "<h1>Ready to render!</h1>";
	},

 /**
  * UpdateAsync is the function that gets called (potentially) multiple times. It receives
  * the data and should update the visualization with the new data.
  **/
	updateAsync: function(data, element, config, queryResponse, details, doneRendering){
 
       var formattedData = [];
       
       data.forEach(function(d) {

        var question = d['medialand_groupby_attitude.category_1'].value;
        var answer = d['medialand_groupby_attitude.category_2'].value;
        var value = d['medialand_groupby_attitude.pourcentage'].value;

       formattedData.push(`<div style="display: flex; align-items: center!important; justify-content: space-between!important; height: 50px; font-size:14px; font-family: roboto,sans-serif; padding: 8px 0;border-bottom: 1px solid #E0E0E0">
   <div style="width: 66%">${question}</div>
   <div style="width: 30%; display: flex; flex-direction: column;
   align-items: center!important;
   justify-content: center;">
     <div style="margin-bottom: 6px; color: #578DDA;  text-transform: uppercase; font-weight: bold
     ">${answer} - ${value}%</div>
     <div style="background: #D9D9D9; width: 100%;height: 5px">
       <div style="width: ${value}%; height: 100%; background: #578DDA"></div>
     </div>
   </div>
 </div>`);
     });
       element.innerHTML = formattedData.join("");
    
     }
 };

looker.plugins.visualizations.add(visObject);
