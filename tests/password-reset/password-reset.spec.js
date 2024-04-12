import {test, expect } from '@playwright/test';

//The password reset functionality
test ('Password reset', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForSelector("input[name='username']")
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForSelector('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon')
    await page.locator('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
    await page.getByRole('menuitem', { name: 'Change Password' }).click();
    await page.getByRole('textbox').nth(1).fill('');
    
    await page.getByRole('textbox').nth(2).fill('123admin');
    await page.getByRole('textbox').nth(3).fill('123admin');
    await page.getByRole('button', { name: 'Save' }).click();   


    })
