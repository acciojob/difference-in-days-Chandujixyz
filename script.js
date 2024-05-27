var dateDiffInDays = function (date1, date2) {
  //   write your code here
	    var d1 = new Date(date1);
    var d2 = new Date(date2);

    // Get the number of milliseconds since the UTC epoch for each date
    var utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
    var utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());

    // Calculate the difference in milliseconds
    var diffInMillis = utc2 - utc1;

    // Convert the difference from milliseconds to days
    var diffInDays = diffInMillis / (1000 * 60 * 60 * 24);

    return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
