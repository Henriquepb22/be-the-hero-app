const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/ongs", OngController.index);

routes.post(
    "/ongs",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string()
                .email()
                .required(),
            whatsapp: Joi.string()
                .min(10)
                .max(11)
                .required(),
            city: Joi.string().required(),
            uf: Joi.string()
                .length(2)
                .required()
        })
    }),
    OngController.create
);

routes.get(
    "/incidents",
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number()
        })
    }),
    IncidentController.index
);
routes.post(
    "/incidents",
    celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown()
    }),
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required()
        })
    }),
    IncidentController.create
);
routes.delete(
    "/incidents/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required()
        })
    }),
    IncidentController.delete
);

routes.get(
    "/profile",
    celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown()
    }),
    ProfileController.index
);

routes.post(
    "/sessions",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required()
        })
    }),
    SessionController.create
);

module.exports = routes;
