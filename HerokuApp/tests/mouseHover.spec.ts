import {test, expect} from '@playwright/test';

test('Mouse Hover',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');

    for (let i=0;i<3;i++){
        await page.locator("//div[@class='figure']").nth(i).hover();
        await expect(page.locator("//div[@class='figcaption']//h5").nth(i)).toHaveText(`name: user${i+1}`);
        await page.waitForTimeout(5000);
    }
    // await page.goto('http://www.laitmatus.online/');
    // await page.locator("//div[@class='mega-menu-wrap']//a[text()='Storage Types']").first().hover();
    // await page.locator("//a[text()='Truck Parkings']").first().hover();
    // await page.locator("//a[text()='Box Truck Storage']").first().click();
    // await expect(page.locator('h1.text-white')).toContainText('Box Truck Storage');
})