<template>
  <div class="status">
    ステータス
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
          class="status"
        >
          <th>{{ status.displayName }}</th>
          <td>{{ status.default }}</td>
          <td>{{ status.revised }}</td>
          <td>{{ status.define }}</td>
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
.Status {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
