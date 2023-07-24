import { test, expect } from '@playwright/test';
import { AddRemovePage } from '../pages/addRemovePage';

test.describe('Adding and Removing Elements in DOM', () => {
  let addRemovePage;

  test.beforeEach(async ({ page }) => {
    addRemovePage = new AddRemovePage(page);

    await addRemovePage.visitAddRemovePage();
    await expect(page).toHaveURL(/add_remove_elements/);
    await expect(addRemovePage.getHeaderTitle).toBeVisible();
  });

  test('verify adding and removing elements when clicked on Delete button', async () => {
    await expect(addRemovePage.getDeleteButton).not.toBeVisible();
    await addRemovePage.addElement();
    await expect(addRemovePage.getDeleteButton).toBeVisible();
    await addRemovePage.deleteElement();
    await expect(addRemovePage.getDeleteButton).not.toBeVisible();
  });
});
