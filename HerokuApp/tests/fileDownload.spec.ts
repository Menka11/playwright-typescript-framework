import {test,expect} from '@playwright/test';

test('file download',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download');
    const count = await page.locator("//div[@class='example']//a").count();
    for(let i = 0;i < count; i++){
        await page.locator("//div[@class='example']//a").nth(i).click();
        const download = await page.waitForEvent('download');
        await download.saveAs(`downloadedFiles/${i}.txt`);
    }
    
    


})