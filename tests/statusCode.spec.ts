import { test, expect } from '@playwright/test';
import { StatusCodePage } from '../pages/statusCodePage';
import { StatusCodeSubPage } from '../pages/statusCodeSubPage';

test.describe('Status Code Verification', () => {
  let statusCodePage;
  let statusCodeSubPage;

  test.beforeEach(async ({ page }) => {
    statusCodePage = new StatusCodePage(page);
    statusCodeSubPage = new StatusCodeSubPage(page);

    await statusCodePage.visitStatusCodePage();
    await expect(statusCodePage.page).toHaveURL(/status_codes/);
    await expect(statusCodePage.getHeaderTitle).toBeVisible();
  });

  test('verify default page content', async () => {
    await expect(statusCodePage.getPageText).toContainText(
      statusCodePage.pageText
    );
    await expect(statusCodePage.getHereLink).toBeVisible();
    await expect(statusCodePage.getPageText).toContainText(
      statusCodePage.pageSubText
    );
    await expect(statusCodePage.get200Link).toBeVisible();
    await expect(statusCodePage.get301Link).toBeVisible();
    await expect(statusCodePage.get404Link).toBeVisible();
    await expect(statusCodePage.get500Link).toBeVisible();
  });

  test('verify here link takes user to iana page', async ({ page }) => {
    await statusCodePage.getHereLink.click();
    await expect(page).toHaveURL(
      'http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml'
    );
  });

  test('verify 200 status links takes user to correct status code page', async () => {
    await statusCodePage.get200Link.click();
    await expect(statusCodeSubPage.getHeaderTitle).toBeVisible();
    await expect(statusCodeSubPage.getPageText).toContainText(
      'This page returned a 200 status code.'
    );
    await statusCodeSubPage.getHereLink.click();
    await expect(statusCodePage.getPageText).toContainText(
      statusCodePage.pageText
    );
  });

  test('verify 301 status links takes user to correct status code page', async () => {
    await statusCodePage.get301Link.click();
    await expect(statusCodeSubPage.getHeaderTitle).toBeVisible();
    await expect(statusCodeSubPage.getPageText).toContainText(
      'This page returned a 301 status code.'
    );
    await statusCodeSubPage.getHereLink.click();
    await expect(statusCodePage.getPageText).toContainText(
      statusCodePage.pageText
    );
  });

  test('verify 404 status links takes user to correct status code page', async () => {
    await statusCodePage.get404Link.click();
    await expect(statusCodeSubPage.getHeaderTitle).toBeVisible();
    await expect(statusCodeSubPage.getPageText).toContainText(
      'This page returned a 404 status code.'
    );
    await statusCodeSubPage.getHereLink.click();
    await expect(statusCodePage.getPageText).toContainText(
      statusCodePage.pageText
    );
  });

  test('verify 500 status links takes user to correct status code page', async () => {
    await statusCodePage.get500Link.click();
    await expect(statusCodeSubPage.getHeaderTitle).toBeVisible();
    await expect(statusCodeSubPage.getPageText).toContainText(
      'This page returned a 500 status code.'
    );
    await statusCodeSubPage.getHereLink.click();
    await expect(statusCodePage.getPageText).toContainText(
      statusCodePage.pageText
    );
  });
});
