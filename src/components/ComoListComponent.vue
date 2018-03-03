<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ul class="list-group half">
          <li class="list-group-item list-group-item-dark"> Cardiovascular Diseases</li>
          <li class="list-group-item list-group-item-action"
          v-for="(item, index) in cardioDiseases"
          :key="item.comorbidity"
          v-on:click="aggregateConditions(cardioDiseases, index)"
          v-on:mouseover="passComorbidityOnHover(cardioDiseases, index)">
            <div class="row">
              <div class="col-2">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" :checked="item.check">
                </div>
              </div>
              <div class="col-10 text-left">
                {{ item.comorbidity }}
              </div>
            </div>
          </li>
          <li class="list-group-item list-group-item-dark"> Pulmonary Diseases</li>
          <li class="list-group-item list-group-item-action"
          v-for="(item, index) in pulmoDiseases"
          :key="item.comorbidity"
          v-on:click="aggregateConditions(pulmoDiseases, index)"
          v-on:mouseover="passComorbidityOnHover(pulmoDiseases, index)">
            <div class="row">
              <div class="col-2">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" :checked="item.check">
                </div>
              </div>
              <div class="col-10 text-left">
                {{ item.comorbidity }}
              </div>
            </div>
          </li>
          <li class="list-group-item list-group-item-dark"> Other Diseases</li>
          <li class="list-group-item list-group-item-action"
          v-for="(item, index) in otherDiseases"
          :key="item.comorbidity"
          v-on:click="aggregateConditions(otherDiseases, index)"
          v-on:mouseover="passComorbidityOnHover(otherDiseases, index)">
            <div class="row">
              <div class="col-2">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" :checked="item.check">
                </div>
              </div>
              <div class="col-10 text-left">
                {{ item.comorbidity }}
              </div>
            </div>
          </li>
          <li class="list-group-item list-group-item-dark"> Medications </li>
          <li class="list-group-item list-group-item-action"
          v-for="(item, index) in medications"
          :key="item.comorbidity"
          v-on:click="aggregateConditions(medications, index)"
          v-on:mouseover="passComorbidityOnHover(medications, index)">
            <div class="row">
              <div class="col-2">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" :checked="item.check">
                </div>
              </div>
              <div class="col-10 text-left">
                {{ item.comorbidity }}
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
        { comorbidity: Condition.Bleeding, glossary: Glossary.Bleeding, check: false },
        { comorbidity: Condition.Anemia, glossary: Glossary.Anemia, check: false },
        { comorbidity: Condition.ActiveBleeding, glossary: Glossary.ActiveBleeding, check: false },
        { comorbidity: Condition.Renal, glossary: Glossary.Renal, check: false },
        { comorbidity: Condition.Diabetes, glossary: Glossary.Diabetes, check: false },
        { comorbidity: Condition.Malignancy, glossary: Glossary.Malignancy, check: false },
        { comorbidity: Condition.Hepatic, glossary: Glossary.Hepatic, check: false },
        { comorbidity: Condition.Adrenal, glossary: Glossary.Adrenal, check: false },
        { comorbidity: Condition.Pituitary, glossary: Glossary.Pituitary, check: false },
        { comorbidity: Condition.Endocrine, glossary: Glossary.Endocrine, check: false },
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
    * Creates or removes a comorbidity to a String array to be
    * passed to the necessary functions. Executed whenever a
    * comorbidity is clicked in the list.
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
     * the parent's data is needed. Passing a string of the
     * current comorbidity up.
     * @param comorbidityArray - The current comorbidity array being used.
     * @param index - The index of the comorbidity to be passed.
     */
    passComorbidityOnHover: function passComorbidityOnHover(comorbidityArray, index) {
      const array = comorbidityArray;

      this.$emit('hoverEvent', { currentComorbiditySelection: array[index].glossary });
    },
  },
};
</script>

<style scoped>
.half {
  height: 500px;
  overflow: scroll;
}
</style>
