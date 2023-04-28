const {initializeApp, cert} = require('firebase-admin/app');
const {getMessaging} = require('firebase-admin/messaging');

const serviceAccount = {
  "type": "service_account",
  "project_id": "mymood-5b79e",
  "private_key_id": "5f59e9e79abffaa0af98266de6b46892728af3cb",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCnwBxt4Us4zb+2\nGU1gMJU5h+3Xk0s0kXhxVaHXc2jESLfyyYqWWsxKlXwVIKVlPKvtiq/rGz/mJR9i\nRU3YS0K8zbws4Nt8L8M0myyV06it8KBMl9YF/RItXWDVHibHYslgNxxDX+nG9Xbq\nhZu0jsFLmLHL5B9HvYJoyHgxffTHXyQoNtw8u1eVxJYMEsPC1tXBVaZnwEUQgHJL\n+jD4M7NAk86ss5f7/G5vlGQqKUk/An+N6kqoNoowle7H+GI2+ZeJVYKc7kH2wLbv\n2F7M1TVETPv4aKfuUYdSzuJEfzAuBFAwA8ZvTsdBHShBFlJkc9ryfkcKqiu46J+j\nh7l0EmJ1AgMBAAECggEAEzdnKlEyMEYljYM1gWzfU1FWdikJ5vI5JWaFXSx71mxs\nIhRjW1j4aRzZs4PjXocGPPZzs4+SENe00imVQs9QTFeXFF8H1aCVEIwsHde6zX4w\npsWH/3SfpfG5+3/yOkn/PpXhl3g/zApnfnMixJrL2tCZoX029h1n+H/qgOToawQ0\nFEXk3ORuAcT/B+oXhZGcktnJch5X4UQSM5npuUXxgkYTwbq2QLzMd4YzjdPD4dMz\n+G8Jw4YFDWabe2E1weUqxbCrEEK5i6FbHKfZkVGW9x11T4ldPOpFbZD/Ke3s+XNL\nRtOopntuU7V7x1MPFoclNArxotKmQ0Mfg2qhuIBCkQKBgQDZXnfPunb+vdTlGDEO\nH7wcjY3GGy4tRi2pVLqSmq6491WZYF668brNDjzoP0c1BjZRUFdMNsMUiHU8h86L\n/c6TKDB5+YodSMV9q/qL1ZCgquKw4a8erYH4f1h838JZn0iC1TMPVkh8Jrx6hLOs\nQF7a4x9Gbb0imDOt403PadM5aQKBgQDFkCuvNB5dKtTYSgd6AlbIzc/PqXJ3SBDj\nrTtyipwn0Xds+MW7hbGfUsIx53ZaNRypa1okzX4Cvrrlo3zqOAubIxYJ2efxhMaZ\nrie1ooJF+fyh+UqIpZuYlX1cjBonaTt6oDn696w6DHRfE1Ousmd+1aczkLENW+yN\nANs7puqTLQKBgCr8I3VQyndV0uP7BLhmTizXUVH7zgXl+uGhf8O+Ew9A2gyaoiEV\n7Hrgder3mH1D3Tn3SUwpCCrnUUfHE3Fbn546NFvqnQVtfqB7gfBlK1SadnnEJ31J\nkooxpK4NEcHnXc+BmbdOuMbUYjFYTK+jix5+C5FB4kUVFCMu8BQ0OTEBAoGAE1Hz\nA7I8Ge5bXD95FbRu2jpOTUeL2yBgDnPdcWketkIkxLJbW+hKI4OLXCf/ifjRsbu+\n2ASEgy41xslDKQCMGgLHX/VAWn0akuLWHUwkI0W8L/baFBzl53kPBmLpF9uRpn9O\nzD02SYL4SmfwchAeUOgB7ugCeIT50Bw6VE4ReI0CgYAmSuGVL4j8nK2gZLoKceKB\nLO/2oPe+ORi9NChZCijZZ5zns3JIsEJCgnuusJX5blwjoKb871a+QgksmWK/cpF9\npP+vP6xwDwZK5mnhxGSvg4z76Zw8uRQiUUgR0f4yPc2oSkNnC9jd4BE1byXIuIRn\nBOEXoMh1z7ospMx9MwLj7g==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-cd2mt@mymood-5b79e.iam.gserviceaccount.com",
  "client_id": "103107436271631795121",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cd2mt%40mymood-5b79e.iam.gserviceaccount.com"
}

initializeApp({credential: cert(serviceAccount)});

exports.sendNotification = async (notification, data = {}, fcmToken) => {
  const message = {
    token: fcmToken,
    notification,
    data,
  };

  await getMessaging().send(message);
};
