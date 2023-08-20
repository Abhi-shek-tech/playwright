import { test, expect, chromium } from '@playwright/test';


test('has title', async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const newPage = await context.newPage();

  await newPage.goto('https://in.bookmyshow.com/'); // Replace with the URL of the page you want to visit

  const pageTitle = await newPage.title();
  console.log('Page Title:', pageTitle);

});

test('get started link', async ({ page , browserName }) => {
if (browserName === 'chromium')
  // Click the get started link.
  await page.goto('https://www.makemytrip.com/');
  await page.waitForTimeout(300);
  const pageTitle = await page.title();
  console.log('Page Title:', pageTitle);

  await page.goto('https://www.makemytrip.com/holidays-india/');

  const pagenavigated = await page.title();
  console.log('Page Title:', pagenavigated);

  await page.getByLabel('From CityIndia').click();
  await page.getByTestId('citypicker_input').fill('new delhi');

  await page.locator('p').filter({ hasText: 'New Delhi, India' }).click();

  await page.getByLabel('To City/Country/Category').click();
  
  await page.getByPlaceholder('To').press('Enter');
  await page.getByPlaceholder('To').fill('goa');
  await page.getByText('Goa108 PackagesSTATE').click();
  await page.getByLabel('Fri Sep 01 2023').getByText('1').click();
  await page.getByTestId('adult-increment-counter').locator('path').click();
  await page.getByTestId('adult-increment-counter').locator('path').click();
  await page.getByTestId('adult-increment-counter').locator('path').click();  
  // Create a selector
  const mySelector = '4 guests'; // Replace with your desired selector

  // Use the selector to interact with the element
  const element = page.getByText(mySelector);
  if (element) {
    // Perform actions on the element
    await element.click();
  } else {
    console.log('room cannot take more than 4 guest');
  }
//   await page.getByText('4 guests').click();
const add = page.getByRole('button', { name: '+ ADD ANOTHER ROOM' });
if (await add.isEnabled()) {
    await add.click()
  } else {
    console.log('another room cannot be added');
  }
//   await page.getByRole().click();
  
  await page.getByTestId('adult-increment-counter').locator('path').click();  
  await page.getByTestId('adult-increment-counter').locator('path').click();
  
  //await page.getByRole('button', { name: '+ ADD ANOTHER ROOM' }).click();
  const add2 = page.getByRole('button', { name: '+ ADD ANOTHER ROOM' });
    if (await add2.isEnabled()) {
        await add2.click()
    } else {
        console.log('another room cannot be added');
    }
  await page.getByTestId('adult-increment-counter').locator('path').click();  
  await page.getByTestId('adult-increment-counter').locator('path').click();  

  const apply= page.getByRole('button', { name: 'APPLY' });
 
      if (apply) {
        await apply.click()
    } 
    else {
        await page.click( apply, {timeout: 4000});
    } 
   console.log('apply the rooms');
    

  await page.getByText('5 ★(43)').click();

 const apply2= page.getByRole('button', { name: 'APPLY' });
    if (apply2) {
        await apply2.click()
    } 
    else {
        await page.click( apply2, {timeout: 4000});
    } 
  //await page.getByRole('button', { name: 'APPLY' }).click();
  
  const Search= page.getByRole('button', { name: 'Search' })
  if (Search) {
    // Perform actions on the element
    await Search.click( );
  }
  else{
    await page.click(Search, {timeout: 9000});
  }
  
  // Wait for the new page to load to the domcontentloaded state.
  async function waitUntilPageLoaded() {
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });
  }
  await waitUntilPageLoaded();
  
  const skip_appears = page.getByRole('button', { name: 'SKIP' });
 
  if (skip_appears) {
    // Perform actions on the element
    await skip_appears.click( );
  }
  else{
    await page.click(skip_appears, {timeout: 9000});
  }
  
  await page.locator('.close').first().click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTitle('country inn').click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'SKIP' }).click();
  await page1.getByRole('button', { name: 'Search' }).click();
  await page1.getByText('POLICIES').click();
});
