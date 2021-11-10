var boPhanApi = 'http://localhost:3000/boPhan'

fetch(boPhanApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (boPhans) {

    })

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
    createBtn.in = "Lưu"

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
    createBtn.in = "Lưu"

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
    createBtn.in = "Lưu"

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
    createBtn.in = "Lưu"

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

