const GITHUB_URL = "https://api.github.com/users/"

export default class Adapter {

  static handleErrors(response){
    if(!response.ok){
      throw Error(response.statusText)
    }
    return response
  }

  static fetchGithubUser(username){
    return fetch(GITHUB_URL + username)
      .then(this.handleErrors)
      .then(res => res.json())
      // .catch(error => error)
  }

}
