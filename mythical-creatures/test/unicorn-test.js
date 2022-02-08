var assert = require('chai').assert;
var Unicorn = require('../exercises/unicorn');

describe('Unicorn', function() {

  it('should be a function', function() {
    assert.isFunction(Unicorn);
  });

  it('should instantiate our good friend, Unicorn', function() {
    var unicorn = new Unicorn();

    assert.instanceOf(unicorn, Unicorn);
  });

  it('should have a name', function() {
    var unicorn = new Unicorn('Bree');
//unicorn is an instance of the class Unicorn
    assert.equal(unicorn.name, 'Bree');
    //assert.equal(actual, expected to have value of Bree)
//we know from this test that we need a name parameter,
//so add a parameter, name
//then we need to add this.name to the class
//because it has a name property
//we could have hard coded the string this.name = "Bree";
//but we want to keep our code dynamic, so add in the parameter
//of name instead in this instance
  });

  it('should be able to have a different name', function() {
    var unicorn = new Unicorn('Pam');

    assert.equal(unicorn.name, 'Pam');
    //testing name property for unicorm instance
  });

  it('should have a color', function() {
    var unicorn = new Unicorn('TayTay', 'blue');

    assert.equal(unicorn.color, 'blue');
  });

  it('should be white as default', function() {
    var unicorn = new Unicorn('Louisa');

    assert.equal(unicorn.color, 'white');
    //testing a color property for unicorn instance
  });

  it('should refute isWhite', function() {
    var unicorn = new Unicorn('Steve', 'red');

    assert.equal(unicorn.isWhite(), false);
    //we are actually invoking isWhite, a method
    //the return value of false will need to be second argument
    //we're calling it because of parentheses, so this tells us
    //we need to create this function on other side
  });

  it('should say sparklying stuff', function() {
    var unicorn = new Unicorn('Brenna');

    assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
//invoking says method and passing in one argument to method,
//so our method will need a parameter
    assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
  });
});
