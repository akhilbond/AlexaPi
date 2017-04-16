/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: "amzn1.application-oa2-client.23bf321d83174cf6994662b5c2997433",
    clientSecret: "5ae4ba482abbaab398a86c0baa912881e4832a3b165f1b5d9248f124ebd2ddcc",
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: "amazon.com",
    lwaApiHost: "api.amazon.com",
    validateCertChain: true,
    sslKey: "/home/pi/Desktop/alexa-avs-sample-app/samples/javaclient/certs/server/node.key",
    sslCert: "/home/pi/Desktop/alexa-avs-sample-app/samples/javaclient/certs/server/node.crt",
    sslCaCert: "/home/pi/Desktop/alexa-avs-sample-app/samples/javaclient/certs/ca/ca.crt",
    products: {
        "Raspberry_Pi": ["123456789"],
    },
};

module.exports = config;
