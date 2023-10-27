
export class URLService {

  constructor() {
  }

   async getDecodedURL(url: string) {

    const response = await fetch(`http://192.168.178.44:4200/decode/${url}`, {
      method: 'GET',
    });
    if(!response.ok) {
      alert('Could not find URL.');
    } else {
        const responseData = await response.json();
        return responseData.decoded_url;
    }
  }

  async getEncodedURL(encode_url: string){

      const url = encodeURIComponent(encode_url);

    const response = await fetch(`http://192.168.178.44:4200/encode?url=${url}` , {
      method: 'POST',
    });
    if (!response.ok) {
      alert("URL could not be shortened.");
    } else {
        const responseData = await response.json();
        return responseData.encoded_url;
    }
  }

}
