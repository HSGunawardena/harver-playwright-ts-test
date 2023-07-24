import { test, expect } from '@playwright/test';
import { InputPage } from '../pages/inputPage';

test.describe('Input Number Field Verification', () => {
  let inputPage;
  const testData = JSON.parse(
    JSON.stringify(require('../utilities/inputNumbers.testData.json'))
  );

  test.beforeEach(async ({ page }) => {
    inputPage = new InputPage(page);

    await inputPage.visitInputPage();
    await expect(inputPage.page).toHaveURL(/inputs/);
    await expect(inputPage.getHeaderTitle).toBeVisible();
  });

  test('verify default status of the input number field', async () => {
    await expect(inputPage.getInputField).toBeEmpty();
  });

  for (const acceptedNumber of testData.acceptedNumbers) {
    test(
      'verify ' + acceptedNumber + ' to be accepted by input field',
      async () => {
        await inputPage.getInputField.type(acceptedNumber);
        await expect(inputPage.getInputField).toHaveValue(acceptedNumber);
      }
    );
  }

  for (const rejectedCharacters of testData.rejectedCharacters) {
    test(
      'verify ' + rejectedCharacters + ' characters are not accepted',
      async () => {
        await inputPage.getInputField.type(rejectedCharacters);
        await expect(inputPage.getInputField).not.toHaveValue(
          rejectedCharacters
        );
      }
    );
  }

  test('verify if numbers only accepted when typed with other characters', async () => {
    await inputPage.getInputField.type(testData.stringWithNumbers);
    await expect(inputPage.getInputField).toHaveValue(
      testData.stringWithNumbersOutcome
    );
  });
});
