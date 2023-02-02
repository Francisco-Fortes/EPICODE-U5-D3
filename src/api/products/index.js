import express from "express";
import ProductsModel from "./model.js";

const productsRouter = express.Router();

// POST /product => create a new product
productsRouter.post("/", async (re, res, next) => {
  try {
    const { id } = await ProductsModel.create(req.body);
    res.status(201).send({ id });
  } catch (error) {
    next(error);
  }
});

// // GET /product => returns the list of products
// productsRouter.get("/", async (re, res, next) => {
//     try {
//     //   const { id } = await ProductsModel.create(req.body);
//     //   res.status(201).send({ id });
//     } catch (error) {
//       next(error);
//     })

// // GET /product /123 => returns a single product
// productsRouter.get("/:productId", async (re, res, next) => {
//     try {
//     //   const { id } = await ProductsModel.create(req.body);
//     //   res.status(201).send({ id });
//     } catch (error) {
//       next(error);
//     })

// // PUT /product /123 => edit the product
// productsRouter.put("/:productId", async (re, res, next) => {
//     try {
//     //   const { id } = await ProductsModel.create(req.body);
//     //   res.status(201).send({ id });
//     } catch (error) {
//       next(error);
//     })

// // DELETE /product /123 => delete the product with the given id
// productsRouter.delete("/:productId", async (re, res, next) => {
//     try {
//     //   const { id } = await ProductsModel.create(req.body);
//     //   res.status(201).send({ id });
//     } catch (error) {
//       next(error);
//     })

// // It should be possible to filter products by name OR surname
// // it should be possible to filter products by price range
// // it should be possible to filter products by categories
// // NOTE: When the product is deleted, all reviews related to the product must be deleted

export default productsRouter;
