import {test, expect } from '@playwright/test';

//The password reset functionality
test ('Password reset', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.pause()
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
    await page.getByRole('menuitem', { name: 'Change Password' }).click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('admin123');
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('admin12');
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('123admin');
    await page.getByRole('button', { name: 'Save' }).click();  

    })
