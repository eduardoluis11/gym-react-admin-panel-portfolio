// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

/* Service Worker de Firebase, el cual me permite recibir notificaciones push en el navegador en el segundo plano,
* y me permite generar el Token IID para generar las notificaciones Push (fuente de gran parte del código:
* Documentación oficial de google en: https://firebase.google.com/docs/cloud-messaging/js/receive#web_7 ).
* */

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
//   apiKey: "apiKey",
//   authDomain: "authDomain",
//   projectId: "projectId",
//   storageBucket: "storageBucket",
//   messagingSenderId: "messagingSenderId",
//   appId: "appId:",
//   measurementId: "measurementId"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

/* To set options, call onBackgroundMessage in firebase-messaging-sw.js. In this example, we create a notification with
* title, body and icon fields.
* */
messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // // Customize notification here
  // const notificationTitle = 'Background Message Title';
  // const notificationOptions = {
  //   body: 'Background Message body.',
  //   icon: '/firebase-logo.png'
  // };
  //
  // self.registration.showNotification(notificationTitle, notificationOptions);
});



// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";
//
// import { onBackgroundMessage } from "firebase/messaging/sw";
//
// /* Service worker, el cual me permite recibir notificaciones push en el navegador en el segundo plano, y me permite
// * generar el Token IID para generar las notificaciones Push (fuente de gran parte del código: Documentación oficial de
// * google en: https://firebase.google.com/docs/cloud-messaging/js/receive#web_1 ).
// *
// * Use la versión "modular" del codigo, NO la API de compatibilidad.
// * */
//
// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// const firebaseApp = initializeApp({
//   apiKey: "apiKey",
//   authDomain: "authDomain",
//   projectId: "projectId",
//   storageBucket: "storageBucket",
//   messagingSenderId: "messagingSenderId",
//   appId: "appId:",
//   measurementId: "measurementId"
// });
//
// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = getMessaging(firebaseApp);

// import { getMessaging } from "firebase/messaging/sw";


// // const messaging = getMessaging();
// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };
//
//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });


// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here. Other Firebase libraries
// // are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
//
// /* Service Worker de Firebase, el cual me permite recibir notificaciones push en el navegador en el segundo plano,
// * y me permite generar el Token IID para generar las notificaciones Push (fuente de gran parte del código:
// * Documentación oficial de google en: https://firebase.google.com/docs/cloud-messaging/js/receive#web_1 ).
// * */
//
// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//   apiKey: "apiKey",
//   authDomain: "authDomain",
//   projectId: "projectId",
//   storageBucket: "storageBucket",
//   messagingSenderId: "messagingSenderId",
//   appId: "appId:",
//   measurementId: "measurementId"
// });

// REACTIVAR DESPUES.
// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();
//
// /* Esto me permite recibir las Notificaciones Push en el navegador en el segundo plano, es decir, me envia las
// * notificaciones push si el navegador está minimizado, o si estoy fuera del navegador web (fuente: Documentación
// * de Google en: https://firebase.google.com/docs/cloud-messaging/js/receive#web_3 ).
// *
// * El título de la notificación push va a ser el título que yo personalmente le ponga al título de esa notificación
// * push.
// *
// * Y, similarmente, el cuerpo de la notificación push va a ser el cuerpo que yo personalmente le ponga al cuerpo de
// * esa notificación.
// *
// * El icono de la notificación no importa mucho. En este caso, yo le puse el logo de Firebase, pero puedo ponerle
// * cualquier otra imagen que yo quiera.
// * */
// messaging.onBackgroundMessage((payload) => {
//
//   // MENSAJE EN LA CONSOLA, pero no creo que lo vaya a borrar: esto imprime la notificacion push en el inspector
//   console.log(
//     '[firebase-messaging-sw.js] Received background message ',
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: '/firebase-logo.png'
//   };
//
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });


// // Import and configure the Firebase SDK
// // These scripts are made available when the app is served or deployed on Firebase Hosting
// // If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
// importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');
// importScripts('/__/firebase/init.js');
//
// // const messaging = firebase.messaging();
//
// /**
//  * Here is the code snippet to initialize Firebase Messaging in the Service
//  * Worker when your app is not hosted on Firebase Hosting.
//
//  // Give the service worker access to Firebase Messaging.
//  // Note that you can only use Firebase Messaging here. Other Firebase libraries
//  // are not available in the service worker.
//  importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
//  importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');
//
//  // Initialize the Firebase app in the service worker by passing in
//  // your app's Firebase config object.
//  // https://firebase.google.com/docs/web/setup#config-object
//  firebase.initializeApp({
//    apiKey: 'api-key',
//    authDomain: 'project-id.firebaseapp.com',
//    databaseURL: 'https://project-id.firebaseio.com',
//    projectId: 'project-id',
//    storageBucket: 'project-id.appspot.com',
//    messagingSenderId: 'sender-id',
//    appId: 'app-id',
//    measurementId: 'G-measurement-id',
//  });
//
//  // Retrieve an instance of Firebase Messaging so that it can handle background
//  // messages.
//  const messaging = firebase.messaging();
//  **/
//
// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here. Other Firebase libraries
// // are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');
//
// // // Initialize the Firebase app in the service worker by passing in
// // // your app's Firebase config object.
// // // https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//    apiKey: 'api-key',
//    authDomain: 'project-id.firebaseapp.com',
//    databaseURL: 'https://project-id.firebaseio.com',
//    projectId: 'project-id',
//    storageBucket: 'project-id.appspot.com',
//    messagingSenderId: 'sender-id',
//    appId: 'app-id',
//    measurementId: 'G-measurement-id',
//
// });
//
// // const firebaseConfig = {
// //   apiKey: "apiKey",
// //   authDomain: "authDomain",
// //   projectId: "projectId",
// //   storageBucket: "storageBucket",
// //   messagingSenderId: "messagingSenderId",
// //   appId: "appId:",
// //   measurementId: "measurementId"
// // };
//
// // const admin = require('firebase-admin');
//
// // const serviceAccount = require('./path/to/your/serviceAccountKey.json');
//
// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount)
// // });
//
// // var functions = require('firebase-functions');
// // var admin = require('firebase-admin');
// // var cors = require('cors')({origin: true});
//
// // // Este es mi propio Service Account
// // var serviceAccount = require("./pushnotifications-bc184-firebase-adminsdk-gnk4n-eee995c209.json");
//
// /* Esto tiene la URL de la base de datos de Firebase.
// *
// * ESTO DEBE CONTENER LA URL DE MI BASE DE DATOS DE FIREBASE, NO LA DE MAX de Udemy.
// *
// * Voy a sacar la URL de mi realtime database de Firebase de mi variable de entorno de mi archivo .env.
// * */
// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount),
// //   databaseURL: 'https://pushnotifications-bc184-default-rtdb.europe-west1.firebasedatabase.app',
// //   // databaseURL: 'https://pwagram-99adf.firebaseio.com/'
// // });
//
//
// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();
//
// // If you would like to customize notifications that are received in the
// // background (Web app is closed or not in browser focus) then you should
// // implement this optional method.
// // Keep in mind that FCM will still show notification messages automatically
// // and you should use data messages for custom notifications.
// // For more info see:
// // https://firebase.google.com/docs/cloud-messaging/concept-options
// messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };
//
//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
