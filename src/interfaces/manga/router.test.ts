const axios = require('axios');

test('Buscar mangas', async () => {
    const response = await axios({
        url: 'http://localhost:4000/api/mangas/',
        method: 'get'
    });

    expect(response.status).toBe(200);
})