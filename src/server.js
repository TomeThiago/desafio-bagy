const app = require('./app');

app.listen({ port: 4000 }).then(() => {
  console.log(`Server is runing on http://localhost:4000`);
});