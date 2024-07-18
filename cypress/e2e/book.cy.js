describe('Библиотека', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.ml-auto > .ml-2').click();
  });

  it('Позитивный тест - авторизация', () => {
   // cy.get('#mail').type('bropet@mail.ru');
   // cy.get('#pass').type('123');
   cy.login("bropet@mail.ru", "123");
   cy.contains("Добро пожаловать").should("be.visible", true);
   cy.get('.pt-2')
  })

   it('Негативный тест - пустое поле ввода пароля', () => {
     cy.get('#mail').type('bropet@mail.ru');
     cy.get('#pass').then((elements) => {
       expect(elements[0].checkValidity(true)).to.be.false;
     });
   })

   it('Негативный тест - неверный email', () => {
    cy.get('#mail').type('borpet@mail.ru');
    cy.get('#pass').type('123');
    cy.contains('Submit').click();
    cy.get('.mb-3')
  })

  it('Позитивный тест - добавление книги', () => {
    cy.get('#mail').type('bropet@mail.ru');
    cy.get('#pass').type('123');
    cy.contains('Submit').click();
    cy.get('.p-0 > .btn').click();
    cy.get('#title').type('Война и мир');
    cy.get('#description').type('Поэма');
    cy.get('#authors').type('Толстой');
    cy.get('#favorite').click();
    cy.get('form > .ml-2').click();
    cy.get('.card-text')
  })

  it('Позитивный тест - удаление книги', () => {
    cy.get('#mail').type('bropet@mail.ru');
    cy.get('#pass').type('123');
    cy.contains('Submit').click();
    cy.get('.p-0 > .btn').click();
    cy.get('#title').type('Тихий Дон');
    cy.get('#description').type('роман-эпопея');
    cy.get('#authors').type('Шолохов');
    cy.get('#favorite').click();
    cy.get('form > .ml-2').click();
    cy.get('.card-text');
    cy.get('[href="book/8388ecf8-a930-4629-b46f-7e48d8169d8f"] > .h-100 > .card-footer > .btn')
  })
})