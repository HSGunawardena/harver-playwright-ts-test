import { test, expect } from '@playwright/test';
import { InputPage } from '../pages/input-page';

test.describe('Input Number Field Verification', () => {
  let inputPage;
  const acceptedNumbers = [
    '-20000000000',
    '0',
    '50000'
  ];
  const rejectedCharacters = [
    '!@#$$%^&*()+=',
    '?;adf[[wekk',
    'God',
    '@sdfwrtl;/p'
  ];

  test.beforeEach(async ({ page }) => {
    inputPage = new InputPage(page);

    await inputPage.visitInputPage();
    await expect(inputPage.getHeaderTitle).toBeVisible();
  });

  test('verify default status of the input number field', async () => {
    await expect(inputPage.getInputField).toBeEmpty();
  });

  for (let i = 0; i < acceptedNumbers.length; i++) {
    test('verify ' + acceptedNumbers[i] + ' to be accepted by input field', async () => {
      await inputPage.getInputField.type(acceptedNumbers[i]);
      await expect.soft(inputPage.getInputField).toHaveValue(acceptedNumbers[i]);
    });
  }

  for (let i = 0; i < rejectedCharacters.length; i++) {
    test('verify ' + rejectedCharacters[i] + ' characters are not accepted', async () => {
      await inputPage.getInputField.type(rejectedCharacters[i]);
      await expect.soft(inputPage.getInputField).not.toHaveValue(rejectedCharacters[i]);
    });
  }

  test('verify if numbers only accepted when typed with other characters', async () => {
    await inputPage.getInputField.type('@%$12345^%^');
    await expect.soft(inputPage.getInputField).toHaveValue('12345');
  });
});