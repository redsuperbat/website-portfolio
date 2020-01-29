<template>
<v-card
    class="mx-auto"
    :max-width="$vuetify.breakpoint.mdAndUp ? 400 : 350"
    max-height="350"
    elevation="20"
    :href="cardInfo.url"
    target="_blank"
  >
    <v-img
      class="white--text align-end"
      height="180px"
      :src="cardInfo.img"
    >
      <v-card-title>{{cardInfo.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{cardInfo.language}}</v-card-subtitle>

    <v-card-text class="text--primary">
        {{cardInfo.description}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    cardInfo: Object
  }
}
</script>
