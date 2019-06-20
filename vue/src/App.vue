<template>
  <div>
    <div class="long-title"><h3>Employee Details</h3></div>
    <div id="form-container">
      <dx-form
        :col-count="2"
        :form-data="employee"
        @field-data-changed="onFieldDataChanged($event);"
      >
        <dx-simple-item data-field="FirstName" />
        <dx-simple-item
          :editor-options="{ items: positions }"
          data-field="Position"
          editor-type="dxSelectBox"
        />
        <dx-simple-item data-field="LastName" />
        <dx-simple-item
          :editor-options="hireDateOptions"
          data-field="HireDate"
          editor-type="dxDateBox"
        />
        <dx-simple-item
          :editor-options="{ width: '100%' }"
          data-field="BirthDate"
          editor-type="dxDateBox"
        />
        <dx-simple-item data-field="Address" :visible="isVisible" />
      </dx-form>
    </div>
  </div>
</template>

<script>
import { DxForm, DxSimpleItem } from "devextreme-vue/form";
import service from "./data.js";

export default {
  components: {
    DxForm,
    DxSimpleItem
  },
  data() {
    const employee = service.getEmployee();
    const positions = service.getPositions();
    return {
      employee,
      positions,
      isVisible: true,
      hireDateOptions: {
        width: "100%",
        disabled: true
      }
    };
  },
  mounted() {  
    this.changeOptions();
  },
  methods: {
    changeOptions() {
      this.isVisible = this.employee.Position !== "CEO";
      this.hireDateOptions = {
        ...this.hireDateOptions,
        disabled: this.employee.Position === "CEO"
      };
    },
    onFieldDataChanged(e) {
      if (e.dataField === "Position") {
        this.changeOptions();
      }
    }
  }
};
</script>

<style scoped>
#form-container {
  margin: 10px 10px 30px;
}

.long-title h3 {
  font-family: "Segoe UI Light", "Helvetica Neue Light", "Segoe UI",
    "Helvetica Neue", "Trebuchet MS", Verdana;
  font-weight: 200;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
