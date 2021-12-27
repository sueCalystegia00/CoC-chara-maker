<template>
  <div class="status">
    <div class="title">
      <h2>ステータス</h2>
    </div>
    <div v-if="setDice" class="dice-area">
      <button class="dice-button" @click="diceroll"></button>
      <p>👈 ランダム設定</p>
    </div>
    <div class="status-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>初期値</th>
            <th>修正値</th>
            <th>能力値</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(commonStatus, key) in statusList.commonStatusSheet"
            :key="key"
            class="common-status status-row"
          >
            <th class="displayname">{{ commonStatus.displayName }}</th>
            <td class="default">
              <input
                type="number"
                v-model="commonStatus.default"
                @input="inputStatus('commonStatusSheet', key, commonStatus)"
              />
            </td>
            <td class="revised">
              <input
                type="number"
                v-model="commonStatus.revised"
                @input="inputStatus('commonStatusSheet', key, commonStatus)"
              />
            </td>
            <td class="value unedit">
              {{ commonStatus.value }}
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead class="option-header">
          <tr>
            <th></th>
            <th>初期値</th>
            <th>修正値</th>
            <th>能力値</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(calclatedStatus, key) in statusList.calclatedStatusSheet"
            :key="key"
            class="calc-status status-row"
          >
            <th class="displayname">{{ calclatedStatus.displayName }}</th>
            <td class="default unedit">
              {{ calclatedStatus.default }}
            </td>
            <td class="revised">
              <input
                type="number"
                v-model="calclatedStatus.revised"
                @input="
                  inputStatus('calclatedStatusSheet', key, calclatedStatus)
                "
              />
            </td>
            <td class="value unedit">
              {{ calclatedStatus.value }}
            </td>
          </tr>
          <tr
            v-for="(specStatus, key) in statusList.specStatusSheet"
            :key="key"
            class="spec-status status-row"
          >
            <th class="displayname">{{ specStatus.displayName }}</th>
            <td class="unedit"></td>
            <td class="unedit"></td>
            <td class="value unedit">
              {{ specStatus.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Status",
  props: {
    setDice: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["statusList"]),
    HPobject() {
      return [
        this.statusList.commonStatusSheet.constitution.value,
        this.statusList.commonStatusSheet.size.value,
      ];
    },
    MPandSANandLUCKobject() {
      return [this.statusList.commonStatusSheet.power.value];
    },
    IDEAobject() {
      return [this.statusList.commonStatusSheet.intelligence.value];
    },
    KNOWLEDGEobject() {
      return [this.statusList.commonStatusSheet.education.value];
    },
    DBobject() {
      return [
        this.statusList.commonStatusSheet.strength.value,
        this.statusList.commonStatusSheet.size.value,
      ];
    },
  },
  watch: {
    HPobject() {
      this.setDefaultHitPoint();
    },
    MPandSANandLUCKobject() {
      this.setDefaultMagicPoint();
      this.setDefaultSanity();
      this.setDefaultLuck();
    },
    IDEAobject() {
      this.setDefaultIdea();
    },
    KNOWLEDGEobject() {
      this.setDefaultKnowledge();
    },
    DBobject() {
      this.setDamageBonus();
    },
  },
  methods: {
    inputStatus(typeName, keyName, statusValues) {
      let setValues = { ...statusValues };
      setValues.value =
        Number(statusValues.default) + Number(statusValues.revised);
      this.$store.commit("setStatus", {
        type: typeName,
        key: keyName,
        values: setValues,
      });
    },
    setDefaultHitPoint() {
      const defaultHP = Math.ceil(
        (this.statusList.commonStatusSheet.constitution.value +
          this.statusList.commonStatusSheet.size.value) /
          2
      );
      this.$store.commit("setStatus", {
        type: "calclatedStatusSheet",
        key: "hitPoint",
        values: {
          displayName: "HP",
          default: defaultHP,
          revised: this.statusList.calclatedStatusSheet.hitPoint.revised,
          value:
            Number(defaultHP) +
            Number(this.statusList.calclatedStatusSheet.hitPoint.revised),
        },
      });
    },
    setDefaultMagicPoint() {
      const defaultMP = this.statusList.commonStatusSheet.power.value * 1;
      this.$store.commit("setStatus", {
        type: "calclatedStatusSheet",
        key: "magicPoint",
        values: {
          displayName: "MP",
          default: defaultMP,
          revised: this.statusList.calclatedStatusSheet.magicPoint.revised,
          value:
            Number(defaultMP) +
            Number(this.statusList.calclatedStatusSheet.magicPoint.revised),
        },
      });
    },
    setDefaultSanity() {
      const defaultSAN = this.statusList.commonStatusSheet.power.value * 5;
      this.$store.commit("setStatus", {
        type: "calclatedStatusSheet",
        key: "sanity",
        values: {
          displayName: "SAN",
          default: defaultSAN,
          revised: this.statusList.calclatedStatusSheet.sanity.revised,
          value:
            Number(defaultSAN) +
            Number(this.statusList.calclatedStatusSheet.sanity.revised),
        },
      });
    },
    setDefaultIdea() {
      const defaultIdea =
        this.statusList.commonStatusSheet.intelligence.value * 5;
      this.$store.commit("setStatus", {
        type: "calclatedStatusSheet",
        key: "idea",
        values: {
          displayName: "アイデア",
          default: defaultIdea,
          revised: this.statusList.calclatedStatusSheet.idea.revised,
          value:
            Number(defaultIdea) +
            Number(this.statusList.calclatedStatusSheet.idea.revised),
        },
      });
    },
    setDefaultLuck() {
      const defaultLuck = this.statusList.commonStatusSheet.power.value * 5;
      this.$store.commit("setStatus", {
        type: "calclatedStatusSheet",
        key: "luck",
        values: {
          displayName: "幸運",
          default: defaultLuck,
          revised: this.statusList.calclatedStatusSheet.luck.revised,
          value:
            Number(defaultLuck) +
            Number(this.statusList.calclatedStatusSheet.luck.revised),
        },
      });
    },
    setDefaultKnowledge() {
      const defaultKnowledge =
        this.statusList.commonStatusSheet.education.value * 5;
      this.$store.commit("setStatus", {
        type: "calclatedStatusSheet",
        key: "knowledge",
        values: {
          displayName: "知識",
          default: defaultKnowledge,
          revised: this.statusList.calclatedStatusSheet.knowledge.revised,
          value:
            Number(defaultKnowledge) +
            Number(this.statusList.calclatedStatusSheet.knowledge.revised),
        },
      });
    },
    setDamageBonus() {
      const damageBonusValue =
        this.statusList.commonStatusSheet.strength.value +
        this.statusList.commonStatusSheet.size.value;
      let displayDB = "";
      if (damageBonusValue <= 12) displayDB = "-1D6";
      else if (damageBonusValue >= 13 && damageBonusValue <= 16)
        displayDB = "-1D4";
      else if (damageBonusValue >= 17 && damageBonusValue <= 24)
        displayDB = "±0";
      else if (damageBonusValue >= 25 && damageBonusValue <= 32)
        displayDB = "+1D4";
      else if (damageBonusValue >= 33 && damageBonusValue <= 40)
        displayDB = "+1D6";
      else if (damageBonusValue >= 41 && damageBonusValue <= 56)
        displayDB = "+2D6";
      else if (damageBonusValue >= 57) displayDB = "+3D6";
      this.$store.commit("setStatus", {
        type: "specStatusSheet",
        key: "damageBonus",
        values: {
          displayName: "DB",
          value: displayDB,
        },
      });
    },
    diceroll() {
      Object.keys(this.$store.state.statusList.commonStatusSheet).forEach(
        (keyName) => {
          let element = this.$store.state.statusList.commonStatusSheet[keyName];
          let defaultValue = 0;
          if (
            element.displayName == "STR" ||
            element.displayName == "CON" ||
            element.displayName == "POW" ||
            element.displayName == "DEX" ||
            element.displayName == "APP"
          ) {
            defaultValue =
              Math.floor(Math.random() * 6 + 1) +
              Math.floor(Math.random() * 6 + 1) +
              Math.floor(Math.random() * 6 + 1);
          } else if (
            element.displayName == "SIZ" ||
            element.displayName == "INT"
          ) {
            defaultValue =
              Math.floor(Math.random() * 6 + 1) +
              Math.floor(Math.random() * 6 + 1) +
              6;
          } else if (element.displayName == "EDU") {
            defaultValue =
              Math.floor(Math.random() * 6 + 1) +
              Math.floor(Math.random() * 6 + 1) +
              Math.floor(Math.random() * 6 + 1) +
              3;
          }
          let setValues = {
            displayName: element.displayName,
            default: defaultValue,
            revised: element.revised,
            value: Number(defaultValue) + Number(element.revised),
          };
          this.$store.commit("setStatus", {
            type: "commonStatusSheet",
            key: keyName,
            values: setValues,
          });
        }
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.dice-area {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.dice-button {
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  background-image: url("../assets/dice.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.status-table {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px;
}
/* スマホ */
@media screen and (max-width: 428px) {
  .option-header {
    display: none;
  }
  .status-table {
    grid-template-columns: 1fr;
    gap: 10px 20px;
  }
}

table,
thead,
tbody {
  width: 100%;
  text-align: center;
}
thead th {
  font-size: 0.5rem;
  color: #373737;
}
tbody tr {
  height: 40px;
}
tbody th {
  width: 30%;
  height: 40px;
  background-color: #000000;
  color: #ffffff;
}
tbody td {
  position: relative;
  width: 22%;
  height: 40px;
  border: 1px solid #cdcdcd;
}
td input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  padding: 0;
  box-sizing: border-box;
}
.unedit {
  background-color: #c4c4c4;
}
</style>
