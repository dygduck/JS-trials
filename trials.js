"use strict";

// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home', 5108675309);
phoneNumbers.set('mobile', 4155551212);
phoneNumbers.set('business', 4151234567);


// ///////////////////////////////////////////////////////
// Create User Info Display:


// Add function to print account information 
function getInfo(name, number, business) {
    console.log('Account Holder Name: ' + name);
    console.log('Account Holder Number: ' + number);
    console.log('Business Name: ' + business);
}

// Add function to print all addresses, including a header
function showAddresses(addresses) {
    console.log('Addresses:');
    for (let address of addresses) {
        console.log(address);
    }
}

// Add function to print phone types and numbers
function showPhoneNums(customerPhones) {
    console.log('Phone Numbers:');
    for (let [type, number] of customerPhones) {
        //console.log(phoneNumber[0] + ": " + phoneNumber[1]);
        console.log(`${type}: ${number}`);
    }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const transactions = new Map();

// Add function to add transactions
function addTransaction(date, amount) {
    transactions.set(date, amount);
}

// Use the function to add transactions

addTransaction("May-2", -500);
addTransaction("May-13", +1200);
addTransaction("May-15", -100);
addTransaction("May-21", -359);
addTransaction("May-29", +2200);

// Add function to show balance status

function showBalanceStatus(amount) {
    console.log("Balance:" + amount);
    if (amount < 0) {
        console.log("YOU ARE OVERDRAWN");
    } else if (0 < amount < 20) {
        console.log("Warning: You are close to zero balance");
    } else {
        console.log("Thank you for your business.");
    }
}

// Add function to show transactions

function showTransactions(transMap, initBalance) {
    let type;
    let finalBalance = initBalance;
    console.log(initBalance);
    for (transaction in transMap) {
        if(transaction[1] < 0) {
            type = "withdrawal";
        } else {
            type = "deposit";
        }
        finalBalance = finalBalance + transaction[1];
        console.log(transaction[0]+" " + type + " "
                    + transaction[1] + " " + finalBalance);
    }
    console.log(finalBalance);
    if (finalBalance < 0) {
        finalBalance = finalBalance + 25;
    }
    showBalanceStatus(finalBalance);
}



// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




