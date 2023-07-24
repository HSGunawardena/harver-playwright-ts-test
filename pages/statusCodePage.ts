import { type Locator, type Page } from '@playwright/test';

export class StatusCodePage {
  readonly page: Page;
  readonly getHeaderTitle: Locator;
  readonly getPageText: Locator;
  readonly pageText: string;
  readonly getHereLink: Locator;
  readonly pageSubText: string;
  readonly status200: Locator;
  readonly get301Link: Locator;
  readonly get404Link: Locator;
  readonly get500Link: Locator;
  readonly statusCodePageText: Locator;
  statusLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getHeaderTitle = page.locator('h3', { hasText: 'Status Codes' });
    this.getPageText = page.getByRole('paragraph').first();
    this.getHereLink = page.getByRole('link', { name: 'here' });
  }

  async visitStatusCodePage() {
    await this.page.goto('/status_codes');
  }

  async setStatusLocator(status: string) {
    this.statusLink = this.page.getByRole('link', { name: status });
  }
}
