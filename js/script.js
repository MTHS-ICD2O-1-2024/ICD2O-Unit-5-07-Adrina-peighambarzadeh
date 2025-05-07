// Copyright (c) 2025 Adrina Peighambarzadeh All rights reserved
//
// Created by: Adrina Peighambarzadeh
// Created on: May 2025
// This file contains the JS functions for index.html
  "use strict"
/**
 * This function calculates the sum of all numbers from 1 to the given number.
 */
// eslint-disable-next-line no-unused-vars
function calculate() {
  // input
  let counter = 1
  let answer = 0
  const userNumber = parseInt(document.getElementById('user-number').value)

  // process using loop
  while (counter <= userNumber) {
    answer = answer + counter
    counter = counter + 1
  }

  // process using formula
  const formulaAnswer = (userNumber * (userNumber + 1)) / 2

  // output
  document.getElementById('answer').innerHTML =
    'Sum using loop: ' + answer + '<br>' +
    'Sum using formula: ' + formulaAnswer
}
