## Project Title
This project is a collection of end-to-end tests using Playwright.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Node.js (LTS version recommended)
npm (comes with Node.js)

## Cloning
To clone the project, run the following command in your terminal:
```bash
git clone https://github.com/tracy8/web-app-test-suite.git
```

## Installation
Navigate to the project directory and install the dependencies:

```bash
cd web-app-test-suite
npm ci
```
## Running Tests
To run the tests, use the following command:
```bash
npm run e2e
```

To run the tests with UI, use the following command:

## Tools Used
Playwright: Playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API. It was chosen for its ability to handle modern web app features, its speed, and its reliability.

- `@playwright/test`: This is the test runner provided by Playwright. It was chosen for its integration with Playwright, its features tailored for end-to-end testing, and its configurability.

- `Node.js`: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It was chosen for its wide usage, support for modern JavaScript features, and its performance.
Why Playwright

- `Playwright` was chosen for this project due to its ability to automate tests for all modern web browsers using a single API. It supports all browser features and is capable of simulating user interactions with high precision. It also provides excellent support for handling asynchronous behavior, making it ideal for testing modern web applications.

Challenges Encountered:

-  `Multiple Applications`: For this end-to-end testing project, we had to utilize different applications to cover all the test cases. This was due to the difficulty in finding a single application that encompassed all the use cases we intended to test.

- `Load Time Variability`: The applications used for testing are publicly accessible projects. At times, these applications experience high traffic, resulting in slower load times. Occasionally, the load times exceeded the `30s timeout` threshold set for our tests, necessitating the re-execution of some tests.