import { expect, type Locator, type Page } from '@playwright/test';

export class StatusCodePage {
    readonly page: Page;
    readonly getHeaderTitle: Locator;
    readonly getPageText: Locator;
    readonly pageText: string;
    readonly getHereLink: Locator;
    readonly pageSubText: string;
    readonly get200Link: Locator;
    readonly get301Link: Locator;
    readonly get404Link: Locator;
    readonly get500Link: Locator;
    readonly statusCodePageText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getHeaderTitle = page.locator('h3', { hasText: 'Status Codes' });
        this.getPageText = page.getByRole('paragraph').first();
        this.pageText = 'HTTP status codes are a standard set of numbers used to communicate from a web server to your browser to indicate the outcome of the request being made (e.g. Success, Redirection, Client Error, Server Error). For a complete list of status codes, go here';
        this.pageSubText = 'Some standard status codes you will run into include but are not limited to:';
        this.getHereLink = page.getByRole('link', { name: 'here' });
        this.get200Link = page.getByRole('link', { name: '200' });
        this.get301Link = page.getByRole('link', { name: '301' });
        this.get404Link = page.getByRole('link', { name: '404' });
        this.get500Link = page.getByRole('link', { name: '500' });
    }

    async visitStatusCodePage() {
        await this.page.goto('/status_codes');
        await expect(this.page).toHaveURL(/status_codes/);
    }
}