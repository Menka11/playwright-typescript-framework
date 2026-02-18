// spec: test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
//@ts-check
test.describe('Storage Facility Search and Discovery', () => {
  
  test('User searches for storage facilities by location and storage type',{tag:'@fast'} ,async ({ browser }) => {
    // Navigate to the RecNation Storage homepage
    const adminContext   = await browser.newContext();
    const userContext  = await browser.newContext();

    const adminPage = await adminContext.newPage();
    const page = await userContext.newPage();

    
    await page.goto('http://www.laitmatus.online/');

    await adminPage.goto('http://www.laitmatus.online/wp-login.php');
    
    // Verify homepage loads
    await expect(page).toHaveTitle('Home page - RecNation Storage');
    await expect(adminPage).toHaveTitle('Log In ‹ RecNation Storage — WordPress');

    // Fill in location: Dallas, TX
    const locationInput = page.getByRole('textbox', { name: 'Search location' });
    await locationInput.fill('Dallas, TX');

    // Select storage type: Vehicle Storage
    await page.getByRole('button', { name: 'Select type' }).click();
    await page.getByRole('button', { name: 'Vehicle Storage', exact: true }).click();

    // Click search button to execute search
    // The search button has an image icon inside it
    const allButtons = page.locator('button:has(img)');
    const buttonCount = await allButtons.count();
    // Search button is typically near the end of the form, click the last one
    await allButtons.nth(buttonCount - 1).click();
    
    // Wait for navigation to search results
    await page.waitForURL(/search\?/, { timeout: 15000 });

    // Verify we're on the search results page
    await expect(page).toHaveURL(/search\?/);
  });
});
