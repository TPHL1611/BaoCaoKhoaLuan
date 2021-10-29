var boPhan = [
    {MaBP: '', TenBP: ''},
    {MaBP: '', TenBP: ''},
    {MaBP: '', TenBP: ''},
    {MaBP: '', TenBP: ''},
] 

var nhanVien = [
    {MaNV:'', HoTenNV: '', GioiTinh: '', ChucVu: '', BoPhan: '', EmailNV: '', SoDienThoaiNV: ''},
    {MaNV:'', HoTenNV: '', GioiTinh: '', ChucVu: '', BoPhan: '', EmailNV: '', SoDienThoaiNV: ''},
    {MaNV:'', HoTenNV: '', GioiTinh: '', ChucVu: '', BoPhan: '', EmailNV: '', SoDienThoaiNV: ''},
]

var nhaCungCap = [
    {MaNCC: '', TenNCC: '', DiaChiNCC: '', MaLoaiHH: '', SoDienThoaiNCC: '', EmailNCC: ''},
    {MaNCC: '', TenNCC: '', DiaChiNCC: '', MaLoaiHH: '', SoDienThoaiNCC: '', EmailNCC: ''},
    {MaNCC: '', TenNCC: '', DiaChiNCC: '', MaLoaiHH: '', SoDienThoaiNCC: '', EmailNCC: ''},
    {MaNCC: '', TenNCC: '', DiaChiNCC: '', MaLoaiHH: '', SoDienThoaiNCC: '', EmailNCC: ''},
]

var Kho = [
    {MaKho: '', TenKho: '', DiaChiKho: '', MaLoaiHH: ''},
    {MaKho: '', TenKho: '', DiaChiKho: '', MaLoaiHH: ''},
    {MaKho: '', TenKho: '', DiaChiKho: '', MaLoaiHH: ''},
    {MaKho: '', TenKho: '', DiaChiKho: '', MaLoaiHH: ''},
]

var loaiHH = [
    {MaLoaiHH: 01, TenLoaiHH: 'Hàng cấm'},
    {MaLoaiHH: 02, TenLoaiHH: 'Hoa lá'}
]

var hangHoa = [
    {MaHH: '', TenHH: '', SoLuong: '', DonViTinh: '', MaNV: '', MaLoaiHH: '', GhiChu: ''},
    {MaHH: '', TenHH: '', SoLuong: '', DonViTinh: '', MaNV: '', MaLoaiHH: '', GhiChu: ''},
    {MaHH: '', TenHH: '', SoLuong: '', DonViTinh: '', MaNV: '', MaLoaiHH: '', GhiChu: ''},
    {MaHH: '', TenHH: '', SoLuong: '', DonViTinh: '', MaNV: '', MaLoaiHH: '', GhiChu: ''},
    {MaHH: '', TenHH: '', SoLuong: '', DonViTinh: '', MaNV: '', MaLoaiHH: '', GhiChu: ''}
]

var phieuNhap = [
    {MaPN: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongNhap: '', MaNV: '', MaKho: '', NgayNhap: '', GhiChu: ''},
    {MaPN: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongNhap: '', MaNV: '', MaKho: '', NgayNhap: '', GhiChu: ''},
    {MaPN: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongNhap: '', MaNV: '', MaKho: '', NgayNhap: '', GhiChu: ''},
    {MaPN: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongNhap: '', MaNV: '', MaKho: '', NgayNhap: '', GhiChu: ''},
]
var phieuXuat = [
    {MaPX: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongXuat: '', MaNV: '', MaKho: '', NgayXuat: '', GhiChu: ''},
    {MaPX: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongXuat: '', MaNV: '', MaKho: '', NgayXuat: '', GhiChu: ''},
    {MaPX: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongXuat: '', MaNV: '', MaKho: '', NgayXuat: '', GhiChu: ''},
    {MaPX: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongXuat: '', MaNV: '', MaKho: '', NgayXuat: '', GhiChu: ''},
]

var phieuYeuCau = [
    {MaPYC: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongYC: '', MaNV: '', NgayLapPYC: '', GhiChu: ''},
    {MaPYC: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongYC: '', MaNV: '', NgayLapPYC: '', GhiChu: ''},
    {MaPYC: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongYC: '', MaNV: '', NgayLapPYC: '', GhiChu: ''},
    {MaPYC: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuongYC: '', MaNV: '', NgayLapPYC: '', GhiChu: ''},
]

