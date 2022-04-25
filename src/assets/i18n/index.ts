const sv = {
  header: {
    home: 'Hem',
    portfolio: 'Portfolio',
    about: 'Om mig',
    contact: 'Kontakt',
  },
  contactPage: {
    header:
      'Kontakta mig gärna för allt mellan himmel och jord. Jag tar gärna en kaffe och pratar om tech eller intressanta projektidéer',
    email: 'Mejladress',
    message: 'Meddelande',
    subject: 'Ämne',
    hint_wrong: 'Felaktig mejladress',
    hint_correct: 'Riktig mejladress',
    hint_required: 'Emejl krävs',
    placeholder_email: 'namn@exempel.com',
    placeholder_message: 'Skriv ditt meddelande här...',
    placeholder_subject: 'Roligt ämne...',
    submit: 'Skicka',
  },
  aboutPage: {
    title: 'Om mig',
    paragraphs: [
      'Jag går femte året på min utbildning i Civilingenjörs-programmet i System Teknik och Samhälle (STS). STS-programmet kombinerar samhälle med ingenjörs-världen och ger breda perspektiv. STS innehåller många samhällskurser vilket gör att vi studenter lär oss titta kritiskt både på såväl kod som akademiska texter..',
      "Teknik, samhälle och gastronomi är mina tre största intressen. Det reflekteras i de projekt jag har gjort och jag tycker det är otroligt intressant hur man kan kombinera och uppnå synergieffekter med bra design av användargränssnitt, gastronomisk vetenskap och programmering. Projekt som 'Vinkällaren' är ett exempel på slutresultatet av just denna kombination av intressen.",
      'I framtiden ser jag mig själv omgiven av den senaste teknologin där jag jobbar i teknikens framkant. Automatisering med hjälp av Statistiskt lärande & Djuplärande som tillsammans blir Maskininlärning känns som den framtid jag vill ta del av och utveckla med likasinnade. Om du känner samma sak tveka inte att kontakta mig.',
    ],
    resume: 'Ladda ner mitt CV',
  },
  homePage: {
    description: {
      span1:
        'Ingenjörsstudent inom sociotekniska system vid Uppsala universitet. Med en master som specialiserar sig på IT med stora intressen för ',
      span2: 'AI ',
      span3: 'och ',
      span4: 'Webbutveckling.',
    },
    scroll: 'Scrolla ner...',
  },
  projectPage: {
    title: 'Portfolio',
    cards: [
      {
        title: 'Vinkällaren',
        description:
          'Detta är en mobilapplikation som hjälper dig att hålla reda på vinerna du äger. Skrivet av mig med Googles programspråk Dart, med ett ramverk som heter Flutter.',
        url: 'https://github.com/redsuperbat/wine_cellar',
        img: 'https://i.imgur.com/bXYqcne.png',
        language: 'Dart',
      },
      {
        title: 'Zigma Böcker',
        description:
          'Mobilapplikation for andrahandsförsäljning av kurslitteratur, skriven i Dart med ramverket Flutter. Utvecklade den här appen som en del av min kandidatexamen. Fullständig rapport hittas på github.',
        url: 'https://github.com/redsuperbat/zigma',
        img: 'https://i.imgur.com/rZNhjqC.png',
        language: 'Dart',
      },
      {
        title: 'Lagervaruhanterare',
        description:
          'En webapplikation jag skapade under ett arbetsprov som en del av ett sommarjobbssök. Denna app har uppdateringar i realtid med hjälp av websockets som är anslutna till en mysql-databas. Skrivet i vuejs, node och mysql.',
        url: 'https://github.com/redsuperbat/arbetsprov',
        img: 'https://i.imgur.com/R0E095R.jpg',
        language: 'html, css, javascript, mysql',
      },
      {
        title: 'Bildigenkänning',
        description:
          'Bildigenkänningsalgoritm som känner igen bilder genom att träna en modell från en enorm uppsättning bilder. Koden använder keras-biblioteket som körs ovanpå tensorflow.',
        url: 'https://github.com/redsuperbat/CIFAR-deep-learning',
        img: 'https://i.imgur.com/O9Zy2r3.png',
        language: 'Python',
      },
      {
        title: 'Beställningsapplikation',
        description:
          'Detta är ett projekt som gjorts av mig och 4 andra studenter för en kurs i människa-datorinteraktion. Målet var att göra en användarvänlig beställningsapp för hamburgare, samt att vara ett verktyg för orderhantering i köket.',
        url: 'https://github.com/redsuperbat/Hamburger-app',
        img: 'https://i.imgur.com/P6G3z1j.png',
        language: 'html, css, javascript',
      },
      {
        title: 'Url förkortare',
        description:
          'Jag utmanade mig själv att göra en url-förkortare så fort jag kunde. Två och en halv timme senare kom jag på det här. Med den här webbplatsen kan du förkorta dina webbadresser och skapa din egen efterföljare. Skrivet i Nodejs.',
        url: 'https://github.com/redsuperbat/url-shortener',
        img: 'https://i.imgur.com/mGUAAtp.jpg',
        language: 'javascript, Nodejs',
      },
      {
        title: 'ush.se chrome tillägg',
        description:
          'Ett chrome tillägg som använder sig av url-förkortnings api:et. Projektet använder en bundler som hetere Parcel och kan generera en qr-kod för den förkortade webbadressen. Qr-kod och förkortad länk kan kopieras till urklipp.',
        url: 'https://github.com/redsuperbat/url-shortener-chrome-extension',
        img: 'https://i.imgur.com/jpPzdXy.jpg',
        language: 'javascript, Nodejs',
      },
    ],
  },
};

