const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Restaurant');

Scenario('test something', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.button_book_now', 10);
  I.seeElement('.button_book_now');
  const firstResto = await I.grabTextFrom(locate('.button_book_now').first());
  I.click(locate('.button_book_now').first());

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorites');
  I.waitForElement('.resto', 10);
  I.seeElement('.resto');
  const likedResto = await I.grabTextFrom(locate('.button_book_now').first());

  assert.strictEqual(firstResto, likedResto);
});
