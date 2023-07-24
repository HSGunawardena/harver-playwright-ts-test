import { test, expect } from '@playwright/test';
import { DownloadPage } from '../pages/downloadPage';

test.describe('File Download Verification', () => {
  let downloadPage;

  test.beforeEach(async ({ page }) => {
    downloadPage = new DownloadPage(page);

    await downloadPage.visitDownloadPage();
    await expect(downloadPage.page).toHaveURL(/download/);
    await expect(downloadPage.getHeaderTitle).toBeVisible();
  });

  test('verify if list of downloads are available in the landing page', async () => {
    await downloadPage.getAllDownloadLinks.count().then(async (count) => {
      await expect(count).toBeGreaterThan(0);
    });
  });

  test("verify downloading the first file of the page and it's name", async () => {
    const fileName = await downloadPage.getAllDownloadLinks.first().innerText();
    const downloadedFileName = await downloadPage.downloadFile();
    await expect(downloadedFileName).toBe(fileName);
  });
});
