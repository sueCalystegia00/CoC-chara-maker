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
          v-for="status in statusList"
          :key="status.displayName"
          class="status-row"
        >
          <th class="displayname">{{ status.displayName }}</th>
          <td class="default">{{ status.default }}</td>
          <td class="revised">{{ status.revised }}</td>
          <td class="define">{{ status.define }}</td>
        </tr>
      </tbody>
    </table>
    {{ status }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Status",
  computed: {
    ...mapState(["statusList"]),
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
}
thead th {
  font-size: 0.8rem;
  color: #373737;
}
tbody {
  font-size: 1.2rem;
}
tbody th {
  height: 1.2rem;
  background-color: #000000;
  color: #ffffff;
}
tbody td {
  border: 1px solid #cdcdcd;
}
.define {
  background-color: #c4c4c4;
}
</style>
