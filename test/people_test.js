var expect = require('chai').expect;
var { I } = inject();

Feature('API One - People');

Scenario('Teste Status Code', async () => {
    var res = await I.sendGetRequest('/api/people/1/');
    expect(res.status).to.eql(200);

});

Scenario('Validação Name', async () => {
    var res = await I.sendGetRequest('/api/people/1/');
    expect(res.data.name).to.eql('Luke Skywalker');

});

Scenario('Validação Height', async () => {
    var res = await I.sendGetRequest('/api/people/1/');
    expect(res.data.height).to.eql('172');

});

Scenario('Validação Hair_color', async () => {
    var res = await I.sendGetRequest('/api/people/1/');
    expect(res.data.hair_color).to.eql('blond');

});

Scenario('Validação Skin_color', async () => {
    var res = await I.sendGetRequest('/api/people/1/');
    expect(res.data.skin_color).to.eql('fair');

});

Scenario('Validação Eye_color', async () => {
    var res = await I.sendGetRequest('/api/people/1/');
    expect(res.data.eye_color).to.eql('blue');

});

Scenario('Validação Birth_year', async () => {
    var res = await I.sendGetRequest('/api/people/1/');
    expect(res.data.birth_year).to.eql('19BBY');

});

Scenario('Validação Gender', async () => {
    var res = await I.sendGetRequest('/api/people/1/');
    expect(res.data.gender).to.eql('male');

});