var phieuKiemTra = [
    {MaPKT: '1', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', MaNCC: '', TenNCC: '', MaNV:'', HoTenNV: '', SoLuongYC: '', SoLuongKT: '', TinhTrang: '', NgayLapPKT: '', GhiChu: ''},
    {MaPKT: '2', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', MaNCC: '', TenNCC: '', MaNV:'', HoTenNV: '', SoLuongYC: '', SoLuongKT: '', TinhTrang: '', NgayLapPKT: '', GhiChu: ''},
    {MaPKT: '3', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', MaNCC: '', TenNCC: '', MaNV:'', HoTenNV: '', SoLuongYC: '', SoLuongKT: '', TinhTrang: '', NgayLapPKT: '', GhiChu: ''},
    {MaPKT: '4', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', MaNCC: '', TenNCC: '', MaNV:'', HoTenNV: '', SoLuongYC: '', SoLuongKT: '', TinhTrang: '', NgayLapPKT: '', GhiChu: ''},
]

var hoaDon = [
    {MaPKT: '1', MaNCC: '', TenNCC: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuong: '', GiaTien: '', NgayLapHD: '', GhiChu: ''},
    {MaPKT: '1', MaNCC: '', TenNCC: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuong: '', GiaTien: '', NgayLapHD: '', GhiChu: ''},
    {MaPKT: '1', MaNCC: '', TenNCC: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuong: '', GiaTien: '', NgayLapHD: '', GhiChu: ''},
    {MaPKT: '1', MaNCC: '', TenNCC: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuong: '', GiaTien: '', NgayLapHD: '', GhiChu: ''},
    {MaPKT: '1', MaNCC: '', TenNCC: '', MaLoaiHH: '', TenLoaiHH: '', MaHH: '', TenHH: '', SoLuong: '', GiaTien: '', NgayLapHD: '', GhiChu: ''},
]


function BoPhan(boPhan) {
    var bp = boPhan.map(function(bP) {
        return `
        <h2>Mã bộ phận: ${bP.MaBP}</h2>;
        <h2>Tên bộ phận: ${bP.TenBP}</h2>
        `;
    })
}
BoPhan(boPhan);


function Nhanvien(nhanVien) {
    var nv = boPhan.map(function(nV) {
        return `
        <h2> Mã nhân viên: ${nV.MaNV}</h2>
        <h2> Họ tên nhân viên: ${nV.HoTenNV}</h2>
        <h2> Giới tính: ${nV.GioiTinh}</h2>
        <h2> Chức vụ: ${nV.ChucVu}</h2>
        <h2> Bộ phận: ${nV.BoPhan}</h2>
        <h2> Email: ${nV.EmailNV}</h2>
        <h2> Số điện thoại: ${nV.SoDienThoaiNV}</h2>
        `;
    })
}
Nhanvien(nhanVien);


function NhaCungCap(nhaCungCap) {
    var ncc = boPhan.map(function(NCC) {
        return ``;
    })
}
NhaCungCap(nhaCungCap);


function kho(Kho) {
    var container = boPhan.map(function(Container) {
        return ``;
    })
}
kho(Kho)


function LoaiHH(loaiHH) {
    var Lhh = boPhan.map(function(LHH) {
        return ``;
    })
}
LoaiHH(loaiHH);


function HangHoa(hangHoa) {
    var hh = boPhan.map(function(hH) {
        return ``;
    })
}
HangHoa(hangHoa);


function PhieuNhap(phieuNhap) {
    var pn = boPhan.map(function(pN) {
        return ``;
    })
}
PhieuNhap(phieuNhap);


function PhieuXuat(phieuXuat) {
    var px = boPhan.map(function(pX) {
        return ``;
    })
}
PhieuXuat(phieuXuat);


function PhieuYeuCau(phieuYeuCau) {
    var pyc = boPhan.map(function(pYC) {
        return ``;
    })
}
PhieuYeuCau(phieuYeuCau);


function PhieuKT(phieuKiemTra) {
    var pkt = phieuKiemTra.map(function(pKT) {
        return `
        <h2> Mã phiếu kiểm tra: ${phieukt.MaPKT}</h2>
        <h2> Mã loại hàng hóa: ${phieukt.MaLoaiHH}</h2>
        <h2> Tên loại hàng hóa: ${phieukt.TenLoaiHH}</h2>
        <h2> Mã hàng hóa: ${phieukt.MaHH}</h2>
        <h2> Tên hàng hóa: ${phieukt.TenHH}</h2>
        <h2> Mã nhà cung cấp: ${phieukt.MaNCC}</h2>
        <h2> Tên nhà cung cấp: ${phieukt.TenNCC}</h2>
        <h2> Mã nhân viên: ${phieukt.MaNV}</h2>
        <h2> Họ tên nhân viên: ${phieukt.HoTenNV}</h2>
        <h2> Số lượng yêu cầu: ${phieukt.SoLuongYC}</h2>
        <h2> Số lượng kiểm tra: ${phieukt.SoLuongKT}</h2>
        <h2> Tình trạng: ${phieukt.TinhTrang}</h2>
        <h2> Ngày lập phiếu kiểm tra: ${phieukt.NgayLapPKT}</h2>
        <h2> Ghi chú: ${phieukt.GhiChu}</h2>
        `;
    })
}
PhieuKT(phieuKiemTra);


function HoaDon(hoaDon) {
    var hd = boPhan.map(function(hD) {
        return ``;
    })
}
HoaDon(hoaDon);