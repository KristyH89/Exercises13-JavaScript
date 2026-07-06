![Lexicon Logo](https://lexicongruppen.se/media/wi5hphtd/lexicon-logo.svg)

# JavaScript Exercises

### 1. Exercise 1
**User Profile**: Create a program that defines three variables for a social media profile: a user's `username` (string), `age` (number), and `isOnline` (boolean). Then, output a welcome message using a **template literal** (e.g., "Welcome, Astrid! You are 28 years old and currently online.").
```javascript
const username = "Penny";
const age = 36;
const isOnline = true;

console.log(`Welcome, ${username}! You are ${age} years old and currently ${isOnline ? "online" : "offline"}.`);
```
### 2. Exercise 2
**Shopping Receipt**: Create two variables `price` and `quantity` with values `150` and `3`. Calculate and log the `subtotal`. Then, calculate the **tax** (25% of subtotal) and the **final total**.
```javascript
const price = 150;
const quantity = 3;

const subtotal = price * quantity;
const tax = subtotal * 0.25;
const total = subtotal + tax;

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Total:", total);
```

### 3. Exercise 3
**Data Type Check**: You receive data from an API. Predict and log the output of the following comparisons to understand how JavaScript handles types:
- `10 == "10"`
- `10 === "10"`
- `undefined == null`
- `undefined === null`
Explain in a comment why we should prefer `===` for checking user IDs or passwords.
```javascript
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(undefined == null);  // true
console.log(undefined === null); // false

// Prefer === because it checks both value and type.
// This prevents accidental matches when validating sensitive data like user IDs or passwords.
```

### 4. Exercise 4
**Age Verification**: Write a script for a movie theater. Check if a variable `visitorAge` is between `12` and `18` (inclusive) to qualify for a "Teen Discount" using the `&&` operator. Log `true` or `false`.
```javascript
const visitorAge = 16;
const teenDiscount = visitorAge >= 12 && visitorAge <= 18;
console.log(teenDiscount);
```

### 5. Exercise 5
**Smart Thermostat**: Create a variable `roomTemperature`.
- If it's above 25, log "Turning on the AC... ❄️"
- If it's between 18 and 25, log "Temperature is perfect. ✅"
- If it's below 18, log "Turning on the heater... 🔥"
```javascript
const roomTemperature = 30;

if (roomTemperature > 25) {
    console.log("Turning on the AC... ❄️");
} else if (roomTemperature >= 18 && roomTemperature <= 25) {
    console.log("Temperature is perfect. ✅");
} else {
    console.log("Turning on the heater... 🔥");
}```

### 6. Exercise 6
**Login Toggle**: Use a **single line** ternary operator to set a variable `buttonText`. If the variable `isLoggedIn` is `true`, the button should say `"Logout"`, otherwise it should say `"Login"`.
```javascript
console.log("\n--- Exercise 6 ---")
const isLoggedIn = true;
const buttonText = isLoggedIn  ? "Logout" : "Login";

console.log(buttonText);
```

### 7. Exercise 7
**Traffic Light**: Create a variable `lightColor`. Use a `switch` statement to log instructions:
- `"red"` -> "Stop!"
- `"yellow"` -> "Slow down!"
- `"green"` -> "Go!"
- Default -> "Invalid color."
```javascript

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
```

### 8. Exercise 8
**Countdown Timer**: Write a `for` loop that simulates a rocket launch countdown from `10` down to `1`, and then logs "Lift off! 🚀".
```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Lift off! 🚀");
```

### 9. Exercise 9
**Number List**: Iterate through numbers `1` to `20`. For each number, log if it is `"Even"` (like a row in a table) or `"Odd"` using the remainder operator `%`.
```javascript
for (let i = 1; i <= 20; i++) {
    const type = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, type);
}
```

### 10. Exercise 10
**Discount Function**: Create a function called `applyDiscount` that takes `price` and `percentage`. It should return the discounted price. (e.g., `applyDiscount(100, 20)` should return `80`).
```javascript
function applyDiscount(price, percentage) {
    return price - (price * (percentage / 100));
}
console.log(applyDiscount(100, 20));

```

### 11. Exercise 11
**Greeting Arrow**: Convert this traditional function into a modern **arrow function** for a website welcome message:
```javascript
function formatWelcome(name) {
    return "Hello, " + name + "! Welcome back.";
}
```
```javascript
const formatWelcome = (name) => `Hello, ${name}! Welcome back.`;
console.log(formatWelcome("Khaleesi, Mother of Dragons"));
```

### 12. Exercise 12
**Email Default**: Create a function `sendEmail` that takes a `recipient` and a `subject`. If `subject` is not provided, it should default to `"No Subject"`.
```javascript
function sendEmail(recipient, subject = "No Subject") {
    return `Sending email to ${recipient} with subject: ${subject}`;
}

console.log(sendEmail("abba@dansingqueen.com"));
```

### 13. Exercise 13
**Price Increase**: You have an array: `const oldPrices = [50, 100, 250]`. Use `.map()` to create a new array where every price is increased by 10% due to inflation.
```javascript
const oldPrices = [50, 100, 250];
const newPrices = oldPrices.map(price => (price * 1.10).toFixed(2));
console.log(newPrices);
```

### 14. Exercise 14
**Inventory Check**: You have an array of stock levels: `const inventory = [0, 12, 5, 0, 8, 3]`. Use `.filter()` to create a new array containing only the items that are **in stock** (greater than 0).
```javascript
const inventory = [0, 12, 5, 0, 8, 3];
const inStock = inventory.filter(item => item > 0);
console.log(inStock);
```

### 15. Exercise 15
**Cart Total**: You have an array of item prices in a cart: `const cart = [19.99, 5.50, 24.00]`. Use `.reduce()` to calculate the **Total Amount** the customer needs to pay.
```javascript
const cart = [19.99, 5.50, 24.00];
const totalAmount = Number(cart.reduce((sum, price) => sum + price, 0).toFixed(2));

console.log(totalAmount);
```

### 16. Exercise 16
**User Object**: Create an object representing a `userAccount` with properties: `username`, `email`, `followerCount`, and `isVerified` (boolean). Log the username and email using dot notation.
```javascript
const userAccount = {
    username: "funwithflags",
    email: "funwithflags@pasadena.net",
    followerCount: 40,
    isVerified: true
};
console.log("Username:" + userAccount.username);
console.log("Email:" + userAccount.email);
```

### 17. Exercise 17
**Profile Update**: Take the `userAccount` from Exercise 16. Add a `bio`, update the `followerCount`, and delete the `email` property (for privacy). Log the final object.
```javascript
userAccount.bio = "Physics enthusiast and flag collector.";
userAccount.followerCount = 67;
delete userAccount.email;
console.log(userAccount);
```

### 18. Exercise 18
**Local Storage Simulation**: Convert your `userAccount` object into a **JSON string** (like you would do to save it to LocalStorage). Then, parse it back into an object.
```javascript
const jsonString = JSON.stringify(userAccount);
console.log(jsonString);

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
```

### 19. Exercise 19
**Safe API Parsing**: Write a function `fetchConfig` that takes a JSON string. Use `try...catch` to parse it. If the string is broken (invalid JSON), log a friendly error message: "Configuration error: Please check your data."
```javascript
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

```

### 20. Exercise 20
**Auto-Date**: Create a `Date` object. Log the current **Year** and **Month**, then format the date into a readable string like `"03/03/2026"` using `.toLocaleDateString()`.
```javascript
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;

console.log("Year: ", year);
console.log("Month: ", month);

console.log(today.toLocaleDateString("nl-NL"));

console.log("\n--- That was the last exercise. Enjoy your day =)  ---")
