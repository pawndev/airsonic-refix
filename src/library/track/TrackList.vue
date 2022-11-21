<template>
  <BaseTable>
    <BaseTableHead>
      <th v-if="!noArtist" class="text-left d-none d-lg-table-cell">
        Artist
      </th>
      <th v-if="!noAlbum" class="text-left d-none d-md-table-cell">
        Album
      </th>
      <th v-if="!noDuration" class="text-right d-none d-md-table-cell">
        Duration
      </th>
    </BaseTableHead>
    <tbody>
      <tr v-for="(item, index) in tracksByDisc" :key="index"
          :class="{'active': item.id === playingTrackId}"
          :draggable="true" @dragstart="dragstart(item.id, $event)"
          @click="item.id && play(index)">
        <CellTrackNumber v-if="item.id"
                         :active="item.id === playingTrackId && isPlaying"
                         :value="item.track || index + 1"
        />
        <CellDiscNumber v-if="item.discNumber && !item.id" :value="item.discNumber" />
        <CellTitle v-if="item.id" :track="item" />
        <CellArtist v-if="!noArtist && item.id" :track="item" />
        <CellAlbum v-if="!noAlbum && item.id" :track="item" />
        <CellDuration v-if="!noDuration && item.id" :track="item" />
        <CellActions v-if="item.id" :track="item">
          <slot name="context-menu" :index="index" :item="item" />
        </CellActions>
      </tr>
    </tbody>
  </BaseTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import CellDuration from '@/library/track/CellDuration.vue'
  import CellArtist from '@/library/track/CellArtist.vue'
  import CellAlbum from '@/library/track/CellAlbum.vue'
  import CellTrackNumber from '@/library/track/CellTrackNumber.vue'
  import CellActions from '@/library/track/CellActions.vue'
  import CellDiscNumber from './CellDiscNumber.vue'
  import CellTitle from '@/library/track/CellTitle.vue'
  import BaseTable from '@/library/track/BaseTable.vue'
  import BaseTableHead from '@/library/track/BaseTableHead.vue'
  import { Track } from '@/shared/api'

  export default defineComponent({
    components: {
      BaseTableHead,
      BaseTable,
      CellTitle,
      CellActions,
      CellTrackNumber,
      CellAlbum,
      CellArtist,
      CellDuration,
      CellDiscNumber
    },
    props: {
      tracks: { type: Array, required: true },
      noAlbum: { type: Boolean, default: false },
      noArtist: { type: Boolean, default: false },
      noDuration: { type: Boolean, default: false },
      displayDisc: { type: Boolean, default: false }
    },
    data() {
      let finalTracks: any[] = []
      const tracksByDisc: {[discNumber: string]: Track[]} = {}
      for (const track of (this.tracks as Track[])) {
        const currentDisc = track.discNumber || 'default'
        tracksByDisc[currentDisc] = [...(tracksByDisc[currentDisc] ? tracksByDisc[currentDisc] : []), track]
      }
      if (Object.keys(tracksByDisc).length === 1 && tracksByDisc.default) {
        finalTracks = [...tracksByDisc.default]
      } else {
        for (const disc in tracksByDisc) {
          finalTracks = [...finalTracks, { discNumber: disc }, ...tracksByDisc[disc]]
        }
      }
      console.log(finalTracks)
      return {
        tracksByDisc: this.displayDisc ? finalTracks : this.tracks,
      }
    },
    computed: {
      isPlaying(): boolean {
        return this.$store.getters['player/isPlaying']
      },
      playingTrackId(): any {
        return this.$store.getters['player/trackId']
      },
    },
    methods: {
      play(index: number) {
        if ((this.tracks as any)[index].id === this.playingTrackId) {
          return this.$store.dispatch('player/playPause')
        }
        return this.$store.dispatch('player/playTrackList', {
          index,
          tracks: this.tracks,
        })
      },
      dragstart(id: string, event: any) {
        event.dataTransfer.setData('id', id)
      },
    }
  })
</script>
