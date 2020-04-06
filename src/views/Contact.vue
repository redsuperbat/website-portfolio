<template>
  <v-container class="main">
    <p
      :class="{
        headline: $vuetify.breakpoint.mdAndUp,
        header: true,
        title: $vuetify.breakpoint.smAndDown
      }"
    >
      {{ contactPage.header }}
    </p>
    <v-card height="450" elevation="10">
      <v-container>
        <v-form ref="form">
          <v-text-field
            outlined
            :placeholder="contactPage.placeholder_subject"
            :label="contactPage.subject"
            v-model="subject"
          >
          </v-text-field>
          <v-textarea
            :label="contactPage.message"
            :placeholder="contactPage.placeholder_message"
            v-model="message"
            outlined
            height="335"
          >
          </v-textarea>
          <v-row justify="end" align="end">
            <v-btn @click="submit" rounded color="primary">
              {{ contactPage.submit }}
            </v-btn>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
    <Footer />
  </v-container>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "Contact",
  components: {
    Footer
  },
  data: function() {
    return {
      validEmail: false,
      subject: "",
      message: "",
      email: "",
      inputRules: [
        v => !!v || this.contactPage.hint_required,
        v => /.+@.+\..+/.test(v) || this.contactPage.hint_wrong
      ]
    };
  },
  props: {
    contactPage: Object
  },
  methods: {
    submit: function() {
      window.location.href =
        "mailto:max.netterberg@gmail.com?subject=" +
        this.subject +
        "&body=" +
        this.message;
    }
  }
};
</script>

<style scoped>
.main {
  width: 55vw;
}

.header {
  margin-top: 80px;
  text-align: center;
  color: white;
}

/* Extra small devices (phones, 960px and down) */
@media only screen and (max-width: 960px) {
  .main {
    width: 100vw;
  }
  .header {
    margin-top: 40;
  }
}
</style>
