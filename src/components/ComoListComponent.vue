<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ul class="list-group half">
          <li class="list-group-item list-group-item-dark"> Cardiovascular Diseases</li>
          <li :id="generateID('li', 'cv', index)"
          class="list-group-item list-group-item-action lg-item"
          v-for="(item, index) in cardioDiseases"
          :key="item.comorbidity"
          v-on:click="aggregateConditions(cardioDiseases, index)">
            <div class="row">
              <div class="col-2">
                <div class="form-check">
                  <input :id="generateID('cb', 'cv', index)"
                  class="form-check-input" type="checkbox" :checked="item.check">
                </div>
              </div>
              <div class="col-9 text-left">
                {{ item.comorbidity }}
              </div>
              <div v-if="hasEntry(item)" class="col-1">
                <span class="badge badge-pill badge-secondary"
                v-on:mouseover="passComorbidityOnHover(cardioDiseases, index)"
                v-on:mouseleave="clearComorbidityOnHover()">i</span>
              </div>
            </div>
          </li>
          <li class="list-group-item list-group-item-dark"> Pulmonary Diseases</li>
          <li :id="generateID('li', 'pd', index)"
          class="list-group-item list-group-item-action lg-item"
          v-for="(item, index) in pulmoDiseases"
          :key="item.comorbidity"
          v-on:click="aggregateConditions(pulmoDiseases, index)">
            <div class="row">
              <div class="col-2">
                <div class="form-check">
                  <input :id="generateID('cb', 'pd', index)"
                  class="form-check-input" type="checkbox" :checked="item.check">
                </div>
              </div>
              <div class="col-9 text-left">
                {{ item.comorbidity }}
              </div>
              <div v-if="hasEntry(item)" class="col-1">
                <span class="badge badge-pill badge-secondary"
                v-on:mouseover="passComorbidityOnHover(pulmoDiseases, index)"
                v-on:mouseleave="clearComorbidityOnHover()">i</span>
              </div>
            </div>
          </li>
          <li class="list-group-item list-group-item-dark"> Other Diseases</li>
          <li :id="generateID('li', 'other', index)"
          class="list-group-item list-group-item-action lg-item"
          v-for="(item, index) in otherDiseases"
          :key="item.comorbidity"
          v-on:click="aggregateConditions(otherDiseases, index)">
            <div class="row">
              <div class="col-2">
                <div class="form-check">
                  <input :id="generateID('cb', 'other', index)"
                  class="form-check-input" type="checkbox" :checked="item.check">
                </div>
              </div>
              <div class="col-9 text-left">
                {{ item.comorbidity }}
              </div>
              <div v-if="hasEntry(item)" class="col-1">
                <span class="badge badge-pill badge-secondary"
                v-on:mouseover="passComorbidityOnHover(otherDiseases, index)"
                v-on:mouseleave="clearComorbidityOnHover()">i</span>
              </div>
            </div>
          </li>
          <li class="list-group-item list-group-item-dark"> Medications </li>
          <li :id="generateID('li', 'med', index)"
          class="list-group-item list-group-item-action lg-item"
          v-for="(item, index) in medications"
          :key="item.comorbidity"
          v-on:click="aggregateConditions(medications, index)">
            <div class="row">
              <div class="col-2">
                <div class="form-check">
                  <input :id="generateID('cb', 'med', index)"
                  class="form-check-input" type="checkbox" :checked="item.check">
                </div>
              </div>
              <div class="col-9 text-left">
                {{ item.comorbidity }}
              </div>
              <div v-if="hasEntry(item)" class="col-1">
                <span class="badge badge-pill badge-secondary"
                v-on:mouseover="passComorbidityOnHover(medications, index)"
                v-on:mouseleave="clearComorbidityOnHover()">i</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Condition, Glossary } from '@/constants';

