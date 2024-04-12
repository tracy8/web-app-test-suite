import {test, expect } from '@playwright/test';

//The login functionality
test ('login test', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    // await page.getByPlaceholder('Username').fill('Tracy');
    await page.getByPlaceholder('Username').fill('Admin');
    // await page.getByPlaceholder('Password').fill('123');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    })
