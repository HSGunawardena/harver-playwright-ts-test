import { expect, type Locator, type Page } from '@playwright/test';

export class CheckboxPage {
    readonly page: Page;
    readonly getHeaderTitle: Locator;
    readonly getCheckbox1: Locator;
    readonly getCheckbox2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getHeaderTitle = page.locator('h3', { hasText: 'Checkboxes' });
        this.getCheckbox1 = page.getByRole('checkbox').first();
        this.getCheckbox2 = page.getByRole('checkbox').nth(1);
    }

    async visitCheckboxPage() {
        await this.page.goto('/checkboxes');
        await expect(this.page).toHaveURL(/checkboxes/);
    }
}