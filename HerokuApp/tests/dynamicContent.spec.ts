import {test, expect} from '@playwright/test';
import { before } from 'node:test';

test('Dynamic Content',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dynamic_content"); 
    const beforeLoading = await page.screenshot();
    await page.reload();
    const afterLoading = await page.screenshot();
    expect(beforeLoading).not.toEqual(afterLoading);

})