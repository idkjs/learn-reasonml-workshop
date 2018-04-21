// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");

function of_list(x) {
  return x;
}

function filter(f, x) {
  return List.filter(f)(x);
}

function compute(_x, _acc) {
  while(true) {
    var acc = _acc;
    var x = _x;
    if (x) {
      _acc = /* :: */[
        x,
        acc
      ];
      _x = x - 1 | 0;
      continue ;
      
    } else {
      return /* :: */[
              0,
              acc
            ];
    }
  };
}

var numbers_from_0_to_50 = compute(50, /* [] */0);

var AList = /* module */[
  /* of_list */of_list,
  /* empty : [] */0,
  /* filter */filter,
  /* numbers_from_0_to_50 */numbers_from_0_to_50
];

function compute$1(_x, _acc) {
  while(true) {
    var acc = _acc;
    var x = _x;
    if (x) {
      _acc = /* :: */[
        x,
        acc
      ];
      _x = x - 1 | 0;
      continue ;
      
    } else {
      return /* :: */[
              0,
              acc
            ];
    }
  };
}

var numbers_from_0_to_50$1 = compute$1(50, /* [] */0);

var evens_from_0_to_50$prime = List.filter((function (x) {
          return +(x % 2 === 0);
        }))(numbers_from_0_to_50$1);

var odds_from_0_to_50$prime = List.filter((function (x) {
          return +(x % 2 === 1);
        }))(numbers_from_0_to_50$1);

var numbers_from_0_to_10$prime = List.filter((function (x) {
          return +(x <= 10);
        }))(numbers_from_0_to_50$1);

exports.AList = AList;
exports.numbers_from_0_to_50 = numbers_from_0_to_50$1;
exports.evens_from_0_to_50$prime = evens_from_0_to_50$prime;
exports.odds_from_0_to_50$prime = odds_from_0_to_50$prime;
exports.numbers_from_0_to_10$prime = numbers_from_0_to_10$prime;
/* numbers_from_0_to_50 Not a pure module */