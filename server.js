// Setting up express, and getting the response "res" reference, and "app" application reference.
const express = require('express');
const res = require("express/lib/response");
const app = express();



// Add function
const add = (n1, n2) =>         {return n1 + n2}

// Subtract function
const subtract = (n1, n2) =>    {return n1 - n2}

// Multiply function
const multiply = (n1, n2) =>    {return n1 * n2}

// Divide function
const divide = (n1, n2) =>      {return n1 / n2}




// Handle addition requests, using get method of HTTP
app.get("/add", (req, res) => 
{
    // Try block, to handle numbers provided in request
    try
    {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)

    // Throw error if n1 or n2 are NaN:
    if (isNaN(n1)) {throw new Error('Invalid value for first number provided, n1');}    
    if (isNaN(n2)) {throw new Error('Invalid value for second number provided, n2');}
    
    //  Error also printed in console, for further clarification
    if (n1 === NaN || n2 === NaN) 
    {
        console.log()
        throw new Error("Parsing Error");
    }

    // If all good, get result (sum of n1 and n2), then print in json format, with success code of 200.
    const result = add(n1, n2);
    res.status(200).json({statuscode:200, data: result});
    } 

    // Catch block, for catching error, and putting error code 500 in console.
    catch(error) 
    {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
});




// Handle subtraction requests, using get method of HTTP
app.get("/subtract", (req, res) => 
{
    // Try block, to handle numbers provided in request
    try
    {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)

    // Throw error if n1 or n2 are NaN:
    if (isNaN(n1)) {throw new Error('Invalid value for first number provided, n1');}    
    if (isNaN(n2)) {throw new Error('Invalid value for second number provided, n2');}
    
    //  Error also printed in console, for further clarification
    if (n1 === NaN || n2 === NaN) 
    {
        console.log()
        throw new Error("Parsing Error");
    }

    // If all good, get result (difference of n1 - n2), then print in json format, with success code of 200.
    const result = subtract(n1, n2);
    res.status(200).json({statuscode:200, data: result});
    } 

    // Catch block, for catching error, and putting error code 500 in console.
    catch(error) 
    {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
});




// Handle multiplication requests, using get method of HTTP
app.get("/multiply", (req, res) => 
{
    // Try block, to handle numbers provided in request
    try
    {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)

    // Throw error if n1 or n2 are NaN:
    if (isNaN(n1)) {throw new Error('Invalid value for first number provided, n1');}    
    if (isNaN(n2)) {throw new Error('Invalid value for second number provided, n2');}
    
    //  Error also printed in console, for further clarification
    if (n1 === NaN || n2 === NaN) 
    {
        console.log()
        throw new Error("Parsing Error");
    }

    // If all good, get product of n1 and n2, then print in json format, with success code of 200.
    const result = multiply(n1, n2);
    res.status(200).json({statuscode:200, data: result});
    } 

    // Catch block, for catching error, and putting error code 500 in console.
    catch(error) 
    {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
});




// Handle division requests, using get method of HTTP
app.get("/divide", (req, res) => 
{
    // Try block, to handle numbers provided in request
    try
    {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)

    // Throw error if n1 or n2 are NaN, or denominator (n2), is 0:
    if (isNaN(n1)) {throw new Error('Invalid value for first number provided, n1');}    
    if (isNaN(n2)) {throw new Error('Invalid value for second number provided, n2');}
    if (n2 == 0)   {throw new Error('Cannot divide by 0');}
    
    //  Error also printed in console, for further clarification
    if (n1 === NaN || n2 === NaN) 
    {
        console.log()
        throw new Error("Parsing Error");
    }

    // If all good, get quotient of n1/n2, then print in json format, with success code of 200.
    const result = divide(n1, n2);
    res.status(200).json({statuscode:200, data: result});
    } 

    // Catch block, for catching error, and putting error code 500 in console.
    catch(error) 
    {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
});





// Setup port number, and get server to start listening:
const port = 3040;
app.listen(port, () =>
{
    console.log("Hello, I'm listening at port " + port);
})
