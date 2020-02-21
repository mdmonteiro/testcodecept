const expect = require('chai').expect;
const { I } = inject();

Feature('API');

Scenario('Teste API', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    expect(res.status).to.eql(200);

});

Scenario('Validação do Name', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.name).to.eql('Luke Skywalker');

});

Scenario('Validação do height', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.height).to.eql('172');

});

Scenario('Validação hair_color', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.hair_color).to.eql('blond');

});

Scenario('Validação skin_color', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.skin_color).to.eql('fair');

});

Scenario('Validação eye_color', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.eye_color).to.eql('blue');

});

Scenario('Validação birth_year', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.birth_year).to.eql('19BBY');

});

Scenario('Validação gender', async () => {
    const res = await I.sendGetRequest('/api/people/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.gender).to.eql('male');

});
