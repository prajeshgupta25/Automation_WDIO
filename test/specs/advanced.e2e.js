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

    it.only('Create and Switch New Window', async () =>{
        await browser.url("https://www.google.com")
        await browser.newWindow("https://webdriver.io")
        await browser.pause(5000)
        await browser.switchWindow('google.com')
        await browser.pause(5000)
    })

    async function loadWebsite(){
        await browser.url('https://the-internet.herokuapp.com/upload')

    }

})