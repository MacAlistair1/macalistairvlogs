// Retrieve browser information
const browser = {
  name: navigator.userAgent,
  version: navigator.appVersion,
  engine: navigator.product,
  engine_version: navigator.productSub,
};

console.log("Browser", browser);

// Retrieve operating system information
const os = {
  name: navigator.platform,
  version: navigator.oscpu,
};

console.log("OS", os);

// Retrieve screen information
const screenInfo = {
  resolution: `${window.screen.width}x${window.screen.height}`,
  color_depth: window.screen.colorDepth,
  current_resolution: `${window.innerWidth}x${window.innerHeight}`,
};

console.log("Screen", screen);


// Retrieve user agent
const userAgent = navigator.userAgent;

// Assemble the data object
const data = {
  actions: "",
  activity: {
    current: window.location.pathname,
    base_uri: window.location.href,
    referal: document.referrer,
    utm_source: null,
    utm_ab: null,
    utm_campaign: null,
    utm_medium: null,
  },
  browser,
  cpu: navigator.hardwareConcurrency
    ? navigator.hardwareConcurrency.toString()
    : "",
  device: {},
  fingerprint: Math.floor(Math.random() * 10000000000),
  language: navigator.language,
  mobile: {
    is_mobile: /Mobi|Android/i.test(navigator.userAgent),
    type: null,
  },
  os,
  other: {
    installed_Plugin: Array.from(navigator.plugins)
      .map((plugin) => plugin.name)
      .join(", "),
    mime_type: {
      installed: !!navigator.mimeTypes.length,
      available: Array.from(navigator.mimeTypes)
        .map((mimeType) => mimeType.type)
        .join(", "),
    },
  },
  screen: screenInfo,
  server: screenInfo,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  userAgent,
};

// Convert the data to JSON
const jsonData = JSON.stringify(data);
// console.log(jsonData);

// Make the POST request to your tracking API URL
//   fetch('YOUR_TRACKING_API_URL', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: jsonData,
//   })
//   .then(response => {
//     if (response.ok) {
//       console.log('Data sent successfully.');
//     } else {
//       console.error('Failed to send data.');
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
