describe('Sapin products', () => {
  beforeEach(() => {
    cy.setCookie('brand', 'sapin');
    cy.visit('http://localhost:3000/products')
  })

  it("should render the products", () => {
    cy.get("a").contains("456-efg");
    cy.get("a").contains("567-ihj").click();

    cy.get("h2").contains("Product: 567-ihj");
  });
})
