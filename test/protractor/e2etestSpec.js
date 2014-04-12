describe('homepage', function() {
  'use strict';
  it('should render title', function() {

    browser.driver.get('http://localhost:9000');

    var greeting = browser.driver.findElement(by.className('mine'));
    expect(greeting.getText()).toEqual('HELLO WORLD');
  });
});
