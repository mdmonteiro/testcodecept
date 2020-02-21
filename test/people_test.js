const expect = require('chai').expect;
const { I } = inject();

Feature('API One - People');

Scenario('Teste Status Code', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    expect(res.status).to.eql(200);

});

Scenario('Validação Name', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.name).to.eql('Luke Skywalker');

});

Scenario('Validação Height', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.height).to.eql('172');

});

Scenario('Validação Hair_color', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.hair_color).to.eql('blond');

});

Scenario('Validação Skin_color', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.skin_color).to.eql('fair');

});

Scenario('Validação Eye_color', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.eye_color).to.eql('blue');

});

Scenario('Validação Birth_year', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.birth_year).to.eql('19BBY');

});

Scenario('Validação Gender', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.gender).to.eql('male');

});
