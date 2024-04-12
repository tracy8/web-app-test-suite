import {test, expect } from '@playwright/test';

//Successful registration
test ('registration', async ({page}) => {

    await page.goto('https://sahaavi.github.io/Form-Validation-JavaScript/index.html')
    await page.pause()
    await page.getByLabel('Name', { exact: true }).fill('Admin Gab');
    await page.locator('#emails').fill('admin@gmail.com');
    await page.getByLabel('Username').fill('Admin');
    await page.locator('#pass').fill('admin123');
    await page.locator('#conpass').fill('admin123');
    await page.locator('#mobileNumber').click();
    // await page.locator('#mobileNumber').fill('0780034567');
    await page.locator('#mobileNumber').fill('+0780034567');
    await page.getByRole('button', { name: 'Submit' }).click();

    })
