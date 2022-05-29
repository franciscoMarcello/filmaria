const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
  port: 5000,
  dbURI: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.jwsb1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  env: "development",
};
