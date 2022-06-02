export default {
  port: 5000,
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jwsb1.mongodb.net/?retryWrites=true&w=majority`,
  env: "development",
};
