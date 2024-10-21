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
    //check that there are 4 questions on the page now
    cy.get("div div")
      .eq(1)
      .children()
      .eq(1)
      .children()
      .should("have.length", 4);
  });

  it("A user can answer questions and new questions will be displayed on the page", () => {
    //click the start button
    cy.get("div button").click();

    //get the questions
    cy.get("div div")
      .eq(1)
      .children()
      .eq(1)
      .children()
      .eq(1)
      .invoke("text")
      .then((text) => {
        //click the quiz question button
        cy.get("div button").eq(0).click();

        //get the new question 1 and check that the old question 1 does not have the same text
        cy.get("div div")
          .eq(1)
          .children()
          .eq(1)
          .children()
          .eq(1)
          .invoke("text")
          .should("not.equal", text);
      });
  });

  it("When all questions are answered then the quiz is over.", () => {
    //click the quiz start button
    cy.get("div button").click();

    for (let x = 0; x < 10; x++) {
      //click the quiz question button
      cy.get("div button").eq(0).click();
    }

    //once everything check that we are now on the score page
    cy.get("alert-success").should(($el) => {
      expect($el).to("be.visible");
    });
  });
});
