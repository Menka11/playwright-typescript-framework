import {expect} from '@playwright/test';
import {test} from '../Fixture/loginPageFixture';

test('login page',async({login1})=>{
    
    // await page.goto('https://the-internet.herokuapp.com/login');
    // await page.getByRole('textbox',{name:'username'}).fill('tomsmith');
    // await page.getByRole('textbox',{name:'password'}).fill('SuperSecretPassword!');
    // await page.getByRole('button',{name:'Login'}).click();
    await expect(login1).toHaveURL('https://the-internet.herokuapp.com/secure');
})

test('loginPage1',async({loginFixture})=>{
    await expect(loginFixture).toHaveURL('https://the-internet.herokuapp.com/secure');
})