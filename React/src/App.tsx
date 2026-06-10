import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Form, { SimpleItem } from 'devextreme-react/form';
import type { FieldDataChangedEvent } from 'devextreme/ui/form';
import { employee, positions } from './data';

const positionEditorOptions = { items: positions };
const birthDateEditorOptions = { width: '100%' };

function App(): JSX.Element {
  const [isAddressVisible, setIsAddressVisible] = useState<boolean>(
    employee.Position !== 'CEO',
  );
  const [hireDateEditorOptions, setHireDateEditorOptions] = useState({
    width: '100%',
    disabled: employee.Position === 'CEO',
  });

  const onFieldDataChanged = useCallback((e: FieldDataChangedEvent) => {
    if (e.dataField === 'Position') {
      setIsAddressVisible(e.value !== 'CEO');
      setHireDateEditorOptions((prev) => ({
        ...prev,
        disabled: e.value === 'CEO',
      }));
    }
  }, []);

  return (
    <div className="main">
      <div className="long-title">
        <h3>Employee Details</h3>
      </div>
      <Form
        colCount={2}
        formData={employee}
        onFieldDataChanged={onFieldDataChanged}
      >
        <SimpleItem dataField="FirstName" />
        <SimpleItem
          dataField="Position"
          editorType="dxSelectBox"
          editorOptions={positionEditorOptions}
        />
        <SimpleItem dataField="LastName" />
        <SimpleItem
          dataField="HireDate"
          editorType="dxDateBox"
          editorOptions={hireDateEditorOptions}
        />
        <SimpleItem
          dataField="BirthDate"
          editorType="dxDateBox"
          editorOptions={birthDateEditorOptions}
        />
        <SimpleItem dataField="Address" visible={isAddressVisible} />
      </Form>
    </div>
  );
}

export default App;
