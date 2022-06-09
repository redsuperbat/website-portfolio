const en = [
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
];
const sv = [
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
];

export const cards = { en, sv };

export type Card = typeof sv[0];
