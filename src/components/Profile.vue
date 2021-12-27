<template>
  <div class="profile">
    <h2>プロフィール</h2>
    <table>
      <tbody>
        <tr class="md-row">
          <th class="label-name">名前</th>
          <td colspan="3">
            <input
              v-if="edit"
              type="text"
              class="input-name"
              v-model="profile.name"
              @input="setProfileData('name', profile.name)"
            />
            <div v-else class="input-name preview">{{ profile.name }}</div>
          </td>
        </tr>
        <tr class="md-row">
          <th class="label-gender">性別</th>
          <td>
            <v-select
              v-if="edit"
              class="input-gender"
              :options="['男性', '女性', '不詳']"
              v-model="profile.gender"
              @input="setProfileData('gender', profile.gender)"
            ></v-select>
            <div v-else class="input-gender preview">{{ profile.gender }}</div>
          </td>
          <th class="label-age">年齢</th>
          <td>
            <input
              v-if="edit"
              type="number"
              class="input-gender"
              v-model="profile.age"
              @input="setProfileData('age', profile.age)"
            />
            <div v-else class="input-gender preview">{{ profile.age }}</div>
          </td>
        </tr>
        <tr class="lg-row">
          <th class="label-belongings">所持品</th>
          <td colspan="3">
            <textarea
              type="text"
              class="input-belongings"
              v-model="profile.belongings"
              @input="setProfileData('belongings', profile.belongings)"
            ></textarea>
          </td>
        </tr>
        <tr class="lg-row">
          <th class="label-note">メモ</th>
          <td colspan="3">
            <textarea
              type="text"
              class="input-note"
              v-model="profile.personalNote"
              @input="setProfileData('personalNote', profile.personalNote)"
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import vSelect from "vue-select";
export default {
  name: "Profile",
  components: {
    vSelect,
  },
  props: {
    edit: Boolean,
  },
  computed: {
    ...mapState(["profile"]),
  },
  methods: {
    setProfileData(key, value) {
      this.$store.commit("setProfile", { key: key, value: value });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}
table,
tbody {
  width: 100%;
  text-align: center;
}
.md-row,
.md-row th,
.md-row td {
  height: 40px;
}
.lg-row,
.lg-row th,
.lg-row td {
  height: 80px;
}
tbody th {
  width: 20%;
  background-color: #000000;
  color: #ffffff;
  font-size: clamp(16px, 1.8vw, 1rem);
  font-weight: bold;
}
tbody td {
  position: relative;
  width: 30%;
  border: 1px solid #cdcdcd;
}
.input-gender >>> .vs__dropdown-toggle {
  height: 100%;
  border: none;
}
.input-gender >>> .vs__search,
.input-gender >>> .vs__clear {
  display: none;
}
input[type="text"],
input[type="number"],
textarea {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 10px;
  box-sizing: border-box;
}
input[type="text"],
textarea {
  text-align: left;
}
input[type="number"] {
  text-align: center;
}
textarea {
  padding: 10px;
  overflow-y: scroll;
  resize: none;
}
.preview {
  font-weight: bold;
}
</style>
