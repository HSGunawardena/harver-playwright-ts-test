import { test, expect } from '@playwright/test';
import { AddRemovePage } from '../pages/add-remove-page';

test.describe('Adding and Removing Elements in DOM', () => {
  let addRemovePage;

  test.beforeEach(async ({ page }) => {
    addRemovePage = new AddRemovePage(page);

    await addRemovePage.visitAddRemovePage()
    await expect(addRemovePage.getHeaderTitle).toBeVisible();
  });

  test('verify adding elements when clicked on Add Element button', async ({ page }) => {
    await expect(addRemovePage.getDeleteButton).not.toBeVisible();
    await addRemovePage.addElement();
    await expect(addRemovePage.getDeleteButton).toBeVisible();
  });

  test('verify removing elements when clicked on Delete button', async ({ page }) => {
    await addRemovePage.deleteElement();
    await expect(addRemovePage.getDeleteButton).not.toBeVisible();
  });
});

