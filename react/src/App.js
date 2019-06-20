import React from 'react';
import './App.css';

import Form, { SimpleItem } from "devextreme-react/form";
import service from "./data.js";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.employee = service.getEmployee();
    this.positions = service.getPositions();
    this.state = {
      isVisible: true,
      hireDateOptions: {
        width: "100%",
        disabled: true
      }
    };
    this.onFieldDataChanged = this.onFieldDataChanged.bind(this);
    
  }
  componentDidMount() {
    this.changeState();
  }
  changeState() {
    this.setState({
      isVisible: this.employee.Position !== "CEO",
      hireDateOptions: {
        ...this.state.hireDateOptions,
        disabled: this.employee.Position === "CEO"
      }
    });
  }
  onFieldDataChanged(e) {
    if (e.dataField === "Position") {
      this.changeState();
    }
  }
  render() {
    const { isVisible, hireDateOptions } = this.state;
    return (
      <React.Fragment>
        <div className={"long-title"}>
          <h3>Employee Details</h3>
        </div>
        <div className={"form-container"}>
          <Form
            colCount={2}
            formData={this.employee}
            onFieldDataChanged={this.onFieldDataChanged}
          >
            <SimpleItem dataField={"FirstName"} />
            <SimpleItem
              dataField={"Position"}
              editorType={"dxSelectBox"}
              editorOptions={{ items: this.positions }}
            />
            <SimpleItem dataField={"LastName"} />
            <SimpleItem
              dataField={"HireDate"}
              editorType={"dxDateBox"}
              editorOptions={hireDateOptions}
            />
            <SimpleItem
              dataField={"BirthDate"}
              editorType={"dxDateBox"}
              editorOptions={{ width: "100%" }}
            />
            <SimpleItem dataField={"Address"} visible={isVisible} />
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
