// List of available locales
const availableLocales = ['en', 'da', 'de', 'es', 'fr', 'it', 'nl', 'no', 'pt', 'sv'];

// Default locale.
const defaultLanguage = 'en';

// Manually detect users' language to detect languages such as `en-GB`. Strip to `en`.
let language = (window.navigator.userLanguage || window.navigator.language).substr(0, 2);

// If `?lang=` exists in URL params & is valid, then use that instead.
const urlParams = new URLSearchParams(window.location.search);
const langFromUrl = urlParams.get('lang');
if (langFromUrl && availableLocales.includes(langFromUrl)) {
  language = langFromUrl
}

// Set `pageLanguage` only if its available within our locales, otherwise default.
let pageLanguage = defaultLanguage;
if (availableLocales.includes(language)) {
  pageLanguage = language;
}

// Locale translations.
const locales = {

  // EN
  en: {
    "marketing-disclosure": "Marketing Disclosure",
    "ios": {
      "heading": "Turn on<br>Protection",
      "t-1": "iPhone Devices without Protection can be exposed to Viruses and Malware. Unprotected users can also experiences a much faster Battery Drain.",
      "t-2": "Install and Activate iPhone Protection to Safeguard this Device from Harmful Software and Performance Issues.",
      "cta": "Protect My Device"
    },
    "android": {
      "heading": "Security & Privacy",
      "at-risk": "Is Your Device at Risk?",
      "alert": "1 alert",
      "install-heading": "Install Protection App",
      "t-1": "An increasing number of Android Applications contain harmful Viruses & Malware. It is recommended to Protect your Device with a complete Android Antivirus.",
      "cta": "Protect This Android",
      "protection-for": "Protection for Android",
      "device-check": "Device Check",
      "app-security": "App Security",
      "t-2": "Security Scan Required to Check Device",
      "protection-availability": "Protection Availability",
      "t-3": "Protection Available for this Device"
    }
  },

  // DA
  da: {
    "marketing-disclosure": "Videregivelse til markedsføring",
    "ios": {
      "heading": "Slå beskyttelse<br>til",
      "t-1": "iPhone-enheder uden beskyttelse kan blive eksponeret for virus og malware.",
      "t-2": "Installer og aktiver iPhone-beskyttelse for at beskytte denne enhed mod skadelig software og performanceproblemer.",
      "cta": "Beskyt min enhed"
    },
    "android": {
      "heading": "Sikkerhed og privatliv",
      "at-risk": "Er din enhed i fare?",
      "alert": "1 alarm",
      "install-heading": "Installer beskyttelses-app",
      "t-1": "Et stigende antal Android-applikationer indeholder skadelig virus og malware. Det anbefales at beskytte din enhed med en komplet Android antivirus",
      "cta": "Beskyt denne Android",
      "protection-for": "Beskyttelse til Android",
      "device-check": "Enhedstjek",
      "app-security": "App-sikkerhed",
      "t-2": "Sikkerhedsscanning kræves for at tjekke enhed",
      "protection-availability": "Tilgængelighed for beskyttelse",
      "t-3": "Beskyttelse tilgængelig for denne enhed"
    }
  },

  // DE
  de: {
    "marketing-disclosure": "Marketing-Transparenz",
    "ios": {
      "heading": "Schutz aktivieren",
      "t-1": "iPhone-Geräte ohne Schutz können Viren und Malware ausgesetzt sein. Ohne Schutz kann auch der Akkuverbrauch viel höher sein.",
      "t-2": "Installieren und aktivieren Sie den iPhone-Schutz, um dieses Gerät vor schädlicher Software und Leistungsproblemen zu schützen.",
      "cta": "Mein Gerät schützen"
    },
    "android": {
      "heading": "Schutz & Datenschutz",
      "at-risk": "Ist Ihr Gerät gefährdet?",
      "alert": "1 Warnhinweis",
      "install-heading": "Schutz-App installieren",
      "t-1": "Immer mehr Android-Apps enthalten schädliche Viren und Malware. Es empfiehlt sich, Android-Geräte mit einem vollständigen Antivirus zu schützen.",
      "cta": "Dieses Android schützen",
      "protection-for": "Dieses Android schützen",
      "device-check": "Geräteprüfung",
      "app-security": "App-Sicherheit",
      "t-2": "Sicherheitsscan zum Überprüfen des Geräts erforderlich",
      "protection-availability": "Schutzverfügbarkeit",
      "t-3": "Schutz für dieses Gerät verfügbar"
    }
  },

  // ES
  es: {
    "marketing-disclosure": "Divulgación de marketing",
    "ios": {
      "heading": "Activar la<br>protección",
      "t-1": "Los dispositivos iPhone sin protección pueden verse expuestos a virus y malware. Los usuarios no protegidos también pueden experimentar un mayor consumo de batería.",
      "t-2": "Instale y active la protección para iPhone y proteja su dispositivo del software dañino y de los problemas de rendimiento.",
      "cta": "Proteger mi dispositivo"
    },
    "android": {
      "heading": "Seguridad y privacidad",
      "at-risk": "¿Está su dispositivo en riesgo?",
      "alert": "1 alerta",
      "install-heading": "Instalar aplicación de protección",
      "t-1": "Un mayor número de aplicaciones Android contienen virus y malware dañino. Es recomendable que proteja su dispositivo con un antivirus completo para Android.",
      "cta": "Proteger este Android",
      "protection-for": "Protección para Android",
      "device-check": "Comprobación del dispositivo",
      "app-security": "Seguridad de la aplicación",
      "t-2": "El análisis de seguridad requiere que se compruebe el dispositivo",
      "protection-availability": "Disponibilidad de la protección",
      "t-3": "Protección disponible para este dispositivo"
    }
  },

  // FR
  fr: {
    "marketing-disclosure": "Déclaration de marketing",
    "ios": {
      "heading": "Activez votre<br>protection",
      "t-1": "Les iPhone non protégés peuvent être exposés à des virus et malwares. De plus, la batterie des appareils non protégés peut se décharger très vite.",
      "t-2": "Installez et activez votre protection iPhone pour protéger votre appareil des logiciels malveillants et des problèmes de performance. Protéger mon appareil",
      "cta": "Sécurité et vie privée"
    },
    "android": {
      "heading": "Sécurité et vie privée",
      "at-risk": "Votre appareil est-il exposé à des risques ?",
      "alert": "1 alerte",
      "install-heading": "Installer l'appli de protection.",
      "t-1": "De plus en plus d'applications Android contiennent des virus et logiciels malveillants. Il est recommandé de protéger votre appareil avec un antivirus Android intégral.",
      "cta": "Protéger cet appareil Android",
      "protection-for": "Protection sur Android",
      "device-check": "Analyse de l'appareil",
      "app-security": "Sécurité de l'appli",
      "t-2": "Analyse de sécurité nécessaire pour vérifier l'état de l'appareil",
      "protection-availability": "Disponibilité de la protection",
      "t-3": "Protection disponible pour cet appareil"
    }
  },

  // IT
  it: {
    "marketing-disclosure": "Informativa di marketing",
    "ios": {
      "heading": "Attiva la<br>protezione",
      "t-1": "Dispositivi come iPhone senza protezione possono essere vulnerabili a virus e malware. Gli utenti senza protezione possono inoltre vedere esaurirsi la batteria molto in fretta.",
      "t-2": "Installa e attiva la protezione per iPhone per proteggere questo dispositivo da software dannoso e problemi di prestazioni.",
      "cta": "Proteggi il mio dispositivo"
    },
    "android": {
      "heading": "Sicurezza e privacy",
      "at-risk": "Il tuo dispositivo è in pericolo?",
      "alert": "1 avviso",
      "install-heading": "Installa l'app di protezione",
      "t-1": "Un numero sempre maggiore di applicazioni per Android contiene virus e malware dannosi. Si consiglia di proteggere il proprio dispositivo con un antivirus per Android completo.",
      "cta": "Proteggi questo Android",
      "protection-for": "Protezione per Android",
      "device-check": "Verifica del dispositivo",
      "app-security": "Sicurezza delle app",
      "t-2": "Scansione di sicurezza richiesta per la verifica del dispositivo",
      "protection-availability": "Disponibilità della protezione",
      "t-3": "Protezione disponibile per questo dispositivo"
    }
  },

  // NL
  nl: {
    "marketing-disclosure": "Marketingontsluiting",
    "ios": {
      "heading": "Bescherming inschakelen",
      "t-1": "iPhone-apparaten zonder bescherming kunnen worden blootgesteld aan virussen en malware. Onbeschermde gebruikers kunnen ook last hebben van een batterij die veel sneller leegloopt.",
      "t-2": "Installeer en activeer iPhone-bescherming om dit apparaat te beschermen tegen schadelijke software en prestatieproblemen.",
      "cta": "Bescherm mijn apparaat"
    },
    "android": {
      "heading": "Beveiliging en privacy",
      "at-risk": "Loopt uw apparaat risico?",
      "alert": "1 alarm",
      "install-heading": "Installeer de beschermingsapp",
      "t-1": "Een toenemend aantal Android-apps bevatten schadelijke virussen en malware. We raden u aan om uw apparaat te beschermen met een compleet Android-antivirusprogramma.",
      "cta": "Bescherm deze Android",
      "protection-for": "Bescherming voor Android",
      "device-check": "Apparaatcontrole",
      "app-security": "Appbeveiliging",
      "t-2": "Beveiligingsscan vereist om apparaat te controleren",
      "protection-availability": "Beschermingsbeschikbaarheid",
      "t-3": "Bescherming beschikbaar voor dit apparaat"
    }
  },

  // NO
  no: {
    "marketing-disclosure": "Markedsføringsavsløring",
    "ios": {
      "heading": "Slå på<br>beskyttelsen",
      "t-1": "iPhone-enheter uten beskyttelse kan bli utsatt for virus og skadelig programvare. Ubeskyttede brukere kan få tappet batteriet raskere.",
      "t-2": "Installer og aktiver iPhone-beskyttelse for å beskytte denne enheten mot skadelig programvare og ytelsesproblemer.",
      "cta": "Beskytt enheten min"
    },
    "android": {
      "heading": "Sikkerhet & privatliv",
      "at-risk": "Er enheten din utsatt?",
      "alert": "1 varsel",
      "install-heading": "Installer beskyttelsesappen",
      "t-1": "Et økende antall Android-apper inneholder skadelige virus og skadelig programvare. Det anbefales å beskytte enheten med en komplett antivirusprogramvare mot Android-virus.",
      "cta": "Beskytt denne Androiden",
      "protection-for": "Beskyttelse for Android",
      "device-check": "Enhetssjekk",
      "app-security": "App-sikkerhet",
      "t-2": "Sikkerhetsskanning kreves for å sjekke enheten",
      "protection-availability": "Beskyttelsetilgjengelighet",
      "t-3": "Beskyttelse er tilgjengelig for denne enheten"
    }
  },

  // PT
  pt: {
    "marketing-disclosure": "Aviso de marketing",
    "ios": {
      "heading": "Ativar a<br>proteção",
      "t-1": "Os iPhones sem proteção podem ficar expostos a vírus e malware. Os utilizadores desprotegidos também poderão notar um consumo excessivo da bateria.",
      "t-2": "Instale e ative a proteção para iPhone para proteger este dispositivo contra software perigoso e problemas de desempenho.",
      "cta": "Proteger o meu dispositivo"
    },
    "android": {
      "heading": "Segurança e Privacidade",
      "at-risk": "O seu dispositivo encontra-se em risco?",
      "alert": "1 alerta",
      "install-heading": "Instalar aplicação de proteção",
      "t-1": "Um número cada vez maior de aplicações para Android contém malware e vírus perigosos. É recomendado que proteja o seu dispositivo com um antivírus completo para Android.",
      "cta": "Proteger este dispositivo Android",
      "protection-for": "Proteção para Android",
      "device-check": "Verificação de dispositivo",
      "app-security": "Segurança de aplicações",
      "t-2": "Análise de segurança necessária para verificar o dispositivo",
      "protection-availability": "Disponibilidade da proteção",
      "t-3": "Proteção disponível para este dispositivo"
    }
  },

  // SV
  sv: {
    "marketing-disclosure": "Marknadsföringsavslöjande",
    "ios": {
      "heading": "Aktivera skydd",
      "t-1": "iPhone-enheter utan skydd kan utsättas för virus och skadlig kod. Oskyddade användare kan även uppleva att batteriet förbrukas mycket snabbare.",
      "t-2": "Installera och aktivera iPhone-skydd för att skydda enheten mot skadlig kod och prestandaproblem.",
      "cta": "Skydda min enhet"
    },
    "android": {
      "heading": "Säkerhet och integritet",
      "at-risk": "Är din enhet utsatt för risk?",
      "alert": "1 varning",
      "install-heading": "Installera skyddsapp",
      "t-1": "Ett ökande antal Android-appar innehåller virus och skadlig kod. Det rekommenderas att du skyddar din enhet med ett heltäckande antivirus för Android.",
      "cta": "Skydda denna Android-enhet",
      "protection-for": "Android-skydd",
      "device-check": "Enhetskontroll",
      "app-security": "Appsäkerhet",
      "t-2": "Säkerhetsskanning krävs för att kontrollera enhet",
      "protection-availability": "Tillgängligt skydd",
      "t-3": "Tillgängligt skydd för denna enhet"
    }
  },
};

// Get all page elements to be translated.
const elements = document.querySelectorAll('[data-i18n]');

// Get JSON object of translations.
const json = locales[pageLanguage];

// On each element, found the translation from JSON file & update.
elements.forEach((element, index) => {
  const key = element.getAttribute('data-i18n');
  const text = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), json);
  element.innerHTML = text;
});
