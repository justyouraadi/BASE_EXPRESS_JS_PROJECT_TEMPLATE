This is a base express js project template, which anyo e can use as it has bee prepared, by keeping some of the most important code principle and project manaement recommendations. Feels free to change anything.


`src` -> Inside the srch folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the `src folder`

- `config` -> In this folder anything and everything regarding any configration or setup of a library or module will be done. For example : Setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration of this library should also be donehere.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> they are jsut going to intercept the incmoing where we can write our vaildators, authenticators etc.

- `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the busincess logic. In controllers we just receive the imcoming requests and data and pass it to the business layer, and once business layer returns an output, we structure the API respoinse in controllers and send the output.

- `repositories` -> this folder contains all the logic using which we interact the DB bg writing queries, all the raw or ORM queries will go here.

- `services` -> contains the business logic and interacts with repositories for data from the databse

- `utils` -> contains helper methods, error classes etc.