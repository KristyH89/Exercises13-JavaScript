// Exercise 1
console.log("--- Exercise 1 ---")

const username = "Penny";
const age = 36;
const isOnline = true;

console.log(`Welcome, ${username}! You are ${age} years old and currently ${isOnline ? "online" : "offline"}.`);

// Exercise 2
console.log("\n--- Exercise 2 ---")
const price = 150;
const quantity = 3;

const subtotal = price * quantity;
const tax = subtotal * 0.25;
const total = subtotal + tax;

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Total:", total);

// Exercise 3
console.log("\n--- Exercise 3 ---")
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(undefined == null);  // true
console.log(undefined === null); // false

// Prefer === because it checks both value and type.
// This prevents accidental matches when validating sensitive data like user IDs or passwords.

// Exercise 4
console.log("\n--- Exercise 4 ---")
const visitorAge = 16;
const teenDiscount = visitorAge >= 12 && visitorAge <= 18;
console.log(teenDiscount);

// Exercise 5
console.log("\n--- Exercise 5 ---")
const roomTemperature = 30;

if (roomTemperature > 25) {
    console.log("Turning on the AC... ❄️");
} else if (roomTemperature >= 18 && roomTemperature <= 25) {
    console.log("Temperature is perfect. ✅");
} else {
    console.log("Turning on the heater... 🔥");
}

// Exercise 6
console.log("\n--- Exercise 6 ---")
const isLoggedIn = true;
const buttonText = isLoggedIn  ? "Logout" : "Login";

console.log(buttonText);

// Exercise 7
console.log("\n--- Exercise 7 ---")
const lightColor = "green";

switch (lightColor) {
    case "red":
        console.log("Stop!");
        break
    case "yellow":
        console.log("Slow down!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Invalide color.");
}

// Exercise 8
console.log("\n--- Exercise 8 ---")
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Lift off! 🚀");

// Exercise 9
console.log("\n--- Exercise 9 ---")
for (let i = 1; i <= 20; i++) {
    const type = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, type);
}


// Exercise 10
console.log("\n--- Exercise 10 ---")
function applyDiscount(price, percentage) {
    return price - (price * (percentage / 100));
}
console.log(applyDiscount(100, 20));



// Exercise 11
console.log("\n--- Exercise 11 ---")
const formatWelcome = (name) => `Hello, ${name}! Welcome back.`;
console.log(formatWelcome("Khaleesi, Mother of Dragons"));


// Exercise 12
console.log("\n--- Exercise 12 ---")
function sendEmail(recipient, subject = "No Subject") {
    return `Sending email to ${recipient} with subject: ${subject}`;
}

console.log(sendEmail("abba@dansingqueen.com"));




// Exercise 13
console.log("\n--- Exercise 13 ---")
const oldPrices = [50, 100, 250];
const newPrices = oldPrices.map(price => (price * 1.10).toFixed(2));
console.log(newPrices);


// Exercise 14
console.log("\n--- Exercise 14 ---")
const inventory = [0, 12, 5, 0, 8, 3];
const inStock = inventory.filter(item => item > 0);
console.log(inStock);

// Exercise 15
console.log("\n--- Exercise 15 ---")
const cart = [19.99, 5.50, 24.00];
const totalAmount = Number(cart.reduce((sum, price) => sum + price, 0).toFixed(2));

console.log(totalAmount);


// Exercise 16
console.log("\n--- Exercise 16 ---")
const userAccount = {
    username: "funwithflags",
    email: "funwithflags@pasadena.net",
    followerCount: 40,
    isVerified: true
};
console.log("Username:" + userAccount.username);
console.log("Email:" + userAccount.email);

// Exercise 17
console.log("\n--- Exercise 17 ---")
userAccount.bio = "Physics enthusiast and flag collector.";
userAccount.followerCount = 67;
delete userAccount.email;
console.log(userAccount);

// Exercise 18
console.log("\n--- Exercise 18 ---")
const jsonString = JSON.stringify(userAccount);
console.log(jsonString);

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);


// Exercise 19
console.log("\n--- Exercise 19 ---")
function fetchConfig(jsonString) {
    try {
        const data = JSON.parse(jsonString);
        console.log("Config loaded:", data);
    } catch (error) {
        console.log("Configuration error: Please check your data.");
    }
}
fetchConfig('{"valid": true}');
fetchConfig('INVALID JSON');


// Exercise 20
console.log("\n--- Exercise 20 ---")
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;

console.log("Year: ", year);
console.log("Month: ", month);

console.log(today.toLocaleDateString("nl-NL"));

console.log("\n--- That was the last exercise. Enjoy your day =)  ---")