(function () {
  // NOTE: not hoisted
  function inner(param) {}
  inner.someProp++;
})();

var
// NOTE: hoisted
_inner = function inner(param) {};

(function () {
  var inner = _inner;

  return inner.name;
})();

(function () {
  function inner(param) {}
  // NOTE: not hoisted
  inner.someProp = 1;
})();

var
// NOTE: hoisted
_inner2 = function inner(param) {};

(function () {
  var inner = _inner2;


  var dummy = {};
  return dummy[inner];
})();

var
// NOTE: hoisted
_inner3 = function inner(param) {};

(function () {
  var inner = _inner3;

  inner;
})();

var
// NOTE: hoisted
_inner4 = function inner(param) {};

(function () {
  var inner = _inner4;

  inner.name;
})();