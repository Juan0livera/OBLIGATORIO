import { mensajesJoi } from "../config/joi-message.js";

export const validateRequired = (schema, loQueQuieroValidar)   => {
    return (req, res, next) => {
        const objetoValidar = req[loQueQuieroValidar];

        const {error, value} = schema.validate(objetoValidar, {
                abortEarly : false,

                messages : mensajesJoi,
                
                errors: {
                    wrap: {
                        label: false
                    }
                }
            });

        if(error){
            return next(error);
        }

        req[loQueQuieroValidar] = value;
        next();
    }
}