<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ul class="list-group half">
          <li class="list-group-item list-group-item-dark"> Cardiovascular Diseases</li>
          <li class="list-group-item list-group-item-action"
          v-for="(item, index) in cardioDiseases"
          :key="item.comorbidity"
          v-on:click="aggregateConditions(cardioDiseases, index)">
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
          v-on:click="aggregateConditions(pulmoDiseases, index)">
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
          v-on:click="aggregateConditions(otherDiseases, index)">
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
          v-on:click="aggregateConditions(medications, index)">
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
import { Condition } from '@/constants';

export default {
  name: 'ComoListComponent',
  data() {
    return {
      // The array we are going to pass up to the parent component
      // this gets populated with the current selections
      result: {},
      cardioDiseases: [
        /* Cardiovascular Diseases */
        { comorbidity: Condition.AtrialFib, check: false },
        { comorbidity: Condition.Defib, check: false },
        { comorbidity: Condition.CAD, check: false },
        { comorbidity: Condition.CardiacStent, check: false },
        { comorbidity: Condition.CerebralDisease, check: false },
        { comorbidity: Condition.PulmonaryVascular, check: false },
        { comorbidity: Condition.TIA, check: false },
        { comorbidity: Condition.Stroke, check: false },
        { comorbidity: Condition.VHD, check: false },
        { comorbidity: Condition.HeartFail, check: false },
        { comorbidity: Condition.PVD, check: false },
      ],
      pulmoDiseases: [
        /* Pulmonary Diseases */
        { comorbidity: Condition.PulmDisease, check: false },
      ],
      otherDiseases: [
        /* Other Diseases */
        { comorbidity: Condition.Bleeding, check: false },
        { comorbidity: Condition.Anemia, check: false },
        { comorbidity: Condition.ActiveBleeding, check: false },
        { comorbidity: Condition.Renal, check: false },
        { comorbidity: Condition.Diabetes, check: false },
        { comorbidity: Condition.Malignancy, check: false },
        { comorbidity: Condition.Hepatic, check: false },
        { comorbidity: Condition.Adrenal, check: false },
        { comorbidity: Condition.Pituitary, check: false },
        { comorbidity: Condition.Endocrine, check: false },
      ],
      medications: [
        /* Medications */
        { comorbidity: Condition.Digoxin, check: false },
        { comorbidity: Condition.Lithium, check: false },
        { comorbidity: Condition.Diuretics, check: false },
        { comorbidity: Condition.ACEI, check: false },
        { comorbidity: Condition.ARB, check: false },
        { comorbidity: Condition.NSAIDS, check: false },
        { comorbidity: Condition.Anticoagulant, check: false },
        { comorbidity: Condition.Antiplatelet, check: false },
        { comorbidity: Condition.Steroid, check: false },
      ],
    };
  },
  methods: {
    /**
    * Creates or removes a comorbidity to a String array to be
    * passed to the necessary functions. Executed whenever a
    * comorbidity is clicked in the list.
    * @returns comoList - List of comorbidities.
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

      this.$emit('updateEvent', { result: array[index].comorbidity });
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
