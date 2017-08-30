var makeNewDancer2 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="newDancer2"></span>');
  this.setPosition(top, left);
};

makeNewDancer2.prototype = Object.create(makeDancer.prototype);
makeNewDancer2.prototype.constructor = makeNewDancer2;