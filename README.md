<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/182822992/18.2.7%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T830416)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# How to change certain Form items based on a value of another item

This example demonstrates how to show/hide or enable/disable form items based on a value of another item. 

The main idea is to change the [visible](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#visible) option of a certain form item in the [onFieldDataChanged](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onFieldDataChanged) form's event handler. The same approach can be used with the [disabled](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#disabled) option of the required form item editor. We can do that using [editorOptions](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions). 

In our particular case, we hide the **Address** form item and disable the **Hire Date** item editor when the **Position** form item value is set to "CEO". 
