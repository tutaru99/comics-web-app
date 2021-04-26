# dev-env-project Vue-FrontEnd
to run cypress -  npm run cypress-test
```
To make it work locally get comics-api repository. Some tweaking is needed.
Change herokuAPI data variable to your personal local/live uri.
Live ver. - https://comics-web-app.herokuapp.com
```
```
    --Create .env file yourself. It should contain:

privateKey = 
publicKey = 

    --Both Private and Public keys must be accquired at - https://developer.marvel.com/documentation/getting_started

HEROKU_API_KEY = 
HEROKU_APP_NAME = 

API_PORT = 4000
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
