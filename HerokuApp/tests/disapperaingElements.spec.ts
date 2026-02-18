import {test, expect} from '@playwright/test';

test("Disapperaing elements",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
    await page.getByText('Home').click();
    const currentURL = page.url();
    expect(currentURL).toEqual('https://the-internet.herokuapp.com/');
    await page.goBack();
    await page.getByText('About').click();
    await expect(page.locator("//h1[text()='Not Found']")).toBeVisible();
    await page.goBack();
    await page.getByText('Contact US').click();
    await expect(page.locator("//h1[text()='Not Found']")).toBeVisible();
    await page.goBack();
    await page.getByText('Portfolio').click();
    await expect(page.locator("//h1[text()='Not Found']")).toBeVisible();
    await page.goBack();
    await page.goForward();
    expect(page.url()).toEqual('https://the-internet.herokuapp.com/portfolio/');

})