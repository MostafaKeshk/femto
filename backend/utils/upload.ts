import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder =
      file.fieldname === "image" ? "uploads/images" : "uploads/files";
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    const fileName = `file-${uniqueSuffix}${fileExtension}`;
    cb(null, fileName);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  const allowedImageTypes = ["image/jpeg", "image/png"];

  if (file.fieldname === "image" && allowedImageTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type."), false);
  }
};

export const upload = multer({ storage, fileFilter });
