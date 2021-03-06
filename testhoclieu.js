describe('Kiem tra dang nhap', function() {

    context('Đăng nhập', function(){
    beforeEach(function(){
      cy.visit('https://hoclieu.sachmem.vn');
    })

    it('Test case đăng nhập thành công', function(){
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('ngtggiang@gmail.com'); // type email
      cy.get('#user_password').type('11111111'); // type password
      cy.get('#new_user > div:nth-child(6) > input').click();

      cy.url().should('include', 'https://hoclieu.sachmem.vn');
      cy.wait(2000);
       

      //cy.get('#userDropdown > span').should('contain', '(Trường)'); // type user_name
      
      cy.contains('Lớp 5').click();
      cy.contains('Bài tập cuối tuần Toán ').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > a.btn > .d-none').should('be.visible')

      
    })
    
  })
  
  
})




