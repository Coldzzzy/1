describe('Проверка авторизации', function () {
	it('Верный пароль и верный логин', function () {
		cy.visit('/')
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)')
		cy.get('#mail').type('userlogin')
		cy.get('#pass').type('userpass')
		cy.get('#loginButton').click()
		cy.get('#messageHeader').should('be.visible')
		cy.get('#messageHeader').contains('Авторизация прошла успешно')
		cy.get('#exitMessageButton > .exitIcon').should('be.visible')
	})

	it('Верный логин и неверный пароль', function () {
		cy.visit('/')
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)')
		cy.get('#mail').type('userlogin')
		cy.get('#pass').type('userpass')
		cy.get('#loginButton').click()
		cy.get('#messageHeader').should('be.visible')
		cy.get('#messageHeader').contains('Такого логина или пароля нет')
		cy.get('#exitMessageButton > .exitIcon').should('be.visible')
	})

	it('Валидация на наличие @', function () {
		cy.visit('/')
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)')
		cy.get('#mail').type('userlogin')
		cy.get('#pass').type('userpass')
		cy.get('#loginButton').click()
		cy.get('#messageHeader').should('be.visible')
		cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
		cy.get('#exitMessageButton > .exitIcon').should('be.visible')
	})

	it('Восстановление пароля', function () {
		cy.visit('/')
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)')
		cy.get('#forgotEmailButton').click()
		cy.get('#mailForgot').type('userlogin')
		cy.get('#restoreEmailButton').click()
		cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
		cy.get('#exitMessageButton > .exitIcon').should('be.visible')
	})
})

// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
