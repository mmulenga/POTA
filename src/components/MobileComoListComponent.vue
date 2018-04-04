<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ul class="list-group half">
          <li class="list-group-item list-group-item-dark"> Cardiovascular Diseases</li>
          <li :id="generateID('li', 'cv', index)"
          class="list-group-item list-group-item-action lg-item"
          v-for="(item, index) in cardioDiseases"
          v-on:click="aggregateConditions(cardioDiseases, index)"
          :key="item.comorbidity">
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
                v-on:click="showModal(), aggregateConditions(cardioDiseases, index);"
                >i</span>
              </div>
            </div>
          </li>
          <li class="list-group-item list-group-item-dark"> Pulmonary Diseases</li>
          <li :id="generateID('li', 'pd', index)"
          class="list-group-item list-group-item-action lg-item"
          v-for="(item, index) in pulmoDiseases"
          v-on:click="aggregateConditions(pulmoDiseases, index);"
          :key="item.comorbidity">
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
                v-on:click="showModal(), aggregateConditions(pulmoDiseases, index);"
                >i</span>
              </div>
            </div>
          </li>
          <li class="list-group-item list-group-item-dark"> Other Diseases</li>
          <li :id="generateID('li', 'other', index)"
          class="list-group-item list-group-item-action lg-item"
          v-for="(item, index) in otherDiseases"
          v-on:click="aggregateConditions(otherDiseases, index)"
          :key="item.comorbidity">
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
                v-on:click="showModal(), aggregateConditions(otherDiseases, index);"
                >i</span>
              </div>
            </div>
          </li>
          <li class="list-group-item list-group-item-dark"> Medications </li>
          <li :id="generateID('li', 'med', index)"
          class="list-group-item list-group-item-action lg-item"
          v-for="(item, index) in medications"
          v-on:click="aggregateConditions(medications, index)"
          :key="item.comorbidity">
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
                v-on:click="showModal(), aggregateConditions(medications, index);"
                >i</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

    <!-- Modal -->
    <div id="modal_box" class="modal fade" :class="{ 'show': isVisible, 'd-block': isVisible }"
     tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> Glossary </h5>
            <button id="modal_close" type="button" class="close" v-on:click="showModal(),
             clearComorbidityOnHover()">
              <span> &times; </span>
            </button>
          </div>
          <div class="modal-body">
            <!-- when i is clicked, get the definition to go into modal body-->
            <pre>
            <!-- This is because App is the parent of Drawer -->
            <p>{{this.currentComorbidityDescription}}</p>
            </pre>
          </div>
          <div class="modal-footer">
            <!-- closes glossary modal and clears current glossary -->
            <button id="modal_okay text-center" type="button" class="btn btn-primary"
            v-on:click="showModal(), clearComorbidityOnHover(), resetScrollPosition()">
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { Condition, Glossary } from '@/constants';

export default {
  name: 'MobileComoListComponent',
  data() {
    return {
      isVisible: false,
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

      this.$emit('update-glossary', { currentComorbiditySelection: array[index].glossary });
      this.$emit('toggle-buttons');
    },
    /**
     * Emits an event, signalling to the parent an update to
     * the parent's data is needed. Clears the currentComorbiditySelection
     * and toggle the resultsModalComponent buttons.
     */
    clearComorbidityOnHover: function clearComorbidityOnHover() {
      this.$emit('clear-glossary', { currentComorbiditySelection: '' });
      this.$emit('toggle-buttons');
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
            return `mobile_cv_${conditionNameArray[index]}`;
          }

          return `mobile_cv_checkbox_${conditionNameArray[index]}`;

        case 'pd':
          if (element === 'li') {
            return `mobile_pd_${conditionNameArray[index + pdIndex]}`;
          }

          return `mobile_pd_checkbox_${conditionNameArray[index + pdIndex]}`;

        case 'other':
          if (element === 'li') {
            return `mobile_other_${conditionNameArray[index + otherIndex]}`;
          }

          return `mobile_other_checkbox_${conditionNameArray[index + otherIndex]}`;

        default:
          if (element === 'li') {
            return `mobile_med_${conditionNameArray[index + medIndex]}`;
          }

          return `mobile_med_checkbox_${conditionNameArray[index + medIndex]}`;
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
    /**
     * Resets the data component of MobileComoListComponent.
     */
    resetData: function resetData() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
    /**
     * Displays the required preoperative tests modal
     */
    showModal: function showModal() {
      this.isVisible = !this.isVisible;
    },
    /**
    * Emits a "reset-scroll-position" event to the parent component to reset
    * the scroll position of the exam modal.
    */
    resetScrollPosition: function resetScrollPosition() {
      this.$emit('reset-scroll-position');
    },
  },
};
</script>

<style scoped>

.half {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 16%;
}

/* ----------- Galaxy S4, S5 and Note 3 ----------- */
/* Portrait and Landscape */
@media screen
  and (min-device-width: 320px)
  and (max-device-height: 640px) {
    .half {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      height: 11.8%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
}

/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
/* Portrait and Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-height: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .half {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      height: 10.5%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
}

/* ----------- iPhone 6, 6S, 7 and 8 ----------- */
/* Portrait and Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-height: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .half {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      height: 15%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
}

/* ----------- Pixel 2 XL ----------- */
/* Portrait and Landscape */
@media screen
  and (min-device-width: 411px)
  and (max-device-height: 823px) {
    .half {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      height: 20%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
}

/* ----------- Pixel 2 ----------- */
/* Portrait and Landscape */
@media screen
  and (min-device-width: 411px)
  and (max-device-height: 731px) {
    .half {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      height: 18%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
}

/* ----------- iPhone 6+, 6S+, 7+ and 8 ----------- */
/* Portrait and Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-height: 736px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .half {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      height: 16%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
}

.pointer {
  cursor: pointer;
}

.badge-pill {
    font-size: medium;
}

.col-1 {
  padding-left: 0px;
}

.col-0 {
  padding-left: 0px;
}

.lg-item {
  padding: 1.50rem;
}

.form-check-input {
  width: 15px;
  height: 15px;
}

pre{
  -webkit-padding-start: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: left;
  font-size: 16px;
  margin-right: 12px;
  display: inline;
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

</style>
