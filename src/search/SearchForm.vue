<template>
  <div>
    <form class="form-inline my-2 my-lg-0" @submit.prevent="search">
      <input
        ref="search"
        v-hotkey="hotkey"
        v-model="query"
        class="form-control mr-sm-2" type="search"
        placeholder="Search">
    </form>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        query: ''
      }
    },
    computed: {
      hotkey() {
        return {
          '/': (this as any).focusSearch,
          esc: (this as any).unfocusSearch
        }
      }
    },
    methods: {
      search(): void {
        this.$router.push({ name: 'search', query: { q: this.query } })
      },
      focusSearch(): void {
        (this as any).$refs.search.focus()
      },
      unfocusSearch(): void {
        (this as any).$refs.search.blur()
      }
    }
  })
</script>
