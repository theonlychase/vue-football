<template>
  <div>
    <div>{{ tables.group }}</div>
    <div v-for="({team}, i) in tables.table" :key="`team${i}`">
        {{ team.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Group',
  props: ['tables'],
}
</script>