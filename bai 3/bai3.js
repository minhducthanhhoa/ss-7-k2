"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Monday";
    WeekDays["Tuesday"] = "Tuesday";
    WeekDays["Wednesday"] = "Wednesday";
    WeekDays["Thursday"] = "Thursday";
    WeekDays["Friday"] = "Friday";
    WeekDays["Saturday"] = "Saturday";
    WeekDays["Sunday"] = "Sunday";
})(WeekDays || (WeekDays = {}));
let weekDays = [
    WeekDays.Monday,
    WeekDays.Tuesday,
    WeekDays.Wednesday,
    WeekDays.Thursday,
    WeekDays.Friday,
    WeekDays.Saturday,
    WeekDays.Sunday
];
for (let day of weekDays) {
    console.log(day);
}
