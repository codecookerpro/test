module.exports = {
  apps : [{
    name: "app",
    script: "npm",
    args: 'run start',
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }],

  deploy : {
    production : {
      user : 'forge',
      host : '143.244.156.31',
      ref  : 'origin/master',
      repo : 'git@github.com:codecookerpro/test.git',
      path : '/home/forge/default',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
