const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth, getCurrentUserId } = require("../../utils/auth");
const { User, Memory, Tag, MemoryTag } = require("../../db/models");
// const { Memory } = require("../../db/models/")
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

router.get("/",
    asyncHandler(async function (req, res) {
        const memories = await Memory.findAll();
        return res.json(memories);
    }))

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const memory = await Memory.one(req.params.id);
    return res.json(memory);
  })
);

module.exports = router;