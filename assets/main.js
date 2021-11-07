var boPhanApi = 'http://localhost:3000/boPhan'

fetch(boPhanApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (boPhans) {

    })

var phieuNhapApi = 'http://localhost:3000/phieuNhap'

function getPhieuNhap(callback) {
    fetch(phieuNhapApi)
        .then(function (response) {
        return response.json();
        })
        .then(callback)
}

function renderPhieuNhap (phieuNhaps) {
    var listPhieuNhap = document.querySelector('.tb-phieuNhap')
    var htmls = phieuNhaps.map(function (phieuNhap) {
        return `<tr>
            <td>${phieuNhap.MaPN}</td>
            <td>${phieuNhap.MaLoaiHH}</td>
            <td>${phieuNhap.TenLoaiHH}</td>
            <td>${phieuNhap.MaHH}</td>
            <td>${phieuNhap.TenHH}</td>
            <td>${phieuNhap.SoLuongNhap}</td>
            <td>${phieuNhap.MaNV}</td>
            <td>${phieuNhap.MaKho}</td>
            <td>${phieuNhap.NgayNhap}</td>
            <td>${phieuNhap.GhiChu}</td>
            </tr>`;
    })
    listPhieuNhap.innerHTML = htmls.join('');
}

function main() {
    getPhieuNhap(renderPhieuNhap);
}

main();














































// function BoPhan(boPhan) {
//     var bp = boPhan.map(function(bP) {
//         return `
//         <h2>Mã bộ phận: ${bP.MaBP}</h2>;
//         <h2>Tên bộ phận: ${bP.TenBP}</h2>
//         `;
//     })
// }
// BoPhan(boPhan);


// function Nhanvien(nhanVien) {
//     var nv = boPhan.map(function(nV) {
//         return `
//         <h2> Mã nhân viên: ${nV.MaNV}</h2>
//         <h2> Họ tên nhân viên: ${nV.HoTenNV}</h2>
//         <h2> Giới tính: ${nV.GioiTinh}</h2>
//         <h2> Chức vụ: ${nV.ChucVu}</h2>
//         <h2> Bộ phận: ${nV.BoPhan}</h2>
//         <h2> Email: ${nV.EmailNV}</h2>
//         <h2> Số điện thoại: ${nV.SoDienThoaiNV}</h2>
//         `;
//     })
// }
// Nhanvien(nhanVien);


// function NhaCungCap(nhaCungCap) {
//     var ncc = boPhan.map(function(NCC) {
//         return ``;
//     })
// }
// NhaCungCap(nhaCungCap);


// function kho(Kho) {
//     var container = boPhan.map(function(Container) {
//         return ``;
//     })
// }
// kho(Kho)


// function LoaiHH(loaiHH) {
//     var Lhh = boPhan.map(function(LHH) {
//         return ``;
//     })
// }
// LoaiHH(loaiHH);


// function HangHoa(hangHoa) {
//     var hh = boPhan.map(function(hH) {
//         return ``;
//     })
// }
// HangHoa(hangHoa);


// function PhieuNhap(phieuNhap) {
//     var pn = boPhan.map(function(pN) {
//         return ``;
//     })
// }
// PhieuNhap(phieuNhap);


// function PhieuXuat(phieuXuat) {
//     var px = boPhan.map(function(pX) {
//         return ``;
//     })
// }
// PhieuXuat(phieuXuat);


// function PhieuYeuCau(phieuYeuCau) {
//     var pyc = boPhan.map(function(pYC) {
//         return ``;
//     })
// }
// PhieuYeuCau(phieuYeuCau);


// function PhieuKT(phieuKiemTra) {
//     var pkt = phieuKiemTra.map(function(pKT) {
//         return `
//         <h2> Mã phiếu kiểm tra: ${phieukt.MaPKT}</h2>
//         <h2> Mã loại hàng hóa: ${phieukt.MaLoaiHH}</h2>
//         <h2> Tên loại hàng hóa: ${phieukt.TenLoaiHH}</h2>
//         <h2> Mã hàng hóa: ${phieukt.MaHH}</h2>
//         <h2> Tên hàng hóa: ${phieukt.TenHH}</h2>
//         <h2> Mã nhà cung cấp: ${phieukt.MaNCC}</h2>
//         <h2> Tên nhà cung cấp: ${phieukt.TenNCC}</h2>
//         <h2> Mã nhân viên: ${phieukt.MaNV}</h2>
//         <h2> Họ tên nhân viên: ${phieukt.HoTenNV}</h2>
//         <h2> Số lượng yêu cầu: ${phieukt.SoLuongYC}</h2>
//         <h2> Số lượng kiểm tra: ${phieukt.SoLuongKT}</h2>
//         <h2> Tình trạng: ${phieukt.TinhTrang}</h2>
//         <h2> Ngày lập phiếu kiểm tra: ${phieukt.NgayLapPKT}</h2>
//         <h2> Ghi chú: ${phieukt.GhiChu}</h2>
//         `;
//     })
// }
// PhieuKT(phieuKiemTra);


// function HoaDon(hoaDon) {
//     var hd = boPhan.map(function(hD) {
//         return ``;
//     })
// }
// HoaDon(hoaDon);