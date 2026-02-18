import {test, expect} from '@playwright/test';
test('horizontal slidebar',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");
    const handle = page.locator("//input[@type='range']");
    const horizontalSlideBarSize = await page.locator("//div[@class='sliderContainer']").boundingBox();
    console.log(horizontalSlideBarSize);
   if(horizontalSlideBarSize){
    await handle.hover();
    await page.mouse.down();
    await page.mouse.click(horizontalSlideBarSize.x+10, horizontalSlideBarSize.y+10);
    // await page.waitForTimeout(3000);
    // await page.mouse.up();
   }
    await page.waitForTimeout(3000);
 

    


})