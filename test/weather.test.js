const expect = chai.expect;

describe('Weather app', () => {
  it('If passed sydney it should return 25', async () => {
    let data = await getWeatherFor('sydney');
    expect(data).to.equal(25);
  });
  it('If passed melbourne it should return 15', async () => {
    let data = await getWeatherFor('melbourne');
    expect(data).to.equal(15);
  });
  it('If passed london it should reject', () => {
    return getWeatherFor('london')
      .then((message) => {
        // If it succeeds do this code
      })
      .catch((message) => {
        expect(message).to.equal(
          'City london does not exist in our database'
        );
      });

      // return expectAsync(getWeatherFor('London')).toBeRejectedWith('City London does not exist in our database');
  });
});
