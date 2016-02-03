module.exports = function(grunt) {
  return {
    mailer: {
      options: {
        key: '<%= secrets.mandrill.key %>', // See README for secrets.json or replace this with your own key
        sender: '<%= secrets.mandrill.sender %>', // See README for secrets.json or replace this with your preferred sender
        recipient: '<%= secrets.mandrill.recipient %>', // See README for secrets.json or replace this with your preferred recipient
        subject: 'This is a test email'
      },
      src: ['<%= paths.dist %>/'+grunt.option('template')]
    }
  }
};
