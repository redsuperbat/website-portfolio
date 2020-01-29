<template>
<v-container id="main">
 <v-timeline>
        <v-timeline-item>
            <v-card height="300" width="300">
            </v-card>
        </v-timeline-item>
        <v-timeline-item>
            <v-card height="300" width="300">
            </v-card>
        </v-timeline-item>
        <v-timeline-item>
            <v-card height="300" width="300">
                <v-card-title>
                    Hello
                </v-card-title>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</v-container>
</template>

<script>
export default {
  name: 'Experience'
}
</script>

<style scoped>
#main{
    display: flex;
    justify-content: center;
}
</style>
