import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = async (req, res, next) => {
  console.log(req.headers);
  try {
    const token = req.headers.authorization.split(" ")[1];

    const isCustomToken = token.length < 500;

    let decodedData;

    if (token && isCustomToken) {
      decodedData = jwt.verify(token, process.env.SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;