// spec: specs/orangehrm_login_major_scenarios.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Orange HRM Login Authentication', () => {
  test('Successful Login with Valid Credentials', async ({ page }) => {
    // 1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Enter 'Admin' in the Username field
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

    // 3. Enter 'admin123' in the Password field
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

    // 4. Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // 5. Verify the dashboard displays main content sections
    await expect(page.getByText('Time at Work')).toBeVisible();
    await expect(page.getByText('My Actions')).toBeVisible();
    await expect(page.getByText('Quick Launch')).toBeVisible();
  });
});
