

import{test,expect}from '@playwright/test';
test("login to the Applciation saucedemo" , async({page})=>
{
    await page.goto("https://www.saucedemo.com/");


})