var expect = require('chai').expect;
var { I } = inject();

Feature('API Two - Planet');

Scenario('Teste Status Code', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.status).to.eql(200);

});

Scenario('Validação Data JSON', async () => {
    var res = await I.sendGetRequest('/api/planets/1/');
    expect(res.data.name).to.eql('Tatooine')
    expect(res.data.rotation_period).to.eql('23')
    expect(res.data.orbital_period).to.eql('304')
    expect(res.data.climate).to.eql('arid')
    expect(res.data.gravity).to.eql('1 standard')
    expect(res.data.terrain).to.eql('desert')
    expect(res.data.surface_water).to.eql('1')
    expect(res.data.population).to.eql('200000');

});

