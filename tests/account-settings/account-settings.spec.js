import {test, expect } from '@playwright/test';

//The account settings validation
test ('Account settings', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForSelector('input[name="username"]');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForSelector('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon')
    await page.locator('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
    await page.getByRole('menuitem', { name: 'Change Password' }).click();
    await page.getByRole('textbox').nth(1).fill('admin123');
    await page.getByRole('textbox').nth(2).fill('123admin');
    await page.getByRole('textbox').nth(3).fill('123admin');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: 'My Info' }).click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('kapinto');
    await page.locator('label').filter({ hasText: /^Male$/ }).locator('span').click();
    await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
    await page.getByRole('link', { name: 'Contact Details' }).click();
    await page.getByRole('link', { name: 'Memberships' }).click();
    await page.getByPlaceholder('Type comment here').click();
    await page.getByPlaceholder('Type comment here').fill('its membership for 2 years');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForSelector('#oxd-toaster_1 > div')
    await expect(page).toHaveText('Successfully updated');


    })
