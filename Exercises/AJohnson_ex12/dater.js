const dater = (req,res,next)=> { // create a middleware function
    const today = new Date(); // create a date object for right now
    const yyyy = today.getFullYear(); // get the current year
    let mm = today.getMonth() + 1; // get the current month
    let dd = today.getDate(); // get the current day
    
    if (dd < 10) dd = '0' + dd; // if it is a single digit day, add a 0 for formatting
    if (mm < 10) mm = '0' + mm; // if it is a singular digit month, add a 0 for formatting
    
    req.formattedToday = dd + '/' + mm + '/' + yyyy; // set up formattedToday as a combination of all of our data for the middleware to use
    next(); // hand off to the next middleware
}

module.exports = dater; // exports it so i can use it in my index.js