// mindbody.js
// Replace source_name, password and site_id values in `var params`

var soap = require('soap');

module.exports = {
    getClasses: function (yourParams) {
        var url = "https://api.mindbodyonline.com/0_5/ClassService.asmx?wsdl";
        soap.createClient(url, function (err, client) {
            if (err) {
                throw err;
            }

            client.setEndpoint('https://api.mindbodyonline.com/0_5/ClassService.asmx');
            var params = {
                "Request": {
                    "SourceCredentials": {
                        "SourceName": "source_name",
                        "Password": "password",
                        "SiteIDs": {
                            "int": ["site_id"]
                        }
                    }
                }
            };

            client.Class_x0020_Service.Class_x0020_ServiceSoap.GetClasses(params, function (errs, result) {
                if (errs) {
                    console.log(errs);
                } else {
                    console.log(JSON.stringify(result.GetClassesResult));
                }
            })
        });
    }
}

// Your application file.js

//var mindbody = require('./mindbody.js');
//mindbody.getClasses();
