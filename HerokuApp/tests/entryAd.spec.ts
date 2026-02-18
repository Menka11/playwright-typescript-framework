import {test, expect} from '@playwright/test';

test("Entry Ad",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/entry_ad');
    await page.locator("//div[@class='modal-footer']//p").click();
    
})