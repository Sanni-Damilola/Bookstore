import cloudinary from "../Config/cloudinary";
import { Response, Request } from "express";
import schema from "../Model/schema";

const postData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const isbn1: number = Math.floor(Math.random() * 10000);
    const isbn2: number = Math.floor(Math.random() * 10000);
    const isbn3: number = Math.floor(Math.random() * 10000);
    const isbn4: number = Math.floor(Math.random() * 10000);
    const { summary, author, category, title, views } = req.body;
    const secureImage = await cloudinary.uploader.upload(req?.file!.path);
    const createdata = await schema.create({
      author,
      summary,
      category,
      ISBN: `${isbn1}-${isbn3}-${isbn2}-${isbn4}`,
      title,
      views,
      authoreImage: author.charAt(0).toUpperCase(),
      coverImage: secureImage.secure_url,
    });

    return res.status(200).json({
      message: "Successully posted data",
      data: createdata,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "An error coccured",
      error: error,
    });
  }
};

const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const alldata = await schema.find();
    return res.status(201).json({
      message: "Successfully gotten all data",
      data: alldata,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error coccured",
      error: error,
    });
  }
};

const getOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const onlyOne = await schema.findById(req.params.id);
    return res.status(201).json({
      message: "Successfully gotten id " + req.params.id,
      data: onlyOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error coccured",
      error: error,
    });
  }
};

const views = async (req: Request, res: Response): Promise<Response> => {
  try {
    const setviews = await schema.findByIdAndUpdate(
      req.params.id,
      {
        $push: { views: req.body.ip },
      },
      {
        new: true,
      }
    );

    return res.status(201).json({
      data: setviews,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error coccured",
      error: error,
    });
  }
};

const search = async (req: Request, res: Response): Promise<Response> => {
  try {
    const makesearch = req.query;
    const searchbook = await schema.find(makesearch);
    return res.status(201).json({
      message: "Data found",
      data: searchbook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error coccured",
      error: error,
    });
  }
};

const deletedata = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deletealall = await schema.deleteMany();
    return res.status(201).json({
      message: "Successfully deleted",
    });
  } catch (error) {
    return res.status(400).json({
      message: "An occured",
      data: error,
    });
  }
};

export { postData, search, getAll, deletedata, getOne, views };
