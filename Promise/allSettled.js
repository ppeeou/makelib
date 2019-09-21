
const PfullSet = v => ({ status: 'fulfilled', value: v });
const PRejectSet = v => ({ status: 'rejected', reason: v });

/**
 * @param {Array} promises
 * @returns {Array}
 */
function allSettled(promises) {
  if (!Array.isArray(promises)) {
    throw new Error('[allSettled] promises must be array');
  }

  return Promise
    .all(promises.map(p =>
      Promise
        .resolve(p)
        .then(PfullSet)
        .catch(PRejectSet)));
}

module.exports = allSettled;