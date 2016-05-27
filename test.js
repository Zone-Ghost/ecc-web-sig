var fixtures = require('./fixtures.json');
var convert = require('./');
var test = require('tape');


fixtures.forEach(function (fixture) {
  test(fixture.type, function (t) {
    t.plan(2);
    t.equals(fixture.der, convert.toDer(new Buffer(fixture.web, 'hex')).toString('hex'));
    t.equals(fixture.web, convert.fromDer(new Buffer(fixture.der, 'hex'), fixture.type).toString('hex'));
  })
})
