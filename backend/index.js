const express = require("express");
const app = express();
const session = require("express-session");
const swaggerDocument = require("./swagger.json");
const swaggerUi = require("swagger-ui-express");

const PORT = 3000;
const Routes = require("./routes/route");
const TODOLists = require("./model/lists");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* cookie session */
app.use(
  session({
    secret: "TODO lists Store in memory",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 20000000 },
  })
);

/* to set session lists initilize */
app.use((req, res, next) => {
  const todolistclass = TODOLists.instance;
  if (!req.session.lists) {
    req.session.lists = [];
    // next();
  }
  todolistclass.setData(req.session.lists);
  next();
});

/* Import route module file */
app.use(Routes);

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

/* Express Error handling middleware */
app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  const statusCode = error.statusCode || 500;
  const data = error.data;
  res.status(statusCode).json({
    message: error.message,
    status: statusCode,
    data: data,
  });
});

app.listen(PORT, () => {
  console.log("Backend Server Running on PORT:", PORT);
});
