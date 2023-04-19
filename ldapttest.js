const ldap = require('ldapjs');

const client = ldap.createClient({
  url: ['ldap://127.0.0.1:1389', 'ldap://127.0.0.2:1389']
});

client.on('connectError', (err) => {
  // handle connection error
})