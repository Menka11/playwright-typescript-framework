import {test, expect} from '@playwright/test';

test("iFrame",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/iframe');
    await page.locator("//div[@class='tox-icon']").click();
    const frame = page.frameLocator(".tox-edit-area__iframe");
    await expect(frame.locator('body')).toHaveText('Your content goes here.');
})