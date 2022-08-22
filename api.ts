import express from 'express';

const app = express();

// import of middleware for use BODY PARAMS
app.use(express.json());

const port = 8888;

app.get('/courses', function (request, response) {
  // testing QUERY PARAMS
  const query = request.query;
  console.log(query);
  return response.json(["História", "Biologia", "Sociologia", "Filosofia"]);
});

app.post('/courses', function (request, response) {
  // testing BODY PARAMS
  const body = request.body;
  console.log(body);
  return response.json(["História", "Biologia", "Sociologia", "Filosofia", "lingua Inglesa"]);
});

app.put('/courses/:id', function (request, response) {
  // testing ROUTE PARAMS
  const params = request.params;
  console.log(params);
  return response.json(["Geografia", "Biologia", "Sociologia", "Filosofia", "lingua Inglesa"]);
});

app.patch('/courses/:id', function (request, response) {
  return response.json(["Geografia", "Biologia", "Sociologia", "Filosofia", "Informática"]);
});

app.delete('/courses/:id', function (request, response) {
  return response.json(["Geografia", "Biologia", "Sociologia", "lingua Inglesa"]);
});

app.listen(port, function () {
  console.log(`###Server running at http://127.0.0.1:${port}...`);
});