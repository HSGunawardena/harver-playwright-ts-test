import { type Locator, type Page } from '@playwright/test';

export class DownloadPage {
  readonly page: Page;
  readonly getHeaderTitle: Locator;
  readonly getPageText: Locator;
  readonly getAllDownloadLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getHeaderTitle = page.locator('h3', { hasText: 'File Downloader' });
    this.getAllDownloadLinks = page.locator('#content').getByRole('link');
  }

  async visitDownloadPage() {
    await this.page.goto('/download');
  }

  async downloadFile() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.getAllDownloadLinks.first().click(),
    ]);
    const suggestedFileName = download.suggestedFilename();
    const filePath = 'test-results/download/' + suggestedFileName;
    await download.saveAs(filePath);
    return suggestedFileName;
  }
}