export default {
  name: 'ComoListComponent',
  data() {
    return {
      // The array we are going to pass up to the parent component
      // this gets populated with the current selections
      currentComorbiditySelection: Object,
      currentComorbidityDescription: String,
      cardioDiseases: [
        /* Cardiovascular Diseases */
        { comorbidity: Condition.AtrialFib, glossary: Glossary.AtrialFib, check: false },
        { comorbidity: Condition.Defib, glossary: Glossary.Defib, check: false },
        { comorbidity: Condition.CAD, glossary: Glossary.CAD, check: false },
        { comorbidity: Condition.CardiacStent, glossary: Glossary.CardiacStent, check: false },
        { comorbidity: Condition.CerebralDisease,
          glossary: Glossary.CerebralDisease,
          check: false },
        { comorbidity: Condition.PulmonaryVascular,
          glossary: Glossary.PulmonaryVascular,
          check: false },
        { comorbidity: Condition.TIA, glossary: Glossary.TIA, check: false },
        { comorbidity: Condition.Stroke, glossary: Glossary.Stroke, check: false },
        { comorbidity: Condition.VHD, glossary: Glossary.VHD, check: false },
        { comorbidity: Condition.HeartFail, glossary: Glossary.HeartFail, check: false },
        { comorbidity: Condition.PVD, glossary: Glossary.PVD, check: false },
      ],
      pulmoDiseases: [
        /* Pulmonary Diseases */
        { comorbidity: Condition.PulmDisease, glossary: Glossary.PulmDisease, check: false },
      ],
      otherDiseases: [
        /* Other Diseases */
        { comorbidity: Condition.Age, glossary: Glossary.Age, check: false },
        { comorbidity: Condition.Risk, glossary: Glossary.Risk, check: false },
        { comorbidity: Condition.Bleeding, glossary: Glossary.Bleeding, check: false },
        { comorbidity: Condition.Anemia, glossary: Glossary.Anemia, check: false },
        { comorbidity: Condition.ActiveBleeding, glossary: Glossary.ActiveBleeding, check: false },
        // { comorbidity: Condition.Renal, glossary: Glossary.Renal, check: false },
        { comorbidity: Condition.KidneyDisease, glossary: Glossary.KidneyDisease, check: false },
        { comorbidity: Condition.Diabetes, glossary: Glossary.Diabetes, check: false },
        { comorbidity: Condition.Malignancy, glossary: Glossary.Malignancy, check: false },
        { comorbidity: Condition.Hepatic, glossary: Glossary.Hepatic, check: false },
        { comorbidity: Condition.Adrenal, glossary: Glossary.Adrenal, check: false },
        { comorbidity: Condition.Pituitary, glossary: Glossary.Pituitary, check: false },
        { comorbidity: Condition.Endocrine, glossary: Glossary.Endocrine, check: false },
        { comorbidity: Condition.Thyroid, glossary: Glossary.Thyroid, check: false },
      ],
      medications: [
        /* Medications */
        { comorbidity: Condition.Digoxin, glossary: Glossary.Digoxin, check: false },
        { comorbidity: Condition.Lithium, glossary: Glossary.Lithium, check: false },
        { comorbidity: Condition.Diuretics, glossary: Glossary.Diuretics, check: false },
        { comorbidity: Condition.ACEI, glossary: Glossary.ACEI, check: false },
        { comorbidity: Condition.ARB, glossary: Glossary.ARB, check: false },
        { comorbidity: Condition.NSAIDS, glossary: Glossary.NSAIDS, check: false },
        { comorbidity: Condition.Anticoagulant, glossary: Glossary.Anticoagulant, check: false },
        { comorbidity: Condition.Antiplatelet, glossary: Glossary.Antiplatelet, check: false },
        { comorbidity: Condition.Steroid, glossary: Glossary.Steroid, check: false },
      ],
    };
  },
  methods: {
    /**
    * Emits an event, signalling to the parent an update to the parent's
    * data is needed. Passes an object containing a string of the comorbidity
    * clicked, up to the parent.
    * Executes whenever a list item or checkbox is clicked.
    * @param comorbidityArray - The current comorbidity array being used.
    * @param index - The index of the comorbidity to be passed.
    */
    aggregateConditions: function aggregateConditions(comorbidityArray, index) {
      const array = comorbidityArray;

      // This method also updates the rendering
      // of the checkbox when, the list item is clicked.
      if (array[index].check === false) {
        array[index].check = true;
      } else {
        array[index].check = false;
      }

      this.$emit('clickEvent', { currentComorbiditySelection: array[index].comorbidity });
    },
    /**
     * Emits an event, signalling to the parent an update to
     * the parent's data is needed. Passes an object containing a glossary entry
     * string of the current comorbidity being hovered over, up to the parent.
     * Excutes whenever a list item is hovered over.
     * @param comorbidityArray - The current comorbidity array being used.
     * @param index - The index of the comorbidity to be passed.
     */
    passComorbidityOnHover: function passComorbidityOnHover(comorbidityArray, index) {
      const array = comorbidityArray;

      this.$emit('hoverEvent', { currentComorbiditySelection: array[index].glossary });
    },

    clearComorbidityOnHover: function clearComorbidityOnHover() {
      this.$emit('hoverEvent', { currentComorbiditySelection: '' });
    },

    /**
     * Generates an id based on the type of element and current index of the
     * element calling it.
     * @param element - The type of element that the ID is being generated for.
     * @param prefix - The prefix of the comorbidity.
     * @param index - The index of the comorbidity to be passed.
     * @returns A string containing the generated id.
     */
    generateID: function generateID(element, prefix, index) {
      const conditionNameArray = Object.keys(Condition);
      const pdIndex = this.cardioDiseases.length;
      const otherIndex = this.pulmoDiseases.length + pdIndex;
      const medIndex = this.otherDiseases.length + otherIndex;

      switch (prefix) {
        case 'cv':
          if (element === 'li') {
            return `cv_${conditionNameArray[index]}`;
          }

          return `cv_checkbox_${conditionNameArray[index]}`;

        case 'pd':
          if (element === 'li') {
            return `pd_${conditionNameArray[index + pdIndex]}`;
          }

          return `pd_checkbox_${conditionNameArray[index + pdIndex]}`;

        case 'other':
          if (element === 'li') {
            return `other_${conditionNameArray[index + otherIndex]}`;
          }

          return `other_checkbox_${conditionNameArray[index + otherIndex]}`;

        default:
          if (element === 'li') {
            return `med_${conditionNameArray[index + medIndex]}`;
          }

          return `med_checkbox_${conditionNameArray[index + medIndex]}`;
      }
    },
    /**
     * Checks to see if the comorbidity has a glossary entry.
     * @returns True, if it does. False, otherwise.
     */
    hasEntry: function hasEntry(item) {
      if (item.glossary === 'No extra information.') {
        return false;
      }

      return true;
    },
  },
};
</script>

<style scoped>
.half {
  height: 500px;
  overflow: scroll;
}

.pointer {
  cursor: pointer;
}

.badge-pill {
  font-size: large;
}

.lg-item {
  padding: 2.00rem;
}
</style>
