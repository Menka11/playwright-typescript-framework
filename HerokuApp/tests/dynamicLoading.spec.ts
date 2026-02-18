import {test, expect} from '@playwright/test';

test("Dynamic loading",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
    await page.locator("//a[contains(text(),'Example 1')]").click();
    await expect(page.getByRole('button',{name:'Start'})).toBeVisible();

    await page.getByRole('button',{name:'Start'}).click();
    await page.waitForSelector("//h4[text()='Hello World!']");
    await expect(page.locator("//h4[text()='Hello World!']")).toBeVisible();

    await page.goBack();
    await page.locator("//a[contains(text(),'Example 2')]").click();
    await expect(page.getByRole('button',{name:'Start'})).toBeVisible();

    await page.getByRole('button',{name:'Start'}).click();
    await page.waitForSelector("//h4[text()='Hello World!']");
    await expect(page.locator("//h4[text()='Hello World!']")).toBeVisible();

})