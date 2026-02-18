import {test as base} from '@playwright/test';
import { Page } from 'playwright';


export const test = base.extend<
    {loginFixture: any,
        login1: any
     }>({  

    loginFixture: async({page}, use)=>{
        await page.goto('https://the-internet.herokuapp.com/login');
        await page.getByRole('textbox',{name:'username'}).fill('tomsmith');
        await page.getByRole('textbox',{name:'password'}).fill('SuperSecretPassword!');
        await page.getByRole('button',{name:'Login'}).click();
        await use(page);
    },
     login1: async({page},use) =>{
         await page.goto('https://the-internet.herokuapp.com/login');
        await page.getByRole('textbox',{name:'username'}).fill('tomsmith');
        await page.getByRole('textbox',{name:'password'}).fill('SuperSecretPassword!');
        await page.getByRole('button',{name:'Login'}).click();
        await use(page);

    }
})
