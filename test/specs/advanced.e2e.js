describe('Advance Testing', () => {

    let uploadBoxSelector = '#file-upload'
    let submitUploadSelector = '#file-submit'

    beforeEach(async () =>{
        await loadWebsite()
    })

    it('File Upload 1', async () => {

        const filePath = './my_ss.png'
        await browser.customFileUpload(filePath, uploadBoxSelector, submitUploadSelector)
        await browser.pause(5000)
    })

    it('File Upload 2', async () => {

        const filePath = './my_ss.png'
        await browser.customFileUpload(filePath, uploadBoxSelector, submitUploadSelector)
        await browser.pause(5000)
    })

    it('File Upload 3', async () => {

        const filePath = './my_ss.png'
        await browser.customFileUpload(filePath, uploadBoxSelector, submitUploadSelector)
        await browser.pause(5000)
    })

    it('Display Title and Url', async () =>{
        const results = await browser.getTitleAndUrl();
        console.log("Title = " + results.title)
        console.log("Url = " + results.url)

        await browser.waitAndClick('#file-submit')
        await browser.pause(5000)
    })

    it('Change Browser Session', async () => {
        console.log('Session Before Reload ' + browser.sessionId)
        await browser.reloadSession();
        console.log('Session After Reload ' + browser.sessionId)
    })

    it('Create and Switch New Window', async () =>{
        await browser.url("https://www.google.com")
        await browser.newWindow("https://webdriver.io")
        await browser.pause(5000)
        await browser.switchWindow('google.com')
        await browser.pause(5000)
    })

    it('Network Throttle', async () =>{
        await browser.throttle('Regular2G');
        await browser.url('https://webdriver.io')
        await browser.pause(5000)

        await browser.throttle('Regular4G');
        await browser.url('https://webdriver.io')
        await browser.pause(5000)

        await browser.throttle('offline');
        await browser.url('https://webdriver.io')
        await browser.pause(5000)
    })

    it('Executing Javascript', async () =>{
        const result = await browser.execute(
            (a, b) =>{
                return a + b 
            },
            5,
            10
        )
        await expect(result).toBe(15)
    })

    it.only('Execute Async Javascript', async () =>{
        const result = await browser.executeAsync(
            (a, b, done) => {
                setTimeout(() => {
                    done(a + b)
                }, 3000)
            },
            5,
            10
        )
        await expect(result).toBe(15)
    })

    async function loadWebsite(){
        await browser.url('https://the-internet.herokuapp.com/upload')

    }

})