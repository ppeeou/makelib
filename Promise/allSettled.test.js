const assert = require('assert');

const allSettled = require('./allSettled');

describe('[Promise] allSettled', function () {
  it('[allSettled]', async function () {
    // ex) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2, 10];

    const [r1, r2, r3] = await allSettled(promises);
    assert.deepEqual(r1, { status: 'fulfilled', value: 3 });
    assert.deepEqual(r2, { status: 'rejected', reason: 'foo' });
    assert.deepEqual(r3, { status: 'fulfilled', value: 10 });
  })
})

