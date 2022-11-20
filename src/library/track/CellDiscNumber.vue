<template functional>
  <span>
    <td class="disc-td">
      <Icon class="icon" icon="disc" />
    </td>
    <td>
      <span class="number">{{ props.value || '-' }}</span>
    </td>
  </span>
</template>

<style scoped>
td {
  width: 50px;
  font-size: 20px;
}
</style>
