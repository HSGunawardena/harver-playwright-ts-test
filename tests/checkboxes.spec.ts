import { test, expect } from '@playwright/test';
import { CheckboxPage } from '../pages/checkbox-page';

test.describe('Checkbox Verification', () => {
  let checkboxPage;

  test.beforeEach(async ({ page }) => {
    checkboxPage = new CheckboxPage(page);

    await checkboxPage.visitCheckboxPage()
    await expect(checkboxPage.getHeaderTitle).toBeVisible();
  });

  test('verify default status of checkboxes', async () => {
    await expect(checkboxPage.getCheckbox1).toBeVisible();
    await expect(checkboxPage.getCheckbox1).not.toBeChecked();
    await expect(checkboxPage.getCheckbox2).toBeVisible();
    await expect(checkboxPage.getCheckbox2).toBeChecked();
  });

  test('verify first checkbox for checking and unchecking', async () => {
    await checkboxPage.getCheckbox1.check();
    await expect(checkboxPage.getCheckbox1).toBeChecked();
  });

  test('verify second checkbox for unchecking and checking', async () => {
    await checkboxPage.getCheckbox2.uncheck();
    await expect(checkboxPage.getCheckbox2).not.toBeChecked();
  });
});