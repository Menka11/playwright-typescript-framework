import {test, expect} from '@playwright/test';

//@ts-check
test('upload file',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    const fileChooser = page.waitForEvent('filechooser');
    await page.locator("//input[@id='file-upload']").click();
    const chooseFileToUpload = fileChooser;
    (await chooseFileToUpload).setFiles('testData/some-file.txt');
    await page.getByRole('button',{name: 'Upload'}).click();
    await expect(page.locator("//h3[text()='File Uploaded!']")).toBeVisible();

})