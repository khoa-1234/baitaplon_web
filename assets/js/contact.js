function ktraHoTen() {
  let hoTen = $("#txtHoTen").val();
  let btcq =
    /^[A-Z\u00c0-\u1fff][a-z\u00C0-\u1FFF]*(\s[A-Z\u00C0-\u1FFF][a-z\u00C0-\u1FFF]*)*$/;
  if (hoTen.length == 0) {
    $("#errHoTen").html("Không được rỗng");
    return false;
  } else if (btcq.test(hoTen)) {
    $("#errHoTen").html("*");
    return true;
  } else {
    $("#errHoTen").html(
      "Họ tên phải từ 2 từ trở lên, mỗi ký tự đầu phải viết hoa"
    );
    return false;
  }
}

$("#txtHoTen").blur(function () {
  ktraHoTen();
});

function ktraEmail() {
  let email = $("#email").val().trim();
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email === "") {
    $("#errEmail").html("Không được rỗng");
    return false;
  } else if (emailRegex.test(email)) {
    $("#errEmail").html("*");
    return true;
  } else {
    $("#errEmail").html("Lỗi");
    return false;
  }
}

$("#email").blur(function () {
  ktraEmail();
});

function ktraSDT() {
  let sDT = $("#txtSDT").val();
  let btcq = /^(03|07|08|09)[0-9]{8}$/;
  if (sDT == "") {
    $("#errSDT").html("Không được rỗng");
    return false;
  } else if (btcq.test(sDT)) {
    $("#errSDT").html("*");
    return true;
  } else {
    $("#errSDT").html("Lỗi");
    return false;
  }
}

$("#txtSDT").blur(function () {
  ktraSDT();
});

$(".send").click(function (e) {
  e.preventDefault();
  if (ktraHoTen() && ktraEmail() && ktraSDT()) {
    alert("Gửi thành công");
    // Thực hiện các thao tác khác sau khi gửi thành công
  } else {
    alert("Vui lòng kiểm tra lại thông tin đầu vào");
  }
});
