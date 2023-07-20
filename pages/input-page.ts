import { expect, type Locator, type Page } from '@playwright/test';

export class InputPage {
    readonly page: Page;
    readonly getHeaderTitle: Locator;
    readonly getInputField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getHeaderTitle = page.locator('h3', { hasText: 'Inputs' });
        this.getInputField = page.locator('input[type=number]');
    }

    async visitInputPage() {
        await this.page.goto('/inputs');
        await expect(this.page).toHaveURL(/inputs/);
    }
}