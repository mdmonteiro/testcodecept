const expect = require('chai').expect;
const { I } = inject();

Feature('API Two - Planet');

Scenario('Teste Status Code', async () => {
    const res = await I.sendGetRequest('/api/planets/1/');
    expect(res.status).to.eql(200);

});

Scenario('Validação Name', async () => {
    const res = await I.sendGetRequest('/api/planets/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.name).to.eql('Tatooine');

});

Scenario('Validação Rotation_period', async () => {
    const res = await I.sendGetRequest('/api/planets/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.rotation_period).to.eql('23');

});

Scenario('Validação Orbital_period', async () => {
    const res = await I.sendGetRequest('/api/planets/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.orbital_period).to.eql('304');

});

Scenario('Validação Climate', async () => {
    const res = await I.sendGetRequest('/api/planets/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.climate).to.eql('arid');

});

Scenario('Validação Gravity', async () => {
    const res = await I.sendGetRequest('/api/planets/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.gravity).to.eql('1 standard');

});

Scenario('Validação Terrain', async () => {
    const res = await I.sendGetRequest('/api/planets/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.terrain).to.eql('desert');

});

Scenario('Validação Surface_water', async () => {
    const res = await I.sendGetRequest('/api/planets/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.surface_water).to.eql('1');

});

Scenario('Validação Population', async () => {
    const res = await I.sendGetRequest('/api/planets/1/');
    //to get the reponse data, use res.data.data
    expect(res.data.population).to.eql('200000');

});

