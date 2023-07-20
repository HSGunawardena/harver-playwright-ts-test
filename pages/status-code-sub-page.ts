import { expect, type Locator, type Page } from '@playwright/test';

export class StatusCodeSubPage {
    readonly page: Page;
    readonly getHeaderTitle: Locator;
    readonly getPageText: Locator;
    readonly pageText: string;
    readonly getHereLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getHeaderTitle = page.locator('h3', { hasText: 'Status Codes' });
        this.getPageText = page.getByRole('paragraph').first();
        this.getHereLink = page.getByRole('link', { name: 'here' });
    }
}