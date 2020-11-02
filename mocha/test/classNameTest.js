describe('addClass', function() {
  it('should add class to element', function() {
    const element = { className: '' };

    const addClass = function(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });

  it('should not add a class which already exists', function() {
    var element = { className: 'exists' };
  
    addClass(element, 'exists');
  
    var numClasses = element.className.split(' ').length;
    assert.equal(numClasses, 1);
  });
});