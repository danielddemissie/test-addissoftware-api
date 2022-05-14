# Test App for Addissoftware

#### Express CRUD App

## Acknowledgements

- [Express](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)

## Run Locally

Clone the project

```bash
  git clone https://github.com/danielddemissie/test-addissoftware-api.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn run start
```

## API Reference

#### Get all users

```bash
  GET /api/user/all
```

#### Edit user

```bash
  PUT /api/user/edit/${_id}
```

#### Delete user

```bash
  DELETE /api/user/delete/${_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Add user

```bash
  POST /api/user/add/
```
