const { getDB } = require("./db");
module.exports = async ctx => {
	const uId = ctx.state.user.uId;
	const photoId = ctx.query.pId;

	const sql = uId ? `SELECT * FROM photos WHERE uId=? AND id=?` : `SELECT * FROM photos WHERE id=?`;
	const [rows] = await getDB().execute(sql, uId ? [uId, photoId] : [photoId]);

	ctx.body = {
		state: 1,
		data: rows[0],
	};
};
