const addClass = function(el, newClass) {
  if (el.className.indexOf(newClass) === -1) {
    el.className += newClass;
  }
};