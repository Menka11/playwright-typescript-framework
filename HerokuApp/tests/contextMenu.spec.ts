import {test, expect} from '@playwright/test';

test("Context-menu",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/context_menu");
    await page.locator("//div[@id='hot-spot']").click({button:'right'});
    
    page.on('dialog', async(dialog)=>{
        await expect(dialog.message()).toContain('You selected a context menu');
        await dialog.accept();
    });
    

   
})