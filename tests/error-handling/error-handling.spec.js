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

    // Wait for the UI errors to appear
  await page.waitForSelector('input[id=name] + .error-message');
  await page.waitForSelector('input[id=emails] + .error-message');
  await page.waitForSelector('input[id=username] + .error-message');
  await page.waitForSelector('input[id=pass] + .error-message');
  await page.waitForSelector('input[id=conpass] + .error-message');
  await page.waitForSelector('input[id=mobileNumber] + .error-message');

  // Check if the UI error messages are visible
  await expect(page).toHaveText('input[id=name] + .error-message', 'Name is required');
  await expect(page).toHaveText('input[id=emails] + .error-message', 'Email must be a valid email address');
  await expect(page).toHaveText('input[id=username] + .error-message', 'Username is required');
  await expect(page).toHaveText('input[id=pass] + .error-message', 'Password must be at least 8 characters long');
  await expect(page).toHaveText('input[id=conpass] + .error-message', 'Passwords do not match');
  await expect(page).toHaveText('input[id=mobileNumber] + .error-message', 'Mobile Number must be a valid phone number');
    })
