const conn = require('../database/connect');

const category = {
    getAll: (cb) => {
        return conn.query("SELECT * FROM danh_muc ORDER BY id DESC", cb);
    },
    create: (data, cb) => {

        return conn.query(`INSERT INTO danh_muc (ten_danh_muc) VALUES ('${data.ten_danh_muc}') `, cb);
    },

    filter: async (ten_danh_muc) => {
        let check = await conn.query(`SELECT * FROM danh_muc WHERE ten_danh_muc = '${ten_danh_muc}'`);
        console.log(check);
    },
    getByID: (id, cb) => {
        return conn.query(`SELECT * FROM danh_muc WHERE id = '${id}'`, cb);
    },

    update: (id, data, cb) => {
        return conn.query(`UPDATE danh_muc SET ten_danh_muc ='${data.ten_danh_muc }' WHERE id = '${id}'`, cb);
    },

    delete: (id, cb) => {
        return conn.query(`DELETE FROM danh_muc WHERE id = '${id}'`, cb);
    }
}

module.exports = category;