import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('dispara alert ao clicar no botão', async ({ page }) => {
    const button = page.getByRole('button', { name: /click-me/i });
    await expect(button).toBeVisible();
    await expect(button).toHaveText('Click-me');
    page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Home Page');
      await dialog.dismiss();
    });

    await button.click();
  });
});
