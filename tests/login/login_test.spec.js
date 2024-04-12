import {test, expect } from '@playwright/test';

//The login functionality
test ('login valid credentials', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.pause()
    await page.waitForSelector('input[name="username"]')
    // await page.getByPlaceholder('Username').fill('Tracy');
    await page.getByPlaceholder('Username').fill('Admin');
    // await page.getByPlaceholder('Password').fill('123');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    })

    test ('login Invalid credentials', async ({page}) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // await page.pause()
        await page.waitForSelector('input[name="username"]')
        // await page.getByPlaceholder('Username').fill('Tracy');
        await page.getByPlaceholder('Username').fill('Admin');
        // await page.getByPlaceholder('Password').fill('123');
        await page.getByPlaceholder('Password').fill('wrongPassword');
        await page.getByRole('button', { name: 'Login' }).click();

        await page.waitForSelector('div[role="alert"]')
        await expect(page.locator('div[role="alert"]')).toHaveText('Invalid credentials')
    
        })
