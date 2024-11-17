describe('Проверка авторизации', function () {
	it('Верный пароль и верный логин', function () {
		cy.visit('https://login.qa.studio/') // зашли на сайт
		cy.get('#mail').type('userlogin') // ввели верный логин
		cy.get('#pass').type('userpass') // ввели верный пароль
		cy.get('#loginButton').click() // нажал войти
		cy.get('#messageHeader').contains('Авторизация прошла успешно') // проверяю что после авторизации вижу текст
		cy.get('#messageHeader').should('be.visible') // смотрю что текст виден
		cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден
	})

	it('Востановление пароля', function () {
		cy.visit('https://login.qa.studio/') // зашли на сайт
		cy.get('#forgotEmailButton').click() // нажал на кнопку
		cy.get('#mailForgot').type('german@dolni.ru') // ввели любую почту
		cy.get('#restoreEmailButton').click() // нажал на кнопку
		cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') // проверяю что после авторизации вижу текст
		cy.get('#messageHeader').should('be.visible') // смотрю что текст виден
		cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден
		cy.get('#exitMessageButton > .exitIcon').click() // нажал на кнопку
	})

	it('Негативный тест кейс авторизации на пароль', function () {
		cy.visit('https://login.qa.studio/') // зашли на сайт
		cy.get('#mail').type('userlogin') // ввели верный логин
		cy.get('#pass').type('userpass') // ввели неверный пароль
		cy.get('#loginButton').click() // нажал войти
		cy.get('#messageHeader').contains('Такого логина или пароля нет') // проверяю что после авторизации вижу текст
		cy.get('#messageHeader').should('be.visible') // смотрю что текст виден
		cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден
		cy.get('#exitMessageButton > .exitIcon').click() // нажал на крестик
	})

	it('Негативный тест кейс авторизации на логин', function () {
		cy.visit('https://login.qa.studio/') // зашли на сайт
		cy.get('#mail').type('userlogin') // ввели неверный логин
		cy.get('#pass').type('userpass') // ввели неверный пароль
		cy.get('#loginButton').click() // нажал войти
		cy.get('#messageHeader').contains('Такого логина или пароля нет') // проверяю что после авторизации вижу текст
		cy.get('#messageHeader').should('be.visible') // смотрю что текст виден
		cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден
		cy.get('#exitMessageButton > .exitIcon').click() // нажал на крестик
	})

	it('Негативный тест кейс валидации', function () {
		cy.visit('https://login.qa.studio/') // зашли на сайт
		cy.get('#mail').type('userlogin') // ввели неверный логин он без @
		cy.get('#pass').type('userpass') // ввели верный пароль
		cy.get('#loginButton').click() // нажал войти
		cy.get('#messageHeader').contains('Нужно исправить проблему валидации') // проверяю что после авторизации вижу текст
		cy.get('#messageHeader').should('be.visible') // смотрю что текст виден
		cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден
		cy.get('#exitMessageButton > .exitIcon').click() // нажал на крестик
	})
	it('Негативный тест кейс валидации', function () {
		cy.visit('https://login.qa.studio/') // зашли на сайт
		cy.get('#mail').type('userlogin') // ввели логин
		cy.get('#pass').type('userpass') // ввели верный пароль
		cy.get('#loginButton').click() // нажал войти
		cy.get('#messageHeader').contains('Такого логина или пароля нет') // проверяю что после авторизации вижу текст
		cy.get('#messageHeader').should('be.visible') // смотрю что текст виден
		cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден
		cy.get('#exitMessageButton > .exitIcon').click() // нажал на крестик
	})
})
