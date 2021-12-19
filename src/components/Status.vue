<template>
  <div class="status">
    <div class="title">
      <h2>ステータス</h2>
    </div>
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
          v-for="commonStatus in commonStatusSheet"
          :key="commonStatus.displayName"
          class="common-status status-row"
        >
          <th class="displayname">{{ commonStatus.displayName }}</th>
          <td class="default"><input v-model="commonStatus.default" /></td>
          <td class="revised"><input v-model="commonStatus.revised" /></td>
          <td class="value unedit">
            {{ definedCommonStatusSheet[commonStatus.displayName].value }}
          </td>
        </tr>
        <tr
          v-for="calclatedStatus in calclatedStatusSheet"
          :key="calclatedStatus.displayName"
          class="calc-status status-row"
        >
          <th class="displayname">{{ calclatedStatus.displayName }}</th>
          <td class="default unedit">
            {{
              definedCalclatedStatusSheet[calclatedStatus.displayName].default
            }}
          </td>
          <td class="revised"><input v-model="calclatedStatus.revised" /></td>
          <td class="value unedit">
            {{ definedCalclatedStatusSheet[calclatedStatus.displayName].value }}
          </td>
        </tr>
        <tr
          v-for="specStatus in definedSpecStatusSheet"
          :key="specStatus.displayName"
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
</template>

<script>
export default {
  name: "Status",
  data() {
    return {
      commonStatusSheet: [
        {
          displayName: "STR",
          default: null,
          revised: null,
        },
        {
          displayName: "CON",
          default: null,
          revised: null,
        },
        {
          displayName: "POW",
          default: null,
          revised: null,
        },
        {
          displayName: "DEX",
          default: null,
          revised: null,
        },
        {
          displayName: "APP",
          default: null,
          revised: null,
        },
        {
          displayName: "SIZ",
          default: null,
          revised: null,
        },
        {
          displayName: "INT",
          default: null,
          revised: null,
        },
        {
          displayName: "EDU",
          default: null,
          revised: null,
        },
      ],
      calclatedStatusSheet: [
        {
          displayName: "HP",
          revised: null,
        },
        {
          displayName: "MP",
          revised: null,
        },
        {
          displayName: "SAN",
          revised: null,
        },
        {
          displayName: "アイデア",
          revised: null,
        },
        {
          displayName: "幸運",
          revised: null,
        },
        {
          displayName: "知識",
          revised: null,
        },
      ],
    };
  },
  computed: {
    definedCommonStatusSheet() {
      return this.commonStatusSheet.reduce((acc, status) => {
        acc[status.displayName] = {
          ...status,
          value: Number(status.default) + Number(status.revised),
        };
        return acc;
      }, {});
    },
    definedCalclatedStatusSheet() {
      return this.calclatedStatusSheet.reduce((acc, status) => {
        acc[status.displayName] = { ...status };
        if (status.displayName == "HP") {
          acc[status.displayName].default =
            (this.definedCommonStatusSheet.CON.value +
              this.definedCommonStatusSheet.SIZ.value) /
            2;
        } else if (status.displayName == "MP") {
          acc[status.displayName].default =
            this.definedCommonStatusSheet.POW.value * 1;
        } else if (status.displayName == "SAN") {
          acc[status.displayName].default =
            this.definedCommonStatusSheet.POW.value * 5;
        } else if (status.displayName == "アイデア") {
          acc[status.displayName].default =
            this.definedCommonStatusSheet.INT.value * 5;
        } else if (status.displayName == "幸運") {
          acc[status.displayName].default =
            this.definedCommonStatusSheet.POW.value * 5;
        } else if (status.displayName == "知識") {
          acc[status.displayName].default =
            this.definedCommonStatusSheet.EDU.value * 5;
        }
        acc[status.displayName].value =
          acc[status.displayName].default + Number(status.revised);
        return acc;
      }, {});
    },
    definedSpecStatusSheet() {
      return {
        DB: {
          displayName: "DB",
          value:
            this.definedCommonStatusSheet.STR.value +
            this.definedCommonStatusSheet.SIZ.value,
        },
        SAN値上限: {
          displayName: "SAN値上限",
          value: 99,
        },
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status {
  width: 100%;
  max-width: 800px;
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
table,
thead,
tbody {
  width: 100%;
  text-align: center;
}
thead th {
  font-size: 0.8rem;
  color: #373737;
}
tbody tr {
  height: 30px;
}
tbody th {
  width: 30%;
  background-color: #000000;
  color: #ffffff;
}
tbody td {
  width: 22%;
  border: 1px solid #cdcdcd;
}
td input {
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}
.unedit {
  background-color: #c4c4c4;
}
</style>
