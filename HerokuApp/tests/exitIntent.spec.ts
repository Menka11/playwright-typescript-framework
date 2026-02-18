import {test, expect} from '@playwright/test';

test("Exit Intent",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/exit_intent");
    const viewPortSize = page.viewportSize();
    console.log("View port size is", page.viewportSize());

    //viewPortSize.width put mouse exactly on browser boundary or slightly out of it, so width-1 is inside the browser boundary
    
    await page.mouse.move(viewPortSize.width-1, 0);
    await page.mouse.move(viewPortSize.width-1, -10);
    await expect(page.locator("//div[@class='modal']")).toBeVisible();
})