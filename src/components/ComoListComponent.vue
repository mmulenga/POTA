<template>
  <div class="container">
    <div class="row">
      <div class="offset-md-3 col-md-6">
        <ul class="list-group half px-auto">
          <li class="list-group-item list-group-item-dark"> Cardiovascular Diseases</li>
          <li class="list-group-item list-group-item-action"
          v-for="item in cardioDiseases"
          :key="item.comorbidity"
          v-on:click="aggregateConditions">
            <div class="row">
              <div class="col-10 pl-5 text-left">
                {{ item.comorbidity }}
              </div>
              <div class="col-2">
                <div class="form-check">
                  <input id="como" class="form-check-input" :checked="isActive" type="checkbox">
                </div>
              </div>
            </div>
          </li>
          <li class="list-group-item list-group-item-dark"> Pulmonary Diseases</li>
          <li class="list-group-item list-group-item-action"
          v-for="item in pulmoDiseases"
          :key="item.comorbidity"
          v-on:click="aggregateConditions">
            {{ item.comorbidity }}
          </li>
          <li class="list-group-item list-group-item-dark"> Other Diseases</li>
          <li class="list-group-item list-group-item-action"
          v-for="item in otherDiseases"
          :key="item.comorbidity"
          v-on:click="aggregateConditions">
            {{ item.comorbidity }}
          </li>
          <li class="list-group-item list-group-item-dark"> Medications </li>
          <li class="list-group-item list-group-item-action"
          v-for="item in medications"
          :key="item.comorbidity"
          v-on:click="aggregateConditions">
            {{ item.comorbidity }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Condition } from '@/constants';

/**
 * Creates or removes a comorbidity to a String array to be
 * passed to the necessary functions. Executed whenever a
 * comorbidity is clicked in the list.
 * @returns comoList - List of comorbidities.
 */
function aggregateConditions() {
  if (vm.$el.isActive === false) {
    this.como.isActive = true;
  } else {
    this.como.isActive = false;
  }
}

export default {
  name: 'ComoListComponent',
  el: '#como',
  data() {
    return {
      cardioDiseases: [
        /* Cardiovascular Diseases */
        { comorbidity: Condition.AtrialFib },
        { comorbidity: Condition.Defib },
        { comorbidity: Condition.CAD },
        { comorbidity: Condition.CardiacStent },
        { comorbidity: Condition.CerebralDisease },
        { comorbidity: Condition.PulmonaryVascular },
        { comorbidity: Condition.TIA },
        { comorbidity: Condition.Stroke },
        { comorbidity: Condition.VHD },
        { comorbidity: Condition.HeartFail },
        { comorbidity: Condition.PVD },
      ],
      pulmoDiseases: [
        /* Pulmonary Diseases */
        { comorbidity: Condition.PulmDisease },
      ],
      otherDiseases: [
        /* Other Diseases */
        { comorbidity: Condition.Bleeding },
        { comorbidity: Condition.Anemia },
        { comorbidity: Condition.ActiveBleeding },
        { comorbidity: Condition.Renal },
        { comorbidity: Condition.Diabetes },
        { comorbidity: Condition.Malignancy },
        { comorbidity: Condition.Hepatic },
        { comorbidity: Condition.Adrenal },
        { comorbidity: Condition.Pituitary },
        { comorbidity: Condition.Endocrine },
      ],
      medications: [
        /* Medications */
        { comorbidity: Condition.Digoxin },
        { comorbidity: Condition.Lithium },
        { comorbidity: Condition.Diuretics },
        { comorbidity: Condition.ACEI },
        { comorbidity: Condition.ARB },
        { comorbidity: Condition.NSAIDS },
        { comorbidity: Condition.Anticoagulant },
        { comorbidity: Condition.Antiplatelet },
        { comorbidity: Condition.Steroid },
      ],
      isActive: false,
    };
  },
  methods: {
    aggregateConditions: () => aggregateConditions(),
  },
};
</script>

<style>
.half {
  height: 500px;
  overflow: scroll;
}
</style>
