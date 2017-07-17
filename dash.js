var config = require('./config');
var dash_button = require('node-dash-button');
var Promise = require('promise');
var dash = dash_button(config.dash.MAC_address, 'en2', null, 'all');

dash.on("detected", function() {
    console.log("dash pressed");
    toggleStatus();
});

function request(target) {
    var https = require('https');
    console.log('Calling ' + target.name);
    var requestOptions = target.requestOptions;
    var body = '';
    var head = '';

    return new Promise((resolve, reject) => {
        var response = https.request(requestOptions, (result) => {

            result.setEncoding('utf8');

            result.on('data', (chunk) => {
                body += chunk;
            });

            result.on('error', (err) => {
                console.log('Error encountered while making request.');
                reject(err);
            });

            result.on('end', () => {

                var output = {
                    'head': result.headers,
                    'body': JSON.parse(body)
                };

                resolve(output);
            });
        });
        response.end();
    });
}


var toggleStatus = function() {
    var currentState = request(config.getProfile);

    currentState.done((value) => {
        console.log("Status: " + JSON.stringify(value.body.profile.status_text));

        if (value.body.profile.status_text === "") {
            request(config.statusLunch);
        } else {
            request(config.resetStatus);
        }
        console.log("Finished Request");
    });

    currentState.catch((reason) => {
        console.log(reason);
        process.abort();
    });


}