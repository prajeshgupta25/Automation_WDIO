describe('My First Test Suite', () => {
    it('my first wdio test', async () => {
        let myUrl = "https://www.google.com"
    //     let smallPause = 2000
    //     let bigPause = 5000

        //loading first url

        // await browser.url(myUrl)
        // await browser.pause(smallPause)
        
        // MODERN WAY

        // await expect(browser).toHaveTitleContaining('Google')
        // await expect(browser).toHaveUrlContaining('google.com')

        // let pageElement = await $('a')
        // await expect(pageElement).toExist()
        // await expect(pageElement).toBeDisplayed()
        // await expect(pageElement).toHaveTextContaining('Gmail')
    })

    it.only('Forms and Inputs', async()=>{
        await browser.url('https://www.saucedemo.com')
        let usernameInput = await $('#user-name')
        let passwordInput = await $('#password');
        let loginBtn = await $('#login-button')
        let bigPause = 5000
        
        // Add Value
        // Set Value
        // Clear Value
        
        await usernameInput.setValue('standard_user')
        await passwordInput.setValue('secret_sauce')
        await loginBtn.click()
        await browser.pause(bigPause)

        let inventoryContainer = await $('inventory_container')
        await expect(inventoryContainer).toBeDisplayed()
    })





})


