import {test, expect, Locator} from '@playwright/test';
test("Single static Dropdown selection",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    // await page.locator("//select[@id='dropdown']").click();
    // await page.selectOption("//select[@id='dropdown']",'Option 2');
    // await expect(page.locator("//select[@id='dropdown']//option[@selected]")).toHaveAttribute('selected','selected');

    
    // await page.selectOption('#dropdown',{value:'1'});
    // await page.selectOption('#dropdown',{label:'Option 1'});
    // await page.selectOption('#dropdown',{index:2});

    // get all options 
    const allOptions = (await page.$$('#dropdown>option'));
    for (const e of allOptions){
        const optionsName = await e.textContent();
        console.log(optionsName);
        if(optionsName == 'Option 1'){
            await page.selectOption('#dropdown',{label:optionsName});
            break;
        }
    }
    await expect(page.locator('#dropdown')).toHaveValue('1');
    await page.waitForTimeout(5000);


})