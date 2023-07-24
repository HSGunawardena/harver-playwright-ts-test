import { test, expect } from '@playwright/test';
import { StatusCodePage } from '../pages/statusCodePage';
import { StatusCodeSubPage } from '../pages/statusCodeSubPage';

test.describe('Status Code Verification', () => {
  let statusCodePage;
  let statusCodeSubPage;
  const testData = JSON.parse(
    JSON.stringify(require('../utilities/statusCode.testData.json'))
  );

  test.beforeEach(async ({ page }) => {
    statusCodePage = new StatusCodePage(page);
    statusCodeSubPage = new StatusCodeSubPage(page);

    await statusCodePage.visitStatusCodePage();
    await expect(statusCodePage.page).toHaveURL(/status_codes/);
    await expect(statusCodePage.getHeaderTitle).toBeVisible();
  });

  test('verify default page content', async () => {
    await expect(statusCodePage.getPageText).toContainText(testData.pageText);
    await expect(statusCodePage.getHereLink).toBeVisible();
    await expect(statusCodePage.getPageText).toContainText(
      testData.pageSubText
    );
    for (const status of testData.statusCodes) {
      await statusCodePage.setStatusLocator(status);
      await expect(statusCodePage.statusLink).toBeVisible();
    }
  });

  test('verify here link takes user to iana page', async ({ page }) => {
    await statusCodePage.getHereLink.click();
    await expect(page).toHaveURL(testData.url);
  });

  for (const status of testData.statusCodes) {
    test(
      'verify ' +
        status +
        ' status links takes user to correct status code page',
      async () => {
        await statusCodePage.setStatusLocator(status);
        await statusCodePage.statusLink.click();
        await expect(statusCodeSubPage.getHeaderTitle).toBeVisible();
        await expect(statusCodeSubPage.getPageText).toContainText(
          'This page returned a ' + status + ' status code.'
        );
        await statusCodeSubPage.getHereLink.click();
        await expect(statusCodePage.getPageText).toContainText(
          testData.pageText
        );
      }
    );
  }
});
