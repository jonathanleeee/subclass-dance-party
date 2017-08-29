var makeNewDancer1 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="newDancer1"></span>');
  this.setPosition(top, left);
};

makeNewDancer1.prototype = Object.create(makeDancer.prototype);
makeNewDancer1.prototype.constructor = makeNewDancer1;

