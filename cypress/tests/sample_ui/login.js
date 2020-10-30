describe('This Feature tests the login functionality',()=>{
    it('Login with a valid user and invalid password',()=>{
        cy.login('Katharina_Bernier','secret');
        cy.get('.MuiAlert-message').should('contain','Username or password is invalid');
        
    }),
    it('Login with Invalid user and valid password',()=>{
        cy.login('Katharima_Bernier','s3cret');
        cy.get('.MuiAlert-message').should('contain','Username or password is invalid');
    }),
    it('Login with Valid username and Password',()=>{
        cy.login('Katharina_Bernier','s3cret');
        cy.get('[data-test="sidenav-signout"]').should('contain','Logout');
    })
})