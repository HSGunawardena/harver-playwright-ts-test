import { expect, type Locator, type Page } from '@playwright/test';

export class AddRemovePage {
    readonly page: Page;
    readonly getHeaderTitle: Locator;
    readonly getAddButton: Locator;
    readonly getDeleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getHeaderTitle = page.locator('h3', { hasText: 'Add/Remove Elements' });
        this.getAddButton = page.locator('button', { hasText: 'Add Element' });
        this.getDeleteButton = page.locator('button', { hasText: 'Delete' });
    }

    async visitAddRemovePage() {
        await this.page.goto('/add_remove_elements/');
        await expect(this.page).toHaveURL(/add_remove_elements/);
    }

    async addElement() {
        await this.getAddButton.click();
    }

    async deleteElement() {
        await expect(this.getDeleteButton).not.toBeVisible();
        await this.addElement();
        await expect(this.getDeleteButton).toBeVisible()
        await this.getDeleteButton.click()
    }
}