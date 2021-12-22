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

export async function getPost(post_id) {
  try {
    const response = await fetch(BACKEND_URL + '/posts/' + post_id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('ERRRORORR');
  }
}
