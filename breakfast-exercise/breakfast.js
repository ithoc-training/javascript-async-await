/*
Goal:
Create a Node.js application to simulate the process of preparing a complete breakfast.
Utilize Promises to manage various asynchronous tasks like toasting bread, boiling water,
brewing coffee, putting butter on bread, putting jam on toast, and preparing the table.

Requirements:
- Jam can be put on toast only after the bread is toasted and butter is put on it.
- Butter can be put on bread only after the bread is toasted.
- Coffee can be brewed only after the water is boiled.
- Water can be boiled and bread can be toasted simultaneously.
- The table can be prepared only after the coffee is brewed and the jam is put on the toast.
*/

// Toasting bread:
// Simulates the process of toasting bread. It returns a Promise that resolves if the toasting duration
// is less than or equal to 3 seconds (3000 milliseconds), and rejects if the duration is longer
// (indicating the toast has burned).
function toastBread(duration) {
    console.log("Starting to toast bread...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration <= 3000) { // Duration in milliseconds
                resolve("Bread toasted perfectly.");
            } else {
                reject(new Error("The toast burned!"));
            }
        }, duration);
    });
}

// Boiling water:
// Simulates boiling water for coffee. It returns a Promise that resolves if the boiling duration
// is less than or equal to 5 seconds (5000 milliseconds), and rejects if it's longer
// (indicating the water has evaporated).
function boilWater(duration) {
    console.log("Starting to boil water...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration <= 5000) {
                resolve("Water boiled successfully.");
            } else {
                reject(new Error("The water evaporated!"));
            }
        }, duration);
    });
}

// Brewing coffee:
// This function simulates brewing coffee. It returns a Promise that resolves if the brewing duration
// is less than or equal to 4 seconds (4000 milliseconds), indicating perfectly brewed coffee.
// If the duration is longer, the Promise is rejected, indicating that the coffee over-brewed.
function brewCoffee(duration) {
    console.log("Starting to brew coffee...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration <= 4000) {
                resolve("Coffee brewed to perfection.");
            } else {
                reject(new Error("The coffee over-brewed!"));
            }
        }, duration);
    });
}

// Putting butter on bread:
// This function simulates putting butter on bread. It returns a Promise that resolves if the duration
// is less than or equal to 2 seconds (2000 milliseconds), indicating that the butter was put on the bread.
// If the duration is longer, the Promise is rejected, indicating that the butter melted.
function putButterOnBread(duration) {
    console.log("Putting butter on bread...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration <= 2000) {
                resolve("Butter on bread");
            } else {
                reject(new Error("Butter melted!"));
            }
        }, duration);
    });
}

// Putting jam on toast:
// This function simulates putting jam on toast. It returns a Promise that resolves if the duration
// is less than or equal to 1 second (1000 milliseconds), indicating that the jam was put on the toast.
// If the duration is longer, the Promise is rejected, indicating that the jam spilled.
function putJamOnToast(duration) {
    console.log("Putting jam on toast...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration <= 1000) {
                resolve("Jam on toast");
            } else {
                reject(new Error("Jam spilled!"));
            }
        }, duration);
    });
}

// Preparing the table:
// This function simulates preparing the table. It returns a Promise that resolves if the duration
// is less than or equal to 6 seconds (6000 milliseconds), indicating that the table was set properly.
// If the duration is longer, the Promise is rejected, indicating that the table was not set properly.
function prepareTheTable(duration) {
    console.log("Preparing the table...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration <= 6000) {
                resolve("Table prepared");
            } else {
                reject(new Error("Table not set properly!"));
            }
        }, duration);
    });
}

// Preparing breakfast
// This function simulates preparing breakfast. It calls the functions defined above to prepare the
// different components of breakfast. It returns a Promise that resolves if all the components are
// prepared successfully, and rejects if any of the components fail.
function prepareBreakfast() {

    let toastPromise = toastBread(3000)
        .then(message => {
            console.log(message);
            return putButterOnBread(1000);
        })
        .then(message => {
            console.log(message);
            return putJamOnToast(1000);
        })
        .then(message => {
            console.log(message);
        });

    let coffeePromise = boilWater(4500)
        .then(message => {
            console.log(message);
            return brewCoffee(3500);
        })
        .then(message => {
            console.log(message);
        })

    Promise.all([toastPromise, coffeePromise])
        .then(message => {
            console.log(message);
            return prepareTheTable(5000)
        })
        .then(message => {
            console.log(message);
            console.log('Breakfast is ready!');
        })
        .catch(error => console.error(error.message))

}

prepareBreakfast();
