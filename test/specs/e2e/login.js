describe('Login Flow', () => {
   before(async () => {
      //Load homepage url = "http://zero.webappsecurity.com/index.html"
      await browser.url('http://zero.webappsecurity.com/index.html');

   })

   it('Should not login with invalid name and password', async () => {

      //Click in sign in button
      await browser.waitAndClick('#signin_button')
      
      //fill the form
      await $('#login_form').waitForDisplayed();
      await $('#user_login').setValue('prappy')
      await $('#user_password').setValue('prappy')
      
      //submit the form
      await $('.btn.btn-primary').click()

      //verify the error message
      let errorMsg = await $('.alert.alert-error')
      await expect(errorMsg).toHaveTextContaining('Login and/or password are wrong.')
   })

   it('Reset Account Password', async () => {
      const email = 'test@testmail.com'
      //Click on reset button
      await browser.waitAndClick('div.offset3.span6 a')

      //Fill form
      await $('#send_password_form').waitForDisplayed()
      await $('#user_email').setValue(email)

      //Submit form
      await $('input[type=submit]').click()

      //Verify message **TO check**
      const resetMsg = await (await $('.span6'))
      await expect(resetMsg).toHaveTextContaining(`email: ${email}`)

   })

})