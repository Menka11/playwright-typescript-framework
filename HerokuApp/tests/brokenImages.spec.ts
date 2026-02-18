import{test, expect} from '@playwright/test';

test('Count broken images',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/broken_images');
    const imageCount = await page.locator('img').all();
    let brokenImages:any = '';

    for (const image of imageCount){
        const src = await image.getAttribute('src');
        if(src){
            const response = await page.request.get(`https://the-internet.herokuapp.com/${src}`,{params:src});
            if(response.status()!=200){
                console.log('Image is broken');
                brokenImages++;
            }
        }
    }
    console.log('Number ofbroken images are:',brokenImages);
})