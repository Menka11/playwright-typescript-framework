import{test, expect} from '@playwright/test';

test("Checkbox",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.locator("//input[@type='checkbox']").nth(0).check();
    await expect(page.locator("//input[@type='checkbox']").nth(0)).toBeChecked();

    await page.locator("//input[@type='checkbox']").nth(1).check();
    await expect(page.locator("//input[@type='checkbox']").nth(1)).toBeChecked();
})