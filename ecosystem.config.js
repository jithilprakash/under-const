system.config.js

module.exports = {
  apps : [
      {
        name: "simpleterms",
        script: {
    "start": "PORT=80 && react-scripts start",
    "build": "sPORT=80 && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
        watch: true,
        env: {
            "PORT": 80,//you can choose
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 3000,//you can choose
            "NODE_ENV": "production",
        }
      }
  ]
}