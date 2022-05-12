import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | request/location', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:request/location');
    assert.ok(route);
  });
});
