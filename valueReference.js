'use strict'

const flightNumber = 'RA-239';

const passengerDetail = {
  name: 'Jitendra Kumar Mahato',
  passport: 69146219,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'RA - 415';
  passenger.name = 'Mr. ' + passenger.name;

  console.log(
    `Your name is ${passengerDetail.name} and your flight Number is ${flightNumber}`
  );

  if (passenger.passport === 69146219) {
    alert('Check in');
  } else {
    alert('Wrong Password');
  }
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(passengerDetail);
checkIn(flightNumber, passengerDetail);
