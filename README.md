#  Playwright BDD Automation Framework

An end-to-end test automation framework built using **Playwright**, **Cucumber (BDD)**, and **GitHub Actions (CI/CD)**.

This project demonstrates how to design a scalable QA automation solution that combines **UI testing, API testing, and continuous integration** in a single workflow.

---

## 🧠 Key Features

- ✅ UI Automation using Playwright
- ✅ BDD with Cucumber (Gherkin syntax)
- ✅ Page Object Model (POM) design pattern
- ✅ API Testing (GET & POST)
- ✅ API + UI integration
- ✅ Reusable utilities & test data management
- ✅ Hooks for setup and teardown
- ✅ HTML reporting (Cucumber report)
- ✅ CI/CD pipeline using GitHub Actions
- ✅ Artifact upload for test reports

---

## 📂 Project Structure

playwright-bdd-project/
│
├── features/ # Gherkin feature files
├── step-definitions/ # Step definitions
├── pages/ # Page Object Models
├── utils/ # Test data & API helpers
├── hooks/ # Setup & teardown
├── tests/ # API & integration tests
├── reports/ # Generated reports
├── .github/workflows/ # CI/CD pipeline
├── package.json
└── README.md

---

## ⚙️ Installation

```bash
npm install
npx playwright install

▶️ Run Tests
Run BDD Tests
npm run bdd

Run API Tests
npx playwright test tests/api.spec.ts

📊 Test Reporting
After execution, reports are generated in:
reports/html-report/index.html

In CI:

Reports are uploaded as downloadable artifacts via GitHub Actions
🔄 CI/CD Integration

This project uses GitHub Actions to:

Run tests on every push
Execute in headless mode
Generate reports
Upload test artifacts

🔥 Example Scenarios
Add Item to Cart

Feature: Add item to cart

Scenario: User adds product
Given I am logged into the application
When I add a backpack to the cart
Then the cart should contain the item

API + UI Integration
Create user via API
Use the data in UI flow

🧠 Key Learning Highlights
Built a hybrid UI + API testing framework
Implemented BDD for collaboration with non-technical stakeholders
Solved CI issues by configuring headless execution
Designed reusable and scalable test architecture

 Future Improvements
Add screenshots on failure
Parallel execution in CI
Enhanced reporting dashboard
Docker integration

👩‍💻 Author
Tosin A. Williams
Software QA Engineer
Automation | API Testing | CI/CD

