# jQuery

dxForm re-renders its content when any item option is changed. It is sufficient to configure item options in the [customizeItem](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#customizeItem) callback function and call the [repaint](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#repaint) method in the [onFieldDataChanged](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onFieldDataChanged) event handler when a certain item value is changed. 

Take a look at the [index.js](https://github.com/DevExpress-Examples/how-to-change-certain-Form-items-based-on-a-value-of-another-item/blob/18.2.7%2B/jquery/index.js) file of this example to see the required code.