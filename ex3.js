/*
Given two dates, create a function that gives the difference in days between them.
 
Ejemplo:
daysDiff('Dec 1, 2023', 'Dec 24, 2023');  // Output: 23 days
*/

function daysDiff(date1,date2) {
    // Format dates
    date1 = date1 instanceof Date ? date1 : new Date(date1);
    date2 = date2 instanceof Date ? date2 : new Date(date2);
    // Get difference in ms between them
    const diffInMs = Math.abs(date1.getTime() - date2.getTime());

    // To split the difference in milliseconds between 
    // the number of milliseconds in a day and round it
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    return days + " days";
}

module.exports = daysDiff;

// Formates that you can give a date:

// console.log(daysDiff('Dec 1, 2023', 'Dec 24, 2023'));
// console.log(daysDiff('2023-12-1', '2023-12-24'));
// console.log(daysDiff('2023/12/1', '2023/12/24'));