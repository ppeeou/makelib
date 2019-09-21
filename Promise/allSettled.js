const { isIterator } = require('maketype');
/**
 * @param {iterable} iterable
 * @returns {Array}
 */
function allSettled(iterable) {
  if (!isIterator(iterable)) {
    throw new Error('[allSettled] first param must be iterable');
  }

  const onFulfill = v => ({ status: 'fulfilled', value: v });
  const onReject = v => ({ status: 'rejected', reason: v });

  return Promise
    .all(Array.from(iterable).map(p =>
      Promise
        .resolve(p)
        .then(onFulfill)
        .catch(onReject)));
}

module.exports = allSettled;