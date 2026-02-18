import {test, expect} from '@playwright/test';
test('Drag and Drop',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    //In one step
    // await page.locator("//div[@id='column-a']").dragTo(page.locator("//div[@id='column-b']"));
    // expect(await page.locator("//div[@class='column']").nth(1).innerText()).toBe('A');

    //Multiple steps(manual way)
    // await page.locator("//div[@id='column-a']").hover();
    // await page.mouse.down();
    // await page.locator("//div[@id='column-b']").hover();
    // await page.mouse.up();

    // await page.waitForTimeout(3000);
    // await page.locator("//div[@id='column-a']").click();
    // await page.mouse.down();
    // await page.locator("//div[@id='column-b']").hover();
    // await page.mouse.up();
    
    await page.locator("//div[@id='column-a']").hover();
    await page.mouse.down();
    const destinationLocation = await page.locator("//div[@id='column-b']").boundingBox();
    console.log(destinationLocation);
    await page.mouse.move(destinationLocation.x+10, destinationLocation.y+10);
    await page.mouse.up();
    
    await page.waitForTimeout(3000);



})