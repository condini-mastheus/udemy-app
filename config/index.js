const config = require('./config');

module.exports = {

    getDbConnectionString() {
       let rawUri = config.DATABASE.URI;
       const user = config.DATABASE.USER;
       const password = config.DATABASE.PASS;

       rawUri = rawUri.replace('<dbuser>', user);
       rawUri = rawUri.replace('<dbpassword>', password);

       const uri = rawUri;

       return uri;
    }
};
