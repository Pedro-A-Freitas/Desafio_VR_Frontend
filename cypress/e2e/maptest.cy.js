describe('Home', () => {
  it('Confirm homepage', () => {
    cy.acessHome() //Comando customizado para acessar a home
    cy.title().should('eq', 'VR Benefícios - Vale Refeição, Vale Alimentação e Transporte') //Confirma que o site está carregando corretamente
  })

  it.only('Validate map', () => {
    cy.acessHome() //Comando customizado para acessar a home
    cy.get('a[href="/onde-aceita.htm"]').click()
    cy.get('a[class="vr-button vr-button--negative "]').click()
    cy.get('div[aria-label="Mapa"]').should('be.visible') //Confirma que o mapa foi carregado e está visível
  })
})