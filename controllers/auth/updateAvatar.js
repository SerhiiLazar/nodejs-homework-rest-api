// const gravatar = require("gravatar");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const {User} = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const {_id} = req.user;
    const {path: tempUpload, originalname} = req.file;
    const filename = `${_id}_${originalname}`;

    const fileSize = await Jimp.read(tempUpload);
    await fileSize.cover(250, 250).resize(250, Jimp.AUTO).quality(60).write(tempUpload);

    const resultUpload = path.join(avatarsDir, filename);
    await fs.rename(tempUpload,resultUpload);
    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, {avatarURL});

    res.json({
        avatarURL,
    })
}

module.exports = updateAvatar;