import {test, expect} from '@playwright/test';

test('Add remove elements',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    const pageURL = page.url();
    expect (pageURL).toBe('https://the-internet.herokuapp.com/add_remove_elements/');

    await page.getByRole('button',{name:'Add Element'}).click();
    await expect(page.getByRole('button',{name:'Delete'})).toBeVisible();

    await page.getByRole('button',{name:'Delete'}).click();
    await expect(page.getByRole('button',{name:'Delete'})).toBeHidden();
})