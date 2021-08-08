describe("First test suite",()=>{
    it("GET test case",()=>{
      cy.request('GET','http://httpbin.org/get').then((response)=>{
        expect(response.body).to.have.property('url');
      });
    });

    it("POST test case",()=>{
      cy.request('POST','http://httpbin.org/post',{
        name: 'Priya',
        Age: 25,
        City: 'Chennai'
      }).then((response)=>{
        expect(response.body.json).deep.equals({
          name: 'Priya',
          Age: 25,
          City: 'Chennai'
        });
      })
    });

    it("PATCH test case",()=>{
      cy.request('PATCH','http://httpbin.org/patch',{
         Age: 26
      }).then((response)=>{
         expect(response.body.json).deep.equals({
           Age: 26
         })
      });
    })
})