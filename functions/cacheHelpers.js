/**
 * Check if cache has expired
 *
 * @param cache
 * @returns {boolean}
 */
export function isExpired(cache) {
  if (
    checkCacheFormatIsOk(cache) &&
    checkUpdatedAtIsTimestamp(cache.updatedAt) &&
    checkRefreshPeriodIsValid(cache.refreshPeriod)) {

    let timestampToRefreshAt = cache.updatedAt + cache.refreshPeriod;
    let date = new Date;

    return date.getTime() > timestampToRefreshAt;

  } else {
    console.log('checkUpdatedAt: ' + checkUpdatedAtIsTimestamp(cache.updatedAt));
    console.log('checkRefreshPeriod: ' + checkRefreshPeriodIsValid(cache.refreshPeriod));
    console.error('cache not formatted correctly. updatedAt (microtimestamp) and refreshPeriod (int) expected: ' + cache);
    return true;
  }
}

/**
 * Check cache is an object with updatedAt and refreshPeriod properties
 *
 * @param cache
 */
export function checkCacheFormatIsOk(cache) {
  return cache.constructor == Object &&
    cache.hasOwnProperty('updatedAt') &&
    cache.hasOwnProperty('refreshPeriod');
}

/**
 * Check if updatedAt is a valid timestamp
 *
 * @param updatedAt
 * @returns {boolean}
 */
export function checkUpdatedAtIsTimestamp(updatedAt) {
  console.log(updatedAt);
  return updatedAt !== null && updatedAt.constructor == Number && updatedAt > -1;
}

/**
 * Check if refreshPeriod is a valid number
 *
 * @param refreshPeriod
 * @returns {boolean}
 */
export function checkRefreshPeriodIsValid(refreshPeriod) {
  return refreshPeriod !== null && refreshPeriod.constructor == Number && refreshPeriod > 0;
}

/**
 * Get Date object set at the cache refresh time
 *
 * @param cache
 * @returns {Date}
 */
export function getRefreshDate(cache) {
  let date = new Date;
  date.setTime(cache.updatedAt + cache.refreshPeriod);

  return date;
}
