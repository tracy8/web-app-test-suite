import {test, expect } from '@playwright/test';

//Successful registration
test ('registration with valid data', async ({page}) => {

    await page.goto('https://sahaavi.github.io/Form-Validation-JavaScript/index.html')
    await page.waitForSelector('input[name="name"]')
    await page.locator('#name').fill('Admin Gab');
    await page.locator('#emails').fill('admin@gmail.com');
    await page.locator('#username').fill('Admin');
    await page.locator('#pass').fill('admin123');
    await page.locator('#conpass').fill('admin123');
    await page.locator('#mobileNumber').click();
    // await page.locator('#mobileNumber').fill('0780034567');
    await page.locator('#mobileNumber').fill('+0780034567');
    await page.getByRole('button', { name: 'Submit' }).click();

    })


    test('registration with invalid data', async ({page}) => {
        
        // test name
        await page.goto('https://sahaavi.github.io/Form-Validation-JavaScript/index.html')
        await page.waitForSelector('input[name="name"]')
        await page.locator('#name').fill('');
        await page.getByRole('button', { name: 'Submit' }).click(); // click to submit form with empty name field
        await page.waitForSelector('span[id="Name"]');
        await expect(await page.locator("span[id='Name']")).toContainText('Please fill the Name field');
        await page.locator('#name').fill('Admin Gab'); // then fill valid name

        // test email
        await page.locator('#emails').fill('');
        await page.getByRole('button', { name: 'Submit' }).click(); // click to submit form with empty email field
        await page.waitForSelector('span[id="emailids"]');
        await expect(await page.locator("span[id='emailids']")).toContainText(' Please fill the email id field');
        await page.locator('#emails').fill('invalieemail.com');
        await page.getByRole('button', { name: 'Submit' }).click(); // click to submit form with invalid email
        await page.waitForSelector('span[id="emailids"]');
        await expect(await page.locator("span[id='emailids']")).toContainText('Invalid Email');
        await page.locator('#emails').fill('email@example.com'); // then fill valid email


        // test username
        await page.locator('#user').fill('');
        await page.getByRole('button', { name: 'Submit' }).click(); // click to submit form with empty username field
        await page.waitForSelector('span[id="username"]');
        await expect(await page.locator("span[id='username']")).toContainText('Please fill the username field');
        await page.locator('#user').fill('Admin'); // then fill valid username


        const password = 'admin123'

        // test password
        await page.locator('#pass').fill('');
        await page.getByRole('button', { name: 'Submit' }).click(); // click to submit form with empty password field
        await page.waitForSelector('span[id="passwords"]');
        await expect(await page.locator("span[id='passwords']")).toContainText('Please fill the password field');
        await page.locator('#pass').fill('pass'); // then fill invalid password
        await page.getByRole('button', { name: 'Submit' }).click(); // click to submit form with invalid password
        await page.waitForSelector('span[id="passwords"]');
        await expect(await page.locator("span[id='passwords']")).toContainText('Passwords lenght must be between 5 and 20');
        await page.locator('#pass').fill(password); // then fill valid password

        // test confirm password
        await page.locator('#conpass').fill('diffPass');
        await page.getByRole('button', { name: 'Submit' }).click(); // click to submit form with different confirm password
        await page.waitForSelector('span[id="confrmpass"]');
        await expect(await page.locator("span[id='confrmpass']")).toContainText('Password Mismatch');
        await page.locator('#conpass').fill(password); // then fill valid confirm password



        // test mobile number
        await page.locator('#mobileNumber').fill('');
        await page.getByRole('button', { name: 'Submit' }).click(); // click to submit form with empty mobile number field
        await page.waitForSelector('span[id="mobileno"]');
        await expect(await page.locator("span[id='mobileno']")).toContainText('Please fill the mobile NUmber field');
        await page.locator('#mobileNumber').fill('1234567');
        await page.getByRole('button', { name: 'Submit' }).click(); // click to submit form with invalid mobile number
        await page.waitForSelector('span[id="mobileno"]');
        await expect(await page.locator("span[id='mobileno']")).toContainText('Mobile Number must be 11 digits only');
        await page.locator('#mobileNumber').fill('+1780034567'); // then fill valid mobile number

    });
