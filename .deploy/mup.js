module.exports = {
  servers: {
    one: {
      host: '54.166.244.229',
      username: 'ec2-user',
      pem: '/home/debian/Downloads/labsuser.pem'
    }
  },

  app: {
    name: 'simpletasks',
    path: '/home/debian/simpletasks',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: 'https://ec2-54-166-244-229.compute-1.amazonaws.com',
      MONGO_URL: 'mongodb+srv://pplatzer:Umgestrickt@meteor.4iono10.mongodb.net/?retryWrites=true&w=majority&appName=Meteor',  
    },

        docker: {
      image: 'zodern/meteor:root'
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

};
