import {test,expect} from '@playwright/test';

test('Basic Authentication',async({browser})=>{ 
    const browserContext = await browser.newContext(
        {   httpCredentials:{
                username: 'admin',
                password: 'admin',
        }
    });
    
    const page = await browserContext.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await expect(page.locator("//p[contains(text(),'Congratulations!')]")).toBeVisible();

})