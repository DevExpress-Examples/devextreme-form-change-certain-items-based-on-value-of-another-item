$(function(){
    var getPosition = function() {
       return (form ? form.option("formData") : employee).Position;
    }    
    var form = $("#form").dxForm({
        colCount: 2,
        formData: employee,
        customizeItem: function(item) {
          if (item.dataField === "Address") {  
            item.visible = getPosition() !== "CEO";
          }
          if (item.dataField === "HireDate") {  
            if (!item.editorOptions) {
              item.editorOptions = {};
            } 
            item.editorOptions.disabled = getPosition() === "CEO";
          }
        },
        items: [{
            dataField: "FirstName",            
        }, {
            dataField: "Position",
            editorType: "dxSelectBox",
            editorOptions: { 
                items: positions              
            }
        }, {
            dataField: "LastName"
        }, {
            dataField: "HireDate",
            editorType: "dxDateBox",
            editorOptions: { 
                width: "100%"
            }
        }, {
            dataField: "BirthDate",
            editorType: "dxDateBox",
            editorOptions: {
                width: "100%"
            }
        }, "Address"], 
        onFieldDataChanged: function(e) {
          if (e.dataField === "Position") {            
            e.component.repaint();            
          }
        }
    }).dxForm("instance");   
});

var employee = {
    "ID": 1,
    "FirstName": "John",
    "LastName": "Heart",
    "Position": "CEO",
    "BirthDate": "1964/03/16",
    "HireDate": "1995/01/15",   
    "Address": "351 S Hill St., Los Angeles, CA"    
};

var positions = [
    "HR Manager",
    "IT Manager",
    "CEO",
    "Controller",
    "Sales Manager",
    "Support Manager",
    "Shipping Manager"
];