const en = {
  header: {
    home: 'Home',
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
  },
  contactPage: {
    header:
      "Feel free to contact be about anything. I'm happy to just chat about tech or discuss new promising project ideas",
    email: 'E-mail',
    message: 'Message',
    subject: 'Subject',
    hint_wrong: 'Invalid E-mail address',
    hint_correct: 'Valid E-mail address',
    hint_required: 'E-mail required',
    placeholder_email: 'name@example.com',
    placeholder_message: 'Write your message here...',
    placeholder_subject: 'Interesting Subject...',
    submit: 'Send',
  },
  aboutPage: {
    title: 'About',
    paragraphs: [
      'I am currently studying the fifth year of the Engineer program in Sociotechnical Systems (STS). The STS program intertwines society and engineering and provides broad perspectives. STS takes a lot of social science courses within the program, which in turn makes us look critically at both code and academic texts.',
      "Technology, society and gastronomy are my three biggest interests. This reflects in the projects I have been working on. I am incredibly interested in how to combine good user experience design, gastronomic science and programming. Projects like 'Wine Cellar' is a good example of the end result because of this interest.",
      "In the future, I see myself surrounded by new technology where I work at the forefront. Automation with the help of statistical learning & deep learning that together become machine learning feels like the future I want to share and develop with like-minded people. If you feel the same don't hesitate to contact me.",
    ],
    resume: 'Download my resume',
  },
  homePage: {
    description: {
      span1:
        'Engineering student in sociotechnical systems at Uppsala University. The master specializes in IT and I have a big interest in ',
      span2: 'AI ',
      span3: 'and ',
      span4: 'Web-development.',
    },
    scroll: 'Scroll down...',
  },
  projectPage: {
    title: 'Portfolio',
    cards: [
      {
        title: 'Wine Cellar',
        description:
          "This is an mobile application that helps you keep track of the wines that you own. Written by me in Google's language dart, with the SDK Flutter",
        url: 'https://github.com/redsuperbat/wine_cellar',
        img: 'https://i.imgur.com/bXYqcne.png',
        language: 'Dart',
      },
      {
        title: 'Zigma Books',
        description:
          'Second hand book selling Mobile application written in Dart with Flutter SDK. Developed this app as a part of my bachelors dissertion. Full report found on github.',
        url: 'https://github.com/redsuperbat/zigma',
        img: 'https://i.imgur.com/rZNhjqC.png',
        language: 'Dart',
      },
      {
        title: 'Stock Manager',
        description:
          'Web-app I made as a part of a work-application. This app features real time data updates with websockets that are connected to a mysql database. Written in vuejs, node and mySql.',
        url: 'https://github.com/redsuperbat/arbetsprov',
        img: 'https://i.imgur.com/R0E095R.jpg',
        language: 'html, css, javascript, mysql',
      },
      {
        title: 'Image Recognition',
        description:
          'Deep learning algorithm that recognizes pictures by training a model from a huge set of pictures. The code utilizes the keras library which is able to run on top of tensorflow.',
        url: 'https://github.com/redsuperbat/CIFAR-deep-learning',
        img: 'https://i.imgur.com/O9Zy2r3.png',
        language: 'Python',
      },
      {
        title: 'Ordering Application',
        description:
          'This is a project made by 5 students for a course in human-computer interaction. The goal was to make a user friendly burger ordering app, as well as being a tool for order-slip-management in the kitchen.',
        url: 'https://github.com/redsuperbat/Hamburger-app',
        img: 'https://i.imgur.com/P6G3z1j.png',
        language: 'html, css, javascript',
      },
      {
        title: 'Url shortener',
        description:
          'I challanged myself in making a url-shortener as fast as i could. Two and half hours later I came up with this. Using this site you can shorten your urls and create your own slug. Written in Nodejs.',
        url: 'https://github.com/redsuperbat/url-shortener',
        img: 'https://i.imgur.com/mGUAAtp.jpg',
        language: 'javascript, Nodejs',
      },
      {
        title: 'ush.se chrome extension',
        description:
          'A chrome extension that consumes the url - shortener api. Uses parcel as a bundler and can generate a qr-code for the shortened url. The qr and link can be copied to clipboard.',
        url: 'https://github.com/redsuperbat/url-shortener-chrome-extension',
        img: 'https://i.imgur.com/jpPzdXy.jpg',
        language: 'javascript, Nodejs',
      },
    ],
  },
};

export type Content = typeof sv;
export type TranslatedContent = typeof translatedContent;

export const translatedContent: Record<'sv' | 'en', Content> = {
  sv,
  en,
};
