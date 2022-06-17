describe('Search Features', async () =>{
   it('Should search values using the keyboard press', async () =>{
      await browser.url("http://zero.webappsecurity.com/index.html")
      await (await $('#searchTerm')).waitForDisplayed()
      await (await $('#searchTerm')).setValue('bank')
      await browser.keys('Enter')

      const result = await $('h2')
      await expect(result).toBeExisting()
      await expect(result).toHaveTextContaining('Search Results')
   })
})