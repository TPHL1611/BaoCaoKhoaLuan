/**
 * |-----------------------------------------------------------------------|
 * |                            NHÀ CUNG CẤP                               |
 * |-----------------------------------------------------------------------|
 */

 var nhaCungCapApi = 'http://localhost:3000/nhaCungCap'

 function getNhaCungCap(callback) {
     fetch(nhaCungCapApi)
         .then(response => response.json())
         .then(callback);
 }
 
 function createNhaCungCap(data, callback) {
     var options = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
             // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: JSON.stringify(data)
     }
     fetch(nhaCungCapApi, options)
         .then(response => response.json())
         .then(callback)
 }
 
 function updateNhanVien(id, data, callback) {
     var options = {
         method: 'PATCH',
         headers: {
             'Content-Type': 'application/json'
             // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: JSON.stringify(data)
     }
     fetch(nhaCungCapApi + '/' + id, options)
         .then(response => response.json())
         .then(callback)
 }
 
 function renderNhaCungCap(NhaCungCaps) {
     var listNhaCungCaps = document.querySelector('.tableNCC tbody');
 
     var htmls = NhaCungCaps.map((NhaCungCap) => 
     `   <tr class="table-data tb-NhaCungCap Item-${NhaCungCap.id}">
             <td>${NhaCungCap.id}</td>
             <td class="tenNCC-${NhaCungCap.id}">${NhaCungCap.TenNCC}</td>
             <td class="idMaLoaiHH-${NhaCungCap.id}">${NhaCungCap.MaLoaiHH}</td>
             <td class="diaChiNCC-${NhaCungCap.id}">${NhaCungCap.DiaChiNCC}</td>
             <td class="soDienThoaiNCC-${NhaCungCap.id}">${NhaCungCap.SoDienThoaiNCC}</td>
             <td class="emailNCC-${NhaCungCap.id}">${NhaCungCap.EmailNCC}</td>
             <button class="btn-size-s" onclick="handleDeleteNhaCungCap(${NhaCungCap.id})">Xóa</button>
             <button class="btn-size-s" onclick="handleUpdateNhaCungCap(${NhaCungCap.id})">Sửa</button>
         </tr>`
     )
 
     listNhaCungCaps.innerHTML = htmls.join('');
 }
 
 function handleCreateNhaCungCap() {
     var createBtn = document.querySelector('.btn-create')
 
     createBtn.onclick = () => {
        var tenNCC = document.querySelector('input[name="tenNCC"]').value;
        var emailNCC = document.querySelector('input[name="email"]').value;
        var idMaLoaiHH = document.querySelector('input[name="idMaLoaiHH"]').value;
        var diaChiNCC = document.querySelector('input[name="diaChi"]').value;
        var soDienThoaiNCC = document.querySelector('input[name="lienLac"]').value;
 
        var formData = {
           TenNCC: tenNCC,
           EmailNCC: emailNCC,
           MaLoaiHH: idMaLoaiHH,
           DiaChiNCC: diaChiNCC,
           SoDienThoaiNCC: soDienThoaiNCC
        }
 
        createNhaCungCap(formData, () => getNhaCungCap(renderNhaCungCap));
     }
 }
 
 function handleDeleteNhaCungCap(id) {
     var options = {
         method: 'DELETE',
         headers: {
             'Content-Type': 'application/json'
             // 'Content-Type': 'application/x-www-form-urlencoded',
         }
     }
     fetch(NhaCungCapApi + '/' + id, options)
         .then(response => response.json())
         .then(function() {
             var NhaCungCapItem = document.querySelector('.Item-' + id);
             if (NhaCungCapItem) {
                 NhaCungCapItem.remove();
             }
         })
 }
 
 function handleUpdateNhaCungCap(id) {
    var tenNCCOld = document.querySelector('.tenNCC-' + id);
    var idMaLoaiHHOld = document.querySelector('.idMaLoaiHH-' + id);
    var diaChiNCCOld = document.querySelector('.diaChiNCC-' + id);
    var soDienThoaiNCCOld = document.querySelector('.soDienThoaiNCC-' + id);
    var emailNCCOld = document.querySelector('.emailNCC-' + id);
 
    var tenNCC = document.querySelector('input[name="tenNCC"]');
    var idMaLoaiHH = document.querySelector('input[name="idMaLoaiHH"]');
    var diaChiNCC = document.querySelector('input[name="diaChi"]');
    var soDienThoaiNCC = document.querySelector('input[name="lienLac"]');
    var emailNCC = document.querySelector('input[name="email"]');
 
    tenNCC.value = tenNCCOld.innerText;
    idMaLoaiHH.value = idMaLoaiHHOld.innerText;
    diaChiNCCOld.value = diaChiNCC.innerText;
    soDienThoaiNCC.value = soDienThoaiNCCOld.innerText;
    emailNCC.value = emailNCCOld.innerText;
     
    var createBtn = document.querySelector('.btn-create')
    createBtn.innerText = "Lưu"

    createBtn.onclick = function() {
        var formData = {
            TenNCC: tenNCC.value,
            MaLoaiHH: idMaLoaiHH.value,
            DiaChiNCC: diaChiNCCOld.value,
            SoDienThoaiNCC: soDienThoaiNCC.value,
            EmailNCC: emailNCC.value
        }
 
        updateNhaCungCap(id, formData, () => getNhaCungCap(renderNhaCungCap))
    }
}

/**
 * |-----------------------------------------------------------------------|
 * |                               NHÂN VIÊN                               |
 * |-----------------------------------------------------------------------|
 */

var nhanVienApi = 'http://localhost:3000/nhanVien'

function getNhanVien(callback) {
    fetch(nhanVienApi)
        .then(response => response.json())
        .then(callback);
}

function createNhanVien(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(nhanVienApi, options)
        .then(response => response.json())
        .then(callback)
}

function updateNhanVien(id, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(nhanVienApi + '/' + id, options)
        .then(response => response.json())
        .then(callback)
}

function renderNhanVien(nhanViens) {
    var listNhanViens = document.querySelector('.tableNV tbody');

    var htmls = nhanViens.map((nhanVien) => 
    `   <tr class="table-data tb-NhanVien Item-${nhanVien.id}">
            <td>${nhanVien.id}</td>
            <td class="hoTen-${nhanVien.id}">${nhanVien.HoTenNV}</td>
            <td class="gioiTinh-${nhanVien.id}">${nhanVien.GioiTinh}</td>
            <td class="chucVu-${nhanVien.id}">${nhanVien.ChucVu}</td>
            <td class="boPhan-${nhanVien.id}">${nhanVien.BoPhan}</td>
            <td class="email-${nhanVien.id}">${nhanVien.EmailNV}</td>
            <td class="soDienThoai-${nhanVien.id}">${nhanVien.SoDienThoaiNV}</td>
            <button class="btn-size-s" onclick="handleDeleteNhanVien(${nhanVien.id})">Xóa</button>
            <button class="btn-size-s" onclick="handleUpdateNhanVien(${nhanVien.id})">Sửa</button>
        </tr>`
    )

    listNhanViens.innerHTML = htmls.join('');
}

function handleCreateNhanVien() {
    var createBtn = document.querySelector('.btn-create')

    createBtn.onclick = () => {
        var tenNV = document.querySelector('input[name="tenNV"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var gioiTinh = document.querySelector('input[name="gender"]').value;
        var chucVu = document.querySelector('input[name="chucVu"]').value;
        var phongBan = document.querySelector('input[name="phongBan"]').value;
        var lienLac = document.querySelector('input[name="lienLac"]').value;

        var formData = {
            HoTenNV: tenNV,
            GioiTinh: gioiTinh,
            ChucVu: chucVu,
            BoPhan: phongBan,
            EmailNV: email,
            SoDienThoaiNV: lienLac
        }

        createNhanVien(formData, () => getNhanVien(renderNhanVien));
    }
}

function handleDeleteNhanVien(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    fetch(nhanVienApi + '/' + id, options)
        .then(response => response.json())
        .then(function() {
            var nhanVienItem = document.querySelector('.Item-' + id);
            if (nhanVienItem) {
                nhanVienItem.remove();
            }
        })
}

function handleUpdateNhanVien(id) {
    var hoTenOld = document.querySelector('.hoTen-' + id);
    var gioiTinhOld = document.querySelector('.gioiTinh-' + id);
    var chucVuOld = document.querySelector('.chucVu-' + id);
    var boPhanOld = document.querySelector('.boPhan-' + id);
    var emailOld = document.querySelector('.email-' + id);
    var soDienThoaiOld = document.querySelector('.soDienThoai-' + id);

    var tenNV = document.querySelector('input[name="tenNV"]');
    var email = document.querySelector('input[name="email"]');
    var gioiTinh = document.querySelector('input[name="gender"]');
    var chucVu = document.querySelector('input[name="chucVu"]');
    var phongBan = document.querySelector('input[name="phongBan"]');
    var lienLac = document.querySelector('input[name="lienLac"]');

    tenNV.value = hoTenOld.innerText;
    email.value = emailOld.innerText;
    gioiTinh.value = gioiTinhOld.innerText;
    chucVu.value = chucVuOld.innerText;
    phongBan.value = boPhanOld.innerText;
    lienLac.value = soDienThoaiOld.innerText;
    
    var createBtn = document.querySelector('.btn-create')
    createBtn.innerText = "Lưu"

    createBtn.onclick = function() {
        var formData = {
            HoTenNV: tenNV.value,
            GioiTinh: gioiTinh.value,
            ChucVu: chucVu.value,
            BoPhan: phongBan.value,
            EmailNV: email.value,
            SoDienThoaiNV: lienLac.value
        }

        updateNhanVien(id, formData, () => getNhanVien(renderNhanVien))
    }
}


/**
 * |-----------------------------------------------------------------------|
 * |                               BỘ PHẬN                                 |
 * |-----------------------------------------------------------------------|
 */

var boPhanApi = 'http://localhost:3000/boPhan'

function getBoPhan(callback) {
    fetch(boPhanApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function createBoPhan(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(boPhanApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function updateBoPhan(id, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }

    fetch(boPhanApi + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderBoPhan(BoPhans) {
    var listBoPhans = document.querySelector('.tableBP tbody')

    var htmls = BoPhans.map(function(BoPhan) {
        return `
        <tr class="table-data tb-BoPhan Item-${BoPhan.id}">
            <td>${BoPhan.id}</td>
            <td class="maBP-${BoPhan.id}">${BoPhan.MaBP}</td>
            <td class="tenBP-${BoPhan.id}">${BoPhan.TenBP}</td>
            <td class="ghiChu-${BoPhan.id}">${BoPhan.GhiChu}</td>
            <button class="btn-size-s" onclick="handleDeleteBoPhan(${BoPhan.id})">Xóa</button>
            <button class="btn-size-s" onclick="handleUpdateBoPhan(${BoPhan.id})">Sửa</button>
        </tr>`;
    })

    listBoPhans.innerHTML = htmls.join('');
}

function handleCreateBoPhan() {
    var createBtn = document.querySelector('.btn-create')

    createBtn.onclick = function() {
        var ghiChu = document.querySelector('input[name="ghiChu"]').value;
        var maBP = document.querySelector('input[name="maBP"]').value;
        var tenBP = document.querySelector('input[name="tenBP"]').value;

        var formData = {
            GhiChu : ghiChu,
            MaBP: maBP,
            TenBP: tenBP
        }

        createBoPhan(formData, function() {
            getBoPhan(renderBoPhan);
        })
    }
}

function handleDeleteBoPhan(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    
    fetch(boPhanApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var boPhanItem = document.querySelector('.Item-' + id);
            if (boPhanItem) {
                boPhanItem.remove();
            }
        })
} 

function handleUpdateBoPhan(id) {
    var ghiChuOld = document.querySelector('.ghiChu-' + id);
    var maBPOld = document.querySelector('.maBP-' + id);
    var tenBPOld = document.querySelector('.tenBP-' + id);

    var ghiChu = document.querySelector('input[name="ghiChu"]');
    var maBP = document.querySelector('input[name="maBP"]');
    var tenBP = document.querySelector('input[name="tenBP"]');

    ghiChu.value = ghiChuOld.innerText;
    maBP.value = maBPOld.innerText;
    tenBP.value = tenBPOld.innerText;

    var createBtn = document.querySelector('.btn-create')
    createBtn.innerText = "Lưu"

    createBtn.onclick = function() {
        var formData = {
            GhiChu : ghiChu.value,
            MaBP: maBP.value,
            TenBP: tenBP.value
        }
    
        updateBoPhan(id, formData, function() {
            getBoPhan(renderBoPhan)
        })
    }
}


/**
 * |-----------------------------------------------------------------------|
 * |                            LOẠI HÀNG HÓA                              |
 * |-----------------------------------------------------------------------|
 */

 var loaiHHApi = 'http://localhost:3000/loaiHH'

function getLoaiHH(callback) {
    fetch(loaiHHApi)
        .then(response => response.json())
        .then(callback);
}
 
function createLoaiHH(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(loaiHHApi, options)
        .then(response => response.json())
        .then(callback)
}
 
function updateLoaiHH(id, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(loaiHHApi + '/' + id, options)
        .then(response => response.json())
        .then(callback)
}
 
function renderLoaiHH(LoaiHHs) {
    var listLoaiHHs = document.querySelector('.tableNhomVTHH tbody');

    var htmls = LoaiHHs.map((LoaiHH) => 
       `<tr class="table-data tb-LoaiHH Item-${LoaiHH.id}">
           <td>${LoaiHH.id}</td>
           <td class="tenLoaiHH-${LoaiHH.id}">${LoaiHH.TenLoaiHH}</td>
           <button class="btn-size-s" onclick="handleDeleteLoaiHH(${LoaiHH.id})">Xóa</button>
           <button class="btn-size-s" onclick="handleUpdateLoaiHH(${LoaiHH.id})">Sửa</button>
       </tr>`
    )

    listLoaiHHs.innerHTML = htmls.join('');
}
 
function handleCreateLoaiHH() {
    var createBtn = document.querySelector('.btn-create')
 
    createBtn.onclick = () => {
       var tenLoaiHH = document.querySelector('input[name="tenLoaiHH"]').value;
 
       var formData = {
           TenLoaiHH: tenLoaiHH
       }
 
       createLoaiHH(formData, () => getLoaiHH(renderLoaiHH));
    }
}
 
function handleDeleteLoaiHH(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    fetch(loaiHHApi + '/' + id, options)
        .then(response => response.json())
        .then(function() {
            var LoaiHHItem = document.querySelector('.Item-' + id);
            if (LoaiHHItem) {
                LoaiHHItem.remove();
            }
        })
}
 
function handleUpdateLoaiHH(id) {
   var tenLoaiHHOld = document.querySelector('.tenLoaiHH-' + id);

   var tenLoaiHH = document.querySelector('input[name="tenLoaiHH"]');

   tenLoaiHH.value = tenLoaiHHOld.innerText;
    
   var createBtn = document.querySelector('.btn-create')
   createBtn.innerText = "Lưu"
   createBtn.onclick = function() {
       var formData = {
          TenLoaiHH: tenLoaiHH.value
      }
      updateLoaiHH(id, formData, () => getLoaiHH(renderLoaiHH))
    }
}


/**
 * |-----------------------------------------------------------------------|
 * |                               PHIẾU NHẬP                              |
 * |-----------------------------------------------------------------------|
 */
var phieuNhapApi = 'http://localhost:3000/phieuNhap'

function getPhieuNhap(callback) {
    fetch(phieuNhapApi)
        .then(function (response) {
        return response.json();
        })
        .then(callback)
}

function createPhieuNhap(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    
    fetch(phieuNhapApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function updatePhieuNhap(id, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }

    fetch(phieuNhapApi + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderPhieuNhap(phieuNhaps) {
    var listPhieuNhap = document.querySelector('.tablePN tbody');

    var htmls = phieuNhaps.map(function(phieuNhap) {
        return `
        <tr class="table-data tb-phieuNhap Item-${phieuNhap.id}">
            <td>${phieuNhap.id}</td>
            <td class="maLoaiHH-${phieuNhap.id}">${phieuNhap.idMaLoaiHH}</td>
            <td class="tenLoaiHH-${phieuNhap.id}">${phieuNhap.TenLoaiHH}</td>
            <td class="maHH-${phieuNhap.id}">${phieuNhap.idMaHH}</td>
            <td class="tenHH-${phieuNhap.id}">${phieuNhap.TenHH}</td>
            <td class="soLuongNhap-${phieuNhap.id}">${phieuNhap.SoLuongNhap}</td>
            <td class="maNV-${phieuNhap.id}">${phieuNhap.idMaNV}</td>
            <td class="maKho-${phieuNhap.id}">${phieuNhap.idMaKho}</td>
            <td class="ngayNhap-${phieuNhap.id}">${phieuNhap.NgayNhap}</td>
            <td class="ghiChu-${phieuNhap.id}">${phieuNhap.GhiChu}</td>
            <button class="btn-size-s" onclick="handleDeletePhieuNhap(${phieuNhap.id})">Xóa</button>
            <button class="btn-size-s" onclick="handleUpdatePhieuNhap(${phieuNhap.id})">Sửa</button>
        </tr>`;
    })

    listPhieuNhap.innerHTML = htmls.join('');
}

function handleCreatePhieuNhap() {
    var createBtn = document.querySelector('.btn-create')

    createBtn.onclick = function() {
        var ghiChu = document.querySelector('input[name="ghiChu"]').value;
        var maLoaiHH = document.querySelector('input[name="maLoaiHH"]').value;
        var tenLoaiHH = document.querySelector('input[name="tenLoaiHH"]').value;
        var maHH = document.querySelector('input[name="maHH"]').value;
        var tenHH = document.querySelector('input[name="tenHH"]').value;
        var maNV = document.querySelector('input[name="maNV"]').value;
        var maKho = document.querySelector('input[name="maKho"]').value;
        var soLuongNhap = document.querySelector('input[name="soLuongNhap"]').value;
        var ngayNhap = document.querySelector('input[name="ngayNhap"]').value;

        var formData = {
            GhiChu : ghiChu,
            idMaLoaiHH : maLoaiHH,
            TenLoaiHH : tenLoaiHH,
            idMaHH : maHH,
            TenHH : tenHH,
            idMaNV : maNV,
            idMaKhoho : maKho,
            SoLuongNhap : soLuongNhap,
            NgayNhap: ngayNhap
        }

        createPhieuNhap(formData, function() {
            getPhieuNhap(renderPhieuNhap);
        });
    }
}

function handleDeletePhieuNhap(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    
    fetch(phieuNhapApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var phieuNhapItem = document.querySelector('.Item-' + id);
            if (phieuNhapItem) {
                phieuNhapItem.remove();
            }
        })
}

function handleUpdatePhieuNhap(id) {
    //Lấy thông tin của phiếu nhập chọn
    var ghiChuOld = document.querySelector('.ghiChu-' + id);
    var maLoaiHHOld = document.querySelector('.maLoaiHH-' + id);
    var tenLoaiHHOld = document.querySelector('.tenLoaiHH-' + id);
    var maHHOld = document.querySelector('.maHH-' + id);
    var tenHHOld = document.querySelector('.tenHH-' + id);
    var maNVOld = document.querySelector('.maNV-' + id);
    var maKhoOld = document.querySelector('.maKho-' + id);
    var soLuongNhapOld = document.querySelector('.soLuongNhap-' + id);
    var ngayNhapOld = document.querySelector('.ngayNhap-' + id);

    //Lấy các ô input
    var ghiChu = document.querySelector('input[name="ghiChu"]');
    var maLoaiHH = document.querySelector('input[name="maLoaiHH"]');
    var tenLoaiHH = document.querySelector('input[name="tenLoaiHH"]');
    var maHH = document.querySelector('input[name="maHH"]');
    var tenHH = document.querySelector('input[name="tenHH"]');
    var maNV = document.querySelector('input[name="maNV"]');
    var maKho = document.querySelector('input[name="maKho"]');
    var soLuongNhap = document.querySelector('input[name="soLuongNhap"]');
    var ngayNhap = document.querySelector('input[name="ngayNhap"]');

    //Gán thông tin vào các ô input
    ghiChu.value = ghiChuOld.innerText;
    maLoaiHH.value = maLoaiHHOld.innerText;
    tenLoaiHH.value = tenLoaiHHOld.innerText;
    maHH.value = maHHOld.innerText;
    tenHH.value = tenHHOld.innerText;
    maNV.value = maNVOld.innerText;
    maKho.value = maKhoOld.innerText;
    soLuongNhap.value = soLuongNhapOld.innerText;
    ngayNhap.value = ngayNhapOld.innerText;
    
    //Thay đổi tên nút
    var createBtn =document.querySelector('.btn-create')
    createBtn.innerText = "Lưu"

    createBtn.onclick = function() {
        var formData = {
            GhiChu: ghiChu.value,
            idMaLoaiHH : maLoaiHH.value,
            TenLoaiHH : tenLoaiHH.value,
            idMaHH:maHH.value,
            TenHH:tenHH.value,
            idMaNV:maNV.value,
            idMaKho:maKho.value,
            SoLuongNhap:soLuongNhap.value,
            NgayNhap:ngayNhap.value
        }

        updatePhieuNhap(id, formData, function() {
            getPhieuNhap(renderPhieuNhap);
        })
    }
}

/**
 * |-----------------------------------------------------------------------|
 * |                             PHIẾU XUẤT                                |
 * |-----------------------------------------------------------------------|
 */
var phieuXuatApi = 'http://localhost:3000/phieuXuat'

function getPhieuXuat(callback) {
    fetch(phieuXuatApi)
        .then(function (response) {
        return response.json();
        })
        .then(callback)
}

function createPhieuXuat(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    
    fetch(phieuXuatApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function updatePhieuXuat(id, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }

    fetch(phieuXuatApi + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderPhieuXuat(phieuXuats) {
    var listPhieuXuat = document.querySelector('.tablePX tbody');

    var htmls = phieuXuats.map(function(phieuXuat) {
        return `
        <tr class="table-data tb-phieuXuat Item-${phieuXuat.id}">
            <td>${phieuXuat.id}</td>
            <td class="maLoaiHH-${phieuXuat.id}">${phieuXuat.idMaLoaiHH}</td>
            <td class="tenLoaiHH-${phieuXuat.id}">${phieuXuat.TenLoaiHH}</td>
            <td class="maHH-${phieuXuat.id}">${phieuXuat.idMaHH}</td>
            <td class="tenHH-${phieuXuat.id}">${phieuXuat.TenHH}</td>
            <td class="soLuongXuat-${phieuXuat.id}">${phieuXuat.SoLuongXuat}</td>
            <td class="maNV-${phieuXuat.id}">${phieuXuat.idMaNV}</td>
            <td class="maKho-${phieuXuat.id}">${phieuXuat.idMaKho}</td>
            <td class="ngayXuat-${phieuXuat.id}">${phieuXuat.NgayXuat}</td>
            <td class="ghiChu-${phieuXuat.id}">${phieuXuat.GhiChu}</td>
            <button class="btn-size-s" onclick="handleDeletephieuXuat(${phieuXuat.id})">Xóa</button>
            <button class="btn-size-s" onclick="handleUpdatephieuXuat(${phieuXuat.id})">Sửa</button>
        </tr>`;
    })
    listPhieuXuat.innerHTML = htmls.join('');
}

function handleCreatePhieuXuat() {
    var createBtn = document.querySelector('.btn-create')

    createBtn.onclick = function() {
        var ghiChu = document.querySelector('input[name="ghiChu"]').value;
        var maLoaiHH = document.querySelector('input[name="maLoaiHH"]').value;
        var tenLoaiHH = document.querySelector('input[name="tenLoaiHH"]').value;
        var maHH = document.querySelector('input[name="maHH"]').value;
        var tenHH = document.querySelector('input[name="tenHH"]').value;
        var maNV = document.querySelector('input[name="maNV"]').value;
        var maKho = document.querySelector('input[name="maKho"]').value;
        var soLuongXuat = document.querySelector('input[name="soLuongXuat"]').value;
        var ngayXuat = document.querySelector('input[name="ngayXuat"]').value;

        var formData = {
            GhiChu : ghiChu,
            idMaLoaiHH : maLoaiHH,
            TenLoaiHH : tenLoaiHH,
            idMaHH : maHH,
            TenHH : tenHH,
            idMaNV : maNV,
            idMaKho : maKho,
            SoLuongXuat : soLuongXuat,
            NgayXuat: ngayXuat
        }

        createPhieuXuat(formData, function() {
            getPhieuXuat(renderPhieuXuat);
        });
    }
}

function handleDeletephieuXuat(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    
    fetch(phieuXuatApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var phieuXuatItem = document.querySelector('.Item-' + id);
            if (phieuXuatItem) {
                phieuXuatItem.remove();
            }
        })
}

function handleUpdatephieuXuat(id) {
    //Lấy thông tin của phiếu nhập chọn
    var ghiChuOld = document.querySelector('.ghiChu-' + id);
    var maLoaiHHOld = document.querySelector('.maLoaiHH-' + id);
    var tenLoaiHHOld = document.querySelector('.tenLoaiHH-' + id);
    var maHHOld = document.querySelector('.maHH-' + id);
    var tenHHOld = document.querySelector('.tenHH-' + id);
    var maNVOld = document.querySelector('.maNV-' + id);
    var maKhoOld = document.querySelector('.maKho-' + id);
    var soLuongXuatOld = document.querySelector('.soLuongXuat-' + id);
    var ngayXuatOld = document.querySelector('.ngayXuat-' + id);

    //Lấy các ô input
    var ghiChu = document.querySelector('input[name="ghiChu"]');
    var maLoaiHH = document.querySelector('input[name="maLoaiHH"]');
    var tenLoaiHH = document.querySelector('input[name="tenLoaiHH"]');
    var maHH = document.querySelector('input[name="maHH"]');
    var tenHH = document.querySelector('input[name="tenHH"]');
    var maNV = document.querySelector('input[name="maNV"]');
    var maKho = document.querySelector('input[name="maKho"]');
    var soLuongXuat = document.querySelector('input[name="soLuongXuat"]');
    var ngayXuat = document.querySelector('input[name="ngayXuat"]');

    //Gán thông tin vào các ô input
    ghiChu.value = ghiChuOld.innerText;
    maLoaiHH.value = maLoaiHHOld.innerText;
    tenLoaiHH.value = tenLoaiHHOld.innerText;
    maHH.value = maHHOld.innerText;
    tenHH.value = tenHHOld.innerText;
    maNV.value = maNVOld.innerText;
    maKho.value = maKhoOld.innerText;
    soLuongXuat.value = soLuongXuatOld.innerText;
    ngayXuat.value = ngayXuatOld.innerText;
    
    //Thay đổi tên nút
    var createBtn =document.querySelector('.btn-create')
    createBtn.innerText = "Lưu"

    createBtn.onclick = function() {
        var formData = {
            GhiChu: ghiChu.value,
            idMaLoaiHH : maLoaiHH.value,
            TenLoaiHH : tenLoaiHH.value,
            idMaHH : maHH.value,
            TenHH : tenHH.value,
            idMaNV : maNV.value,
            idMaKho : maKho.value,
            SoLuongXuat : soLuongXuat.value,
            NgayXuat : ngayXuat.value
        }

        updatePhieuXuat(id, formData, function() {
            getPhieuXuat(renderPhieuXuat);
        })
    }
}

/**
 * |-----------------------------------------------------------------------|
 * |                            PHIẾU YÊU CẦU                              |
 * |-----------------------------------------------------------------------|
 */

var phieuYeuCauApi = 'http://localhost:3000/phieuYeuCau'

function getPhieuYeuCau(callback) {
    fetch(phieuYeuCauApi)
        .then(function (response) {
        return response.json();
        })
        .then(callback)
}

function createPhieuYeuCau(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    
    fetch(phieuYeuCauApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function updatePhieuYeuCau(id, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }

    fetch(phieuYeuCauApi + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderPhieuYeuCau(phieuYeuCaus) {
    var listPhieuYeuCau = document.querySelector('.tablePYC tbody');

    var htmls = phieuYeuCaus.map(function(phieuYeuCau) {
        return `
        <tr class="table-data tb-phieuYeuCau Item-${phieuYeuCau.id}">
            <td>${phieuYeuCau.id}</td>
            <td class="maLoaiHH-${phieuYeuCau.id}">${phieuYeuCau.idMaLoaiHH}</td>
            <td class="tenLoaiHH-${phieuYeuCau.id}">${phieuYeuCau.TenLoaiHH}</td>
            <td class="maHH-${phieuYeuCau.id}">${phieuYeuCau.idMaHH}</td>
            <td class="tenHH-${phieuYeuCau.id}">${phieuYeuCau.TenHH}</td>
            <td class="maNV-${phieuYeuCau.id}">${phieuYeuCau.idMaNV}</td>
            <td class="tenNV-${phieuYeuCau.id}">${phieuYeuCau.HoTenNV}</td>
            <td class="soLuongYeuCau-${phieuYeuCau.id}">${phieuYeuCau.soLuongYC}</td>
            <td class="ngayYeuCau-${phieuYeuCau.id}">${phieuYeuCau.NgayLapPYC}</td>
            <td class="ghiChu-${phieuYeuCau.id}">${phieuYeuCau.GhiChu}</td>
            <button class="btn-size-s" onclick="handleDeletephieuYeuCau(${phieuYeuCau.id})">Xóa</button>
            <button class="btn-size-s" onclick="handleUpdatephieuYeuCau(${phieuYeuCau.id})">Sửa</button>
        </tr>`;
    })
    listPhieuYeuCau.innerHTML = htmls.join('');
}

function handleCreatePhieuYeuCau() {
    var createBtn = document.querySelector('.btn-create')

    createBtn.onclick = function() {
        var ghiChu = document.querySelector('input[name="ghiChu"]').value;
        var maLoaiHH = document.querySelector('input[name="maLoaiHH"]').value;
        var tenLoaiHH = document.querySelector('input[name="tenLoaiHH"]').value;
        var maHH = document.querySelector('input[name="maHH"]').value;
        var tenHH = document.querySelector('input[name="tenHH"]').value;
        var maNV = document.querySelector('input[name="maNV"]').value;
        var tenNV = document.querySelector('input[name="tenNV"]').value;
        var soLuongYeuCau = document.querySelector('input[name="soLuongYeuCau"]').value;
        var ngayLapPhieu = document.querySelector('input[name="ngayLapPhieu"]').value;

        var formData = {
            GhiChu : ghiChu,
            idMaLoaiHH : maLoaiHH,
            TenLoaiHH : tenLoaiHH,
            idMaHH : maHH,
            TenHH : tenHH,
            idMaNV : maNV,
            HoTenNV : tenNV,
            SoLuongYC : soLuongYeuCau,
            NgayLapPYC: ngayLapPhieu
        }

        createPhieuYeuCau(formData, function() {
            getPhieuYeuCau(renderPhieuYeuCau);
        });
    }
}

function handleDeletephieuYeuCau(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    
    fetch(phieuYeuCauApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var phieuYeuCauItem = document.querySelector('.Item-' + id);
            if (phieuYeuCauItem) {
                phieuYeuCauItem.remove();
            }
        })
}

function handleUpdatephieuYeuCau(id) {
    //Lấy thông tin của phiếu kiểm tra được chọn
    var ghiChuOld = document.querySelector('.ghiChu-' + id);
    var maLoaiHHOld = document.querySelector('.maLoaiHH-' + id);
    var tenLoaiHHOld = document.querySelector('.tenLoaiHH-' + id);
    var maHHOld = document.querySelector('.maHH-' + id);
    var tenHHOld = document.querySelector('.tenHH-' + id);
    var maNVOld = document.querySelector('.maNV-' + id);
    var tenNVOld = document.querySelector('.tenNV-' + id);
    var soLuongYeuCauOld = document.querySelector('.soLuongYeuCau-' + id);
    var ngayLapPhieuOld = document.querySelector('.ngayLapPhieu-' + id);

    //Lấy các ô input
    var ghiChu = document.querySelector('input[name="ghiChu"]');
    var maLoaiHH = document.querySelector('input[name="maLoaiHH"]');
    var tenLoaiHH = document.querySelector('input[name="tenLoaiHH"]');
    var maHH = document.querySelector('input[name="maHH"]');
    var tenHH = document.querySelector('input[name="tenHH"]');
    var maNV = document.querySelector('input[name="maNV"]');
    var tenNV = document.querySelector('input[name="tenNV"]');
    var soLuongYeuCau = document.querySelector('input[name="soLuongYeuCau"]');
    var ngayLapPhieu = document.querySelector('input[name="ngayLapPhieu"]');

    //Gán thông tin vào các ô input
    ghiChu.value = ghiChuOld.innerText;
    maLoaiHH.value = maLoaiHHOld.innerText;
    tenLoaiHH.value = tenLoaiHHOld.innerText;
    maHH.value = maHHOld.innerText;
    tenHH.value = tenHHOld.innerText;
    maNV.value = maNVOld.innerText;
    tenNV.value = tenNVOld.innerText;
    soLuongYeuCau.value = soLuongYeuCauOld.innerText;
    ngayLapPhieu.value = ngayLapPhieuOld.innerText;
    
    //Thay đổi tên nút
    var createBtn =document.querySelector('.btn-create')
    createBtn.innerText = "Lưu"

    createBtn.onclick = function() {
        var formData = {
            GhiChu: ghiChu.value,
            idMaLoaiHH : maLoaiHH.value,
            TenLoaiHH : tenLoaiHH.value,
            idMaHH : maHH.value,
            TenHH : tenHH.value,
            idMaNV : maNV.value,
            HoTenNV : tenNV.value,
            SoLuongYC : soLuongYeuCau.value,
            NgayLapPYC : ngayLapPhieu.value
        }

        updatePhieuYeuCau(id, formData, function() {
            getPhieuYeuCau(renderPhieuYeuCau);
        })
    }
}

/**
 * |-----------------------------------------------------------------------|
 * |                           PHIẾU KIỂM TRA                              |
 * |-----------------------------------------------------------------------|
 */

var phieuKiemTraApi = 'http://localhost:3000/phieuKiemTra'

function getPhieuKiemTra(callback) {
    fetch(phieuKiemTraApi)
        .then(function (response) {
        return response.json();
        })
        .then(callback)
}

function createPhieuKiemTra(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    
    fetch(phieuKiemTraApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function updatePhieuKiemTra(id, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }

    fetch(phieuKiemTraApi + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderPhieuKiemTra(phieuKiemTras) {
    var listPhieuKiemTra = document.querySelector('.tablePKT tbody');

    var htmls = phieuKiemTras.map(function(phieuKiemTra) {
        return `
        <tr class="table-data tb-phieuKiemTra Item-${phieuKiemTra.id}">
            <td>${phieuKiemTra.id}</td>
            <td class="maLoaiHH-${phieuKiemTra.id}">${phieuKiemTra.idMaLoaiHH}</td>
            <td class="tenLoaiHH-${phieuKiemTra.id}">${phieuKiemTra.TenLoaiHH}</td>
            <td class="maHH-${phieuKiemTra.id}">${phieuKiemTra.idMaHH}</td>
            <td class="tenHH-${phieuKiemTra.id}">${phieuKiemTra.TenHH}</td>
            <td class="maNCC-${phieuKiemTra.id}">${phieuKiemTra.idMaNCC}</td>
            <td class="tenNCC-${phieuKiemTra.id}">${phieuKiemTra.TenNCC}</td>
            <td class="maNV-${phieuKiemTra.id}">${phieuKiemTra.idMaNV}</td>
            <td class="tenNV-${phieuKiemTra.id}">${phieuKiemTra.HoTenNV}</td>
            <td class="soLuongKiemTra-${phieuKiemTra.id}">${phieuKiemTra.soLuongKT}</td>
            <td class="soLuongYeuCau-${phieuKiemTra.id}">${phieuKiemTra.soLuongYC}</td>
            <td class="ngayKiemTra-${phieuKiemTra.id}">${phieuKiemTra.NgayLapPKT}</td>
            <td class="ghiChu-${phieuKiemTra.id}">${phieuKiemTra.GhiChu}</td>
            <td class="tinhTrang-${phieuKiemTra.id}">${phieuKiemTra.TinhTrang}</td>
            <button class="btn-size-s" onclick="handleDeletephieuKiemTra(${phieuKiemTra.id})">Xóa</button>
            <button class="btn-size-s" onclick="handleUpdatephieuKiemTra(${phieuKiemTra.id})">Sửa</button>
        </tr>`;
    })
    listPhieuKiemTra.innerHTML = htmls.join('');
}

function handleCreatePhieuKiemTra() {
    var createBtn = document.querySelector('.btn-create')

    createBtn.onclick = function() {
        var tinhTrang = document.querySelector('input[name="tinhTrang"]').value;
        var ghiChu = document.querySelector('input[name="ghiChu"]').value;
        var maLoaiHH = document.querySelector('input[name="maLoaiHH"]').value;
        var tenLoaiHH = document.querySelector('input[name="tenLoaiHH"]').value;
        var maHH = document.querySelector('input[name="maHH"]').value;
        var tenHH = document.querySelector('input[name="tenHH"]').value;
        var maNV = document.querySelector('input[name="maNV"]').value;
        var tenNV = document.querySelector('input[name="tenNV"]').value;
        var maNCC = document.querySelector('input[name="maNCC"]').value;
        var tenNCC = document.querySelector('input[name="tenNCC"]').value;
        var soLuongKiemTra = document.querySelector('input[name="soLuongKiemTra"]').value;
        var soLuongYeuCau = document.querySelector('input[name="soLuongYeuCau"]').value;
        var ngayLapPhieu = document.querySelector('input[name="ngayLapPhieu"]').value;

        var formData = {
            TinhTrang : tinhTrang,
            GhiChu : ghiChu,
            idMaLoaiHH : maLoaiHH,
            TenLoaiHH : tenLoaiHH,
            idMaHH : maHH,
            TenHH : tenHH,
            idMaNV : maNV,
            TenNV : tenNV,
            idMaNCC : maNCC,
            TenNCC : tenNCC,
            SoLuongKT : soLuongKiemTra,
            SoLuongYC : soLuongYeuCau,
            NgayLapPKT: ngayLapPhieu
        }

        createPhieuKiemTra(formData, function() {
            getPhieuKiemTra(renderPhieuKiemTra);
        });
    }
}

function handleDeletephieuKiemTra(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    
    fetch(phieuKiemTraApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var phieuKiemTraItem = document.querySelector('.Item-' + id);
            if (phieuKiemTraItem) {
                phieuKiemTraItem.remove();
            }
        })
}

function handleUpdatephieuKiemTra(id) {
    //Lấy thông tin của phiếu kiểm tra được chọn
    var tinhTrangOld = document.querySelector('.tinhTrang-' + id);
    var ghiChuOld = document.querySelector('.ghiChu-' + id);
    var maLoaiHHOld = document.querySelector('.maLoaiHH-' + id);
    var tenLoaiHHOld = document.querySelector('.tenLoaiHH-' + id);
    var maHHOld = document.querySelector('.maHH-' + id);
    var tenHHOld = document.querySelector('.tenHH-' + id);
    var maNVOld = document.querySelector('.maNV-' + id);
    var tenNVOld = document.querySelector('.tenNV-' + id);
    var maNCCOld = document.querySelector('.maNCC-' + id);
    var tenNCCOld = document.querySelector('.tenNCC-' + id);
    var soLuongKiemTraOld = document.querySelector('.soLuongKiemTra-' + id);
    var soLuongYeuCauOld = document.querySelector('.soLuongYeuCau-' + id);
    var ngayLapPhieuOld = document.querySelector('.ngayLapPhieu-' + id);

    //Lấy các ô input
    var tinhTrang = document.querySelector('input[name="tinhTrang"]');
    var ghiChu = document.querySelector('input[name="ghiChu"]');
    var maLoaiHH = document.querySelector('input[name="maLoaiHH"]');
    var tenLoaiHH = document.querySelector('input[name="tenLoaiHH"]');
    var maHH = document.querySelector('input[name="maHH"]');
    var tenHH = document.querySelector('input[name="tenHH"]');
    var maNV = document.querySelector('input[name="maNV"]');
    var tenNV = document.querySelector('input[name="tenNV"]');
    var maNCC = document.querySelector('input[name="maNCC"]');
    var tenNCC = document.querySelector('input[name="tenNCC"]');
    var soLuongKiemTra = document.querySelector('input[name="soLuongKiemTra"]');
    var soLuongYeuCau = document.querySelector('input[name="soLuongYeuCau"]');
    var ngayLapPhieu = document.querySelector('input[name="ngayLapPhieu"]');

    //Gán thông tin vào các ô input
    tinhTrang.value = tinhTrangOld.innerText;
    ghiChu.value = ghiChuOld.innerText;
    maLoaiHH.value = maLoaiHHOld.innerText;
    tenLoaiHH.value = tenLoaiHHOld.innerText;
    maHH.value = maHHOld.innerText;
    tenHH.value = tenHHOld.innerText;
    maNV.value = maNVOld.innerText;
    tenNV.value = tenNVOld.innerText;
    maNCC.value = maNCCOld.innerText;
    tenNCC.value = tenNCCOld.innerText;
    soLuongKiemTra.value = soLuongKiemTraOld.innerText;
    soLuongYeuCau.value = soLuongYeuCauOld.innerText;
    ngayLapPhieu.value = ngayLapPhieuOld.innerText;
    
    //Thay đổi tên nút
    var createBtn =document.querySelector('.btn-create')
    createBtn.innerText = "Lưu"

    createBtn.onclick = function() {
        var formData = {
            TinhTrang: tinhTrang.value,
            GhiChu: ghiChu.value,
            idMaLoaiHH : maLoaiHH.value,
            TenLoaiHH : tenLoaiHH.value,
            idMaHH : maHH.value,
            TenHH : tenHH.value,
            idMaNV : maNV.value,
            HoTenNV : tenNV.value,
            idMaNCC : maNCC.value,
            TenNCC : tenNCC.value,
            SoLuongKT : soLuongKiemTra.value,
            SoLuongYC : soLuongYeuCau.value,
            NgayLapPKT : ngayLapPhieu.value
        }

        updatePhieuKiemTra(id, formData, function() {
            getPhieuKiemTra(renderPhieuKiemTra);
        })
    }
}

function main() {
    getNhaCungCap(renderNhaCungCap);
    handleCreateNhaCungCap();
    
    getNhanVien(renderNhanVien);
    handleCreateNhanVien();
    
    getBoPhan(renderBoPhan);
    handleCreateBoPhan();

    getLoaiHH(renderLoaiHH);
    handleCreateLoaiHH();

    getPhieuNhap(renderPhieuNhap);
    handleCreatePhieuNhap();
    
    getPhieuXuat(renderPhieuXuat);
    handleCreatePhieuXuat();

    getPhieuKiemTra(renderPhieuKiemTra);
    handleCreatePhieuKiemTra();

    getPhieuYeuCau(renderPhieuYeuCau);
    handleCreatePhieuYeuCau();


}

main();