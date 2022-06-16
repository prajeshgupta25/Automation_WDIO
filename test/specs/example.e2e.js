describe.skip('My First Test Suite', () => {
    it('my first wdio test', async () => {
        let myUrl = "https://www.google.com"
        let smallPause = 2000
        let bigPause = 5000

        //loading first url

        await browser.url(myUrl)
        await browser.pause(smallPause)
        
        // MODERN WAY

        await expect(browser).toHaveTitleContaining('Google')
        await expect(browser).toHaveUrlContaining('google.com')

        let pageElement = await $('a')
        await expect(pageElement).toExist()
        await expect(pageElement).toBeDisplayed()
        await expect(pageElement).toHaveTextContaining('Gmail')
    })

    it('Forms and Inputs', async()=>{
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

        let inventoryContainer = await $('#inventory_container')
        await expect(inventoryContainer).toBeDisplayed()
    })

    it('SelectBox and CheckBox', async () =>{
        await browser.url('https://devexpress.github.io/testcafe/example/')
        // await browser.pause(5000)
        let selectbox = await $('#preferred-interface')
        await selectbox.selectByVisibleText('Both')
        // await browser.pause(2000)
        let option = await $('option=Both')
        await expect(option).toBeDisplayed()
    })

    it('Set Browser Size', async () =>{
        let widtht = 800
        let height = 600
        browser.setWindowSize(widtht, height)
        await browser.url('https://www.example.com')

        let selector = await $('h1')
        await selector.waitForExist()
        await selector.waitForDisplayed()
        await browser.pause(4000)
    })

    it('Device Emulation', async () =>{
        let mobile = [375, 812]
        let tablet = [1024, 768]
        let desktop = [1650, 1050]

        //Mobile
        await browser.setWindowSize(mobile[0], mobile[1]);
        await browser.url('https://www.example.com')

        //Tablet
        await browser.setWindowSize(tablet[0], tablet[1]);
        await browser.url('https://www.example.com')

        //Desktop
        await browser.setWindowSize(desktop[0], desktop[1]);
        await browser.url('https://www.example.com')
    })

    it('Taking Screenshots ', async () =>{
        await browser.url('https://www.example.com')
        await browser.saveScreenshot('my_ss.png')

        let title = await $('h1')
        await title.saveScreenshot('title-screenshot.png')
    })

    it('', async () =>{

    })

})


