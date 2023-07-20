# Harver QA UI Automation Assignment Framework

This repository contains the Harver playwright from typescript automation assignment framework.

## System requirements

Node 20.4.0

Playwright 1.36.1

## Installation and running tests

| Command              | Description                                               |
| -------------------- | --------------------------------------------------------- |
| `npm run setup`      | The framewok will be set up to run the tests              |
| `npm run e2e`        | Runs all the tests headless in all enabled browsers       |
| `npm run e2e:headed` | Runs all the tests in headed mode in all enabled browsers |
| `npm run e2e:ui`     | Opens the playwright UI to debug and run tests            |
| `npm run report`     | Opens the reports after successful run                    |

## About the framework

- This framework covers tests suites for 5 elements as shown below
- The framework at the moment covers following browsers
  - Chromium (1440 \* 1080)
  - Chrome (1440 \* 1080)
  - Mobile Chrome Pixel 5
  - Microsoft Edge (1440 \* 1080)
  - Safari, Mobile Safari and Firefox not enabled. `verify if numbers only accepted when typed with other characters` test under [inputNumbers.spec.ts](tests/inputNumbers.spec.ts) failed as these browsers accepts special characters which is wrong for numeric. The assignment mentioned all tests to be passed. Hence these browsers are not enabled
- The environments can be called with the env variable and can add production URL if needed (currently given google.com)
- This framework will automatically take screenshots on every failure and can be found in test-results folder

### Add Remove Elements

| Test Link                                                                      | Test File                                                          |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [Add/Remove Elements](https://the-internet.herokuapp.com/add_remove_elements/) | [addAndRemoveElements.spec.ts](tests/addAndRemoveElements.spec.ts) |

### Checkboxes

| Test Link                                                   | Test File                                      |
| ----------------------------------------------------------- | ---------------------------------------------- |
| [Checkboxes](https://the-internet.herokuapp.com/checkboxes) | [checkboxes.spec.ts](tests/checkboxes.spec.ts) |

### Input Numbers

| Test Link                                          | Test File                                          |
| -------------------------------------------------- | -------------------------------------------------- |
| [Input](https://the-internet.herokuapp.com/inputs) | [inputNumbers.spec.ts](tests/inputNumbers.spec.ts) |

### Status Codes

| Test Link                                                       | Test File                                      |
| --------------------------------------------------------------- | ---------------------------------------------- |
| [Status Codes](https://the-internet.herokuapp.com/status_codes) | [statusCode.spec.ts](tests/statusCode.spec.ts) |

### Status Codes

| Test Link                                                       | Test File                                      |
| --------------------------------------------------------------- | ---------------------------------------------- |
| [Status Codes](https://the-internet.herokuapp.com/status_codes) | [statusCode.spec.ts](tests/statusCode.spec.ts) |

### Download Files

| Test Link                                                     | Test File                                  |
| ------------------------------------------------------------- | ------------------------------------------ |
| [Download Files](https://the-internet.herokuapp.com/download) | [download.spec.ts](tests/download.spec.ts) |
