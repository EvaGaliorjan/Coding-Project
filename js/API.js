class FetchCountries {
    
  async fetchData(path, endpoint) {
      try {
          const response = await fetch(`${path}${endpoint}`) 
          const countries = await response.json()
       

      } catch (err) {
          console.error(err);
          return;
      }
  }
}
class reqRes {
baseUrl = "https://reqres.in/api";

constructor() {
  this.userToken = localStorage.getItem(window.USER_TOKEN_KEY);
  }
  
  async fetchRequest(params, options = {}) {
      return fetch(`${this.baseUrl}${params.endpoint}`, options);
  }
  async login(email, password, callback) {
     const params = {
          endpoint: '/login',
      };
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email,
              password
          }),
      };
      try {
          const res = await this.fetchRequest(params, options);
          const result = await res.json();

      return result;

      } catch (err) {
          console.error("[reqres.login]", err);
          return;
      }

  }
}
window.ApiService = new reqRes();
class Storage { 
  constructor() {
      this.storage = localStorage
  }
  store(key, value) {
      this.storage.setItem(key, JSON.stringify(value)) 
  }
 
  delete(key) {
      this.storage.removeItem(key)
  }
  clear() {
      this.storage.clear()
  }
} 

window.StorageService = new Storage()


function navigateToIndex(token) {

  StorageService.store(window.USER_TOKEN_KEY, token);
  location.replace('index.html'); 
}
function protectedRoute() {
const userToken = StorageService.read(window.USER_TOKEN_KEY);

  if (!userToken) {
      console.log('out')
      navigateToLogin () 
}
}










