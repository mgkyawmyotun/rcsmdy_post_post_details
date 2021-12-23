const BACKEND_URL = 'https://rcsmdy-post-post-details-48ujy.ondigitalocean.app';

export async function getPosts() {
  try {
    const response = await fetch(BACKEND_URL + '/post');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('ERROR');
  }
}

export async function getPost(post_id) {
  try {
    const response = await fetch(BACKEND_URL + '/post/' + post_id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('ERRRORORR');
  }
}
