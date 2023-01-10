const conn = require('../database/connect');

const product = {
    getAll: (cb) => {
        return conn.query("SELECT sp.*, dm.ten_danh_muc as CateName FROM san_pham sp JOIN danh_muc dm ON sp.ma_danh_muc = dm.id ORDER BY id DESC", cb);
    },
    create: (data, file_name, cb) => {
        return conn.query(`INSERT INTO san_pham (ten_sp, anh_sp, gia_sp,gia_km,ma_danh_muc ) VALUES ('${data.ten_sp}', '${file_name}', '${data.gia_sp}', '${data.gia_km}', '${data.ma_danh_muc}');`, cb);
    },

    filter: async (ten_danh_muc) => {
        let check = await conn.query(`SELECT * FROM san_pham WHERE ten_danh_muc = '${ten_danh_muc}'`);
        console.log(check);
    },
    getByID: (id, cb) => {
        return conn.query(`SELECT * FROM san_pham WHERE id = '${id}'`, cb);
    },

    update: (id, data, file_name, cb) => {
        return conn.query(`UPDATE san_pham SET ten_sp='${data.ten_sp}',anh_sp='${file_name}',gia_sp='${data.gia_sp}',gia_km='${data.gia_km}',ma_danh_muc='${data.ma_danh_muc}' WHERE id = '${id}'`, cb);
    },

    delete: (id, cb) => {
        return conn.query(`DELETE FROM san_pham WHERE id = '${id}'`, cb);
    }
}

module.exports = product;