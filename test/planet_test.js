var expect = require('chai').expect;
var { I } = inject();

Feature('API Two - Planet');

Scenario('Teste Status Code', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.status).to.eql(200);

});

Scenario('Validação Name', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.data.name).to.eql('Tatooine');

});

Scenario('Validação Rotation_period', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.data.rotation_period).to.eql('23');

});

Scenario('Validação Orbital_period', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.data.orbital_period).to.eql('304');

});

Scenario('Validação Climate', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.data.climate).to.eql('arid');

});

Scenario('Validação Gravity', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.data.gravity).to.eql('1 standard');

});

Scenario('Validação Terrain', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.data.terrain).to.eql('desert');

});

Scenario('Validação Surface_water', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.data.surface_water).to.eql('1');

});

Scenario('Validação Population', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.data.population).to.eql('200000');

});

