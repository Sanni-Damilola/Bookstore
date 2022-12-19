import { Router } from "express";
import {
  deletedata,
  getAll,
  getOne,
  postData,
  search,
  views,
} from "../Controller/functions";
import { Upload } from "../Config/multer";
const route = Router();

route.route("/getall").get(getAll);
route.route("/post").post(Upload, postData);
route.route("/getone/:id").get(getOne);
route.route("/search").get(search);
route.route("/views:id").patch(views);
route.route("/deleteall").patch(deletedata);

export default route;
