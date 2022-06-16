describe('Advance Testing', () => {

    it('File Upload', async () => {
        await browser.url("https://the-internet.herokuapp.com/upload")

        const filePath = './my_ss.png'
        const remoteFilePath = await browser.uploadFile(filePath)

        let chooseFileBtn = await $('#file-upload')
        await chooseFileBtn.setValue(remoteFilePath)

        let uploadBtn = await $('#file-submit')
        await uploadBtn.click()
        await browser.pause(5000)
    })

})