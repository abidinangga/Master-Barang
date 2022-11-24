function errorHandler(err, req, res, next) {
  switch (err.name) {
    case "notFound":
      res.status(404).json({
        message: err.message,
      });
      break;
      case "stokHabis":
        res.status(404).json({
          message:err.message
        })
        break;
      case 'SequelizeDatabaseError':
        res.status(404).json({
        })
        break;
    default:
      res.status(500).json({
        message: "Internal Server Error",
      });
      break;
  }
}
module.exports = { errorHandler };
