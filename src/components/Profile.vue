<template>
  <div class="profile">
    <h2>プロフィール</h2>
    <table>
      <tbody>
        <tr>
          <th class="label-name">名前</th>
          <td colspan="3"><input type="text" class="input-name" /></td>
        </tr>
        <tr>
          <th class="label-gender">性別</th>
          <td>
            <v-select
              class="input-gender"
              :options="['男性', '女性', '不詳']"
            ></v-select>
          </td>
          <th class="label-age">年齢</th>
          <td><input type="number" class="input-gender" /></td>
        </tr>
        <tr class="large">
          <th class="label-belongings">所持品</th>
          <td colspan="3">
            <textarea type="text" class="input-belongings"></textarea>
          </td>
        </tr>
        <tr class="large">
          <th class="label-note">メモ</th>
          <td colspan="3">
            <textarea type="text" class="input-note"></textarea>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import vSelect from "vue-select";
export default {
  name: "Profile",
  components: {
    vSelect,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
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
thead th {
  font-size: 0.5rem;
  color: #373737;
}
tbody tr {
  height: 40px;
}
tbody th {
  width: 20%;
  height: 100%;
  background-color: #000000;
  color: #ffffff;
  font-size: clamp(16px, 1.8vw, 1rem);
  font-weight: bold;
}
tbody td {
  position: relative;
  width: 30%;
  height: 100%;
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
.large {
  height: 80px;
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
  padding: 10px;
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
  overflow-y: scroll;
  resize: none;
}
</style>
