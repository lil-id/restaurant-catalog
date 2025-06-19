/* eslint-disable */
Feature('restaurant');

Scenario('Unliking a resto', ({ I }) => {
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.waitForElement('.resto', 10);
  I.seeElement('.resto');
  I.seeElement('.button_book_now');
  I.click('.button_book_now');

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.no_data');
});
