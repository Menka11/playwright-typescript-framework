import {test, expect} from '@playwright/test';

test("Dynamic Controls",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
    await page.locator("//input[@type='checkbox']").check();
    await expect(page.locator("//input[@type='checkbox']")).toBeChecked();

    await page.getByRole('button',{name: 'Remove'}).click();
    await expect(page.locator("//input[@type='checkbox']")).not.toBeVisible();
    await expect(page.getByRole('button',{name:'Add'})).toBeVisible();

    await page.getByRole('button',{name:'Add'}).click();
    await expect(page.locator("//input[@type='checkbox']")).toBeVisible();

    // for(let i =0;i<5;i++){
    //     await page.getByRole('button',{name:'Remove'}).click();
    //     await page.getByRole('button',{name:'Add'}).click();
    //     await expect(page.locator("//input[@type='checkbox']")).toBeVisible();
        
    // }

    await page.locator("//input[@type='text']").isDisabled();
    await page.getByRole('button',{name: 'Enable'}).click();

    await page.locator("//input[@type='text']").isEditable();
    await page.locator("//input[@type='text']").fill('Test');






})