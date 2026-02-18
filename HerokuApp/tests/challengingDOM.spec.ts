import {test, expect} from '@playwright/test';

test('Challenging DOM',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');
    const canvas = page.locator("//canvas[@id='canvas']");
    const originalScreenShot = await canvas.screenshot();
    await page.locator("//div[@class='large-2 columns']//a").nth(0).click();
    
    const updatedScreenShot = await canvas.screenshot();
    expect(originalScreenShot).not.toEqual(updatedScreenShot);

})