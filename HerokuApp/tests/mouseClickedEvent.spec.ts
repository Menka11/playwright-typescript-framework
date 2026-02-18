import {test, expect} from '@playwright/test';

test('various mouse events',async({page})=>{
    await page.goto('https://vinothqaacademy.com/mouse-event/');
    await page.focus("//input[@title='Enter First Name']");
    await page.locator("//input[@title='Enter First Name']").hover();
    await page.waitForTimeout(5000);
    //double click
    await page.focus("//button[@id='dblclick']");
    await page.getByRole('button',{name:'Double Click Me'}).dblclick();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Double Click Action is Performed');
     await page.waitForTimeout(5000);
    //right click/ context click

    await page.focus("//button[@id='rightclick']");
    await page.getByRole('button',{name:'Right Click Me'}).click({button:'right'});
    await expect(page.locator("//div[@id='myDiv']")).toBeVisible();

    await page.waitForTimeout(5000);

    await page.goto("https://the-internet.herokuapp.com/shifting_content");
    await page.getByText('Example 1: Menu Element').click({modifiers:['Shift']});
})