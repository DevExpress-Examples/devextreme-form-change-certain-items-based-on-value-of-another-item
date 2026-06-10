<script setup lang="ts">
import { ref } from 'vue';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxForm, DxSimpleItem } from 'devextreme-vue/form';
import type { FieldDataChangedEvent } from 'devextreme/ui/form';
import { employee, positions } from '../data';

const positionEditorOptions = { items: positions };
const birthDateEditorOptions = { width: '100%' };

const isAddressVisible = ref(employee.Position !== 'CEO');
const hireDateEditorOptions = ref({
  width: '100%',
  disabled: employee.Position === 'CEO',
});

function onFieldDataChanged(e: FieldDataChangedEvent) {
  if (e.dataField === 'Position') {
    isAddressVisible.value = e.value !== 'CEO';
    hireDateEditorOptions.value = {
      ...hireDateEditorOptions.value,
      disabled: e.value === 'CEO',
    };
  }
}
</script>
<template>
  <div>
    <div class="long-title"><h3>Employee Details</h3></div>
    <DxForm
      :col-count="2"
      :form-data="employee"
      @field-data-changed="onFieldDataChanged"
    >
      <DxSimpleItem data-field="FirstName"/>
      <DxSimpleItem
        data-field="Position"
        editor-type="dxSelectBox"
        :editor-options="positionEditorOptions"
      />
      <DxSimpleItem data-field="LastName"/>
      <DxSimpleItem
        data-field="HireDate"
        editor-type="dxDateBox"
        :editor-options="hireDateEditorOptions"
      />
      <DxSimpleItem
        data-field="BirthDate"
        editor-type="dxDateBox"
        :editor-options="birthDateEditorOptions"
      />
      <DxSimpleItem
        data-field="Address"
        :visible="isAddressVisible"
      />
    </DxForm>
  </div>
</template>
<style scoped>
.long-title h3 {
  font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI',
    'Helvetica Neue', 'Trebuchet MS', Verdana;
  font-weight: 200;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
