# Playwright Mayan Demo

This project demonstrates end-to-end testing for saucelabs e-commerce website using Playwright, a Node.js library for automating web browsers. It follows the Page Object Model (POM) pattern for maintainable and scalable test automation.

## Features

- **Page Object Model**: Organized page objects for reusable and clean test code.
- **Cross-browser testing**: Supports Chromium, Firefox, and WebKit.
- **Test data management**: JSON file for test data.
- **Comprehensive test coverage**: Tests for login, product selection, cart management, and checkout flow.

## Project Structure

```
├── pageobjects/          # Page Object classes
│   ├── CartPage.js
│   ├── CheckoutComplete.js
│   ├── CheckOutInformationPage.js
│   ├── CheckOutOverviewPage.js
│   ├── LoginPage.js
│   ├── POManager.js
│   ├── ProductsPage.js
├── tests/                # Test files
│   └── E2EMayan.spec.js
├── utils/                # Utility files
│   └── E2EMayanPageObjectPatternTestData.json
├── playwright.config.js  # Playwright configuration
├── package.json          # Node.js dependencies
└── README.md             # This file
```

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rvamfordyt-bit/Playwright-Mayan-Demo.git
   cd Playwright-Mayan-Demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific browser
```bash
npx playwright test --browser=chromium
npx playwright test --browser=firefox
npx playwright test --browser=webkit
```

### Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

### Run a specific test file
```bash
npx playwright test tests/E2EMayan.spec.js
```

### Generate and view test reports
```bash
npx playwright show-report
```

## Configuration

The `playwright.config.js` file contains the test configuration. You can modify it to:
- Change browsers
- Set timeouts
- Configure screenshots and videos
- Add custom reporters

## Test Data

Test data is stored in `utils/E2EMayanPageObjectPatternTestData.json`. Update this file to modify test inputs.

## Adding New Tests

1. Create a new test file in the `tests/` directory (e.g., `NewTest.spec.js`).
2. Use the POManager to access page objects.
3. Follow the existing test structure for consistency.

Example:
```javascript
const { test } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');

test('New test case', async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    // Your test code here
});
```