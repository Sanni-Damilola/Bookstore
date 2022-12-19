import multer from "multer";
import { Request } from "express";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallback
  ) => {
    cb(null, "Uploads");
  },

  filename(req: Request, file: Express.Multer.File, cb: FileNameCallback) {
    cb(null, file.originalname);
  },
});

const Upload = multer({ storage: storage }).single("coverImage");

export { Upload };
