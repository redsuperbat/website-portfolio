export interface Header {
  home: string;
  portfolio: string;
  about: string;
  contact: string;
}

export interface ContactPage {
  header: string;
  email: string;
  message: string;
  subject: string;
  hint_wrong: string;
  hint_correct: string;
  hint_required: string;
  placeholder_email: string;
  placeholder_message: string;
  placeholder_subject: string;
  submit: string;
}

export interface AboutPage {
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  resume: string;
}

export interface Description {
  span1: string;
  span2: string;
  span3: string;
  span4: string;
}

export interface HomePage {
  description: Description;
  scroll: string;
}

export interface Card {
  title: string;
  description: string;
  url: string;
  img: string;
  language: string;
}

export interface ProjectPage {
  title: string;
  cards: Card[];
}

export interface UiLabels {
  header: Header;
  contactPage: ContactPage;
  aboutPage: AboutPage;
  homePage: HomePage;
  projectPage: ProjectPage;
}
