import {test, expect } from '@playwright/test';

//The handling of unexpected errors 
test ('error handling', async ({page}) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    //check element present or not
    await expect (page.locator('text=The Kitchen')).toBeVisible()
    // await expect.soft (page.locator('text=The Kitchen')).toBeHidden()
    await expect (page.locator('text=The Kitchen')).toHaveCount(1)
    
    })
 