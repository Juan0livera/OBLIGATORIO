import cloudinary from "../config/cloudinary.js";

export const uploadImageController = async (req, res, next) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "Debe seleccionar una imagen"
            });
        }

        const resultado = await new Promise(
            (resolve, reject) => {

                const stream =
                    cloudinary.uploader.upload_stream(
                        {
                            folder: "foods"
                        },
                        (error, result) => {

                            if (error) {
                                reject(error);
                            } else {
                                resolve(result);
                            }

                        }
                    );

                stream.end(req.file.buffer);
            }
        );

        res.status(200).json({
            imageUrl: resultado.secure_url
        });

    } catch (error) {
        next(error);
    }
};


export default uploadImageController;