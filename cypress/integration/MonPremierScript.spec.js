describe('SWAG LABS',function() {

        it('Authentification Valide',function(){
                cy.visit('www.saucedemo.com');
                cy.url().should('include','saucedemo');
                cy.get('[data-test="username"]').type("standard_user");
                cy.get('[data-test="password"]').type("secret_sauce");
                cy.get('[data-test="login-button"]').click();
                cy.url().should('include','inventory');
                cy.contains("Products");

                cy.get('[class="btn btn_primary btn_small btn_inventory"]').should('be.visible');
                cy.get('[class="btn btn_primary btn_small btn_inventory"]').should('include.text','Add to cart'); 
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
                cy.get('[class="btn btn_secondary btn_small btn_inventory"]').should('be.visible');
                cy.get('[class="btn btn_secondary btn_small btn_inventory"]').should('include.text','Remove');

                cy.get("[class='inventory_item']"); //trouver le nembre des elements de la liste des produits

                cy.get('[class="inventory_item_img"]').find("img").should('be.visible'); // verfieir si les images des produit sont visible
                cy.get('#item_4_img_link').find("img").should('be.visible'); // verifier si l'image(item_4_img_link) est visible 
                cy.get('[class="inventory_item_img"]').first().should('be.visible'); // verifier si le 1er element de la list est visible 
                cy.get('[alt="Sauce Labs Backpack"]').should('have.class','inventory_item_img');// verifier si l'image Sauce Labs Backpack a la class inventory_item_img
                
        });

        it.only('Authentification PWD InValide',function(){
                cy.visit('www.saucedemo.com');
                cy.url().should('include','saucedemo');
                cy.get('[data-test="username"]').type("standard_user");
                cy.get('[data-test="password"]').type("test01");
                cy.get('[data-test="login-button"]').click();
                cy.contains("Username and password do not match any user in this service")
    });

        it('Authentification user InValide',function(){
                cy.visit('www.saucedemo.com');
                cy.url().should('include','saucedemo');
                cy.get('[data-test="username"]').type("usertest");
                cy.get('[data-test="password"]').type("test01");
                cy.get('[data-test="login-button"]').click();
                cy.contains("Username and password do not match any user in this service")
        });

        it('Authentification user locked',function(){
                cy.visit('www.saucedemo.com');
                cy.url().should('include','saucedemo');
                cy.get('[data-test="username"]').type("locked_out_user");
                cy.get('[data-test="password"]').type("secret_sauce");
                cy.get('[data-test="login-button"]').click();
                cy.contains("Sorry, this user has been locked out.");
         });
});