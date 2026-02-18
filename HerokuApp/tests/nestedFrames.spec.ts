import {test, expect} from '@playwright/test';

test('handle Nested Frames',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    //accessing top frame
    const topFrame = page.frameLocator("//frame[@name='frame-top']");
    // accessing subframe 
    const leftFrame = topFrame.frameLocator("//frame[@name='frame-left']");
    const middleFrame = topFrame.frameLocator("//frame[@name='frame-middle']");
    const rightFrame = topFrame.frameLocator("//frame[@name='frame-right']");
    //inteacting and validating nested frame

    await expect(leftFrame.locator('body')).toHaveText('LEFT');
    await expect(middleFrame.locator('body')).toHaveText('MIDDLE');
    await expect(rightFrame.locator('body')).toHaveText('RIGHT');

    //accessing bottom frame
    await expect(page.frameLocator("//frame[@name='frame-bottom']").locator('body')).toHaveText('BOTTOM');

    
    
})