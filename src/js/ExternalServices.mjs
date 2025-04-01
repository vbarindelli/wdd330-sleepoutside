
const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  return res.json().then(body => {
    if (res.ok) {
      return body;
    } else {
      throw { name: 'servicesError', message: body };
    }
  });
}

export default class ExternalServices {
  constructor() {
    // this.category = category;
    // this.path = `../public/json/${this.category}.json`;
  }
  async getData(category) {
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);

    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    // console.log(data.Result);
    return data.Result;
  }

  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(`${baseURL}/checkout`, options).then(convertToJson);
  }
}
