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
        await browser.pause(5000)
    })

    async function loadWebsite(){
        await browser.url('https://the-internet.herokuapp.com/upload')
    }

})