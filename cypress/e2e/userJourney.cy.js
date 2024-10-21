describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3001/");
  });

  it("A user can arrive at the home page of the quiz to be greeted by the start quiz button.", () => {
    cy.visit("http://127.0.0.1:3001/");
  });

  it("A user can click the start button and the quiz will start.", () => {
    //click the start button
    cy.get("div button").click();
    //check that the questions display on the page
    cy.get(".alert .alert-secondary").should(($el) => {
      const questions = $el.map((i, el) => {
        return Cypress.$(el).attr("alert-secondary");
      });
      questions.each((i, question) => {
        expect(question).to("be.visible");
      });
    });
  });

  it("A user can answer questions and new questions will be displayed on the page", () => {
    //click the start button
    cy.get("div button").click();

    //click the quiz question button
    cy.get(".mt-3").children().eq(0).click();
  });
});
