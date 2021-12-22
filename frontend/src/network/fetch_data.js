const BACKEND_URL = 'https://jsonplaceholder.typicode.com';

export async function getPosts() {
  try {
    const response = await fetch(BACKEND_URL + '/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('ERROR');
  }
}
