'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

// Define function tagDate that prepends current date to the string.
// E.g. tagDate('My String') === '[2019-11-14] My String'
// Use function tagged to implement tagDate.

const tagDate = (str) => {
  const currentDate = new Date();
  const dateToStr = currentDate.toISOString();
  const parseYear = dateToStr.split('T')[0];
  return tagged(parseYear, str);
};

module.exports = { tagDate };
