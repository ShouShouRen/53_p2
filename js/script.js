$(function () {
  function check() {
    let selectedCells = [];
    $("td[data-id]").click(function () {
      const index = $(this).data("id") - 1;
      if (selectedCells.length < 2 && !selectedCells.includes(index)) {
        selectedCells.push(index);
        $(this).addClass("selected");
      } else if (selectedCells.includes(index)) {
        selectedCells.splice(selectedCells.indexOf(index), 1);
        $(this).removeClass("selected");
      }
    });
    $("#checkit").click(function () {
      if (selectedCells.length === 2) {
        const row1 = Math.floor(selectedCells[0] / 2);
        const col1 = selectedCells[0] % 2;
        const row2 = Math.floor(selectedCells[1] / 2);
        const col2 = selectedCells[1] % 2;
        if (
          (row1 === row2 && Math.abs(col1 - col2) === 1) ||
          (col1 == col2 && Math.abs(row1 - row2) === 1)
        ) {
          alert("登入成功");
          window.location.href = "index.php";
        } else {
          alert("二次驗證錯誤");
          location.href = "logout.php";
        }
      }
    });
  }
  check();

  $("#edit-member").click(function () {
    let member_id = $(this).data("id");
    $.ajax({
      url: "get_member.php",
      type: "GET",
      data: {
        id: member_id,
      },
      dataType: "json",
      success: function (response) {
        $("#user").val(response[0].user);
        $("#user_name").val(response[0].user_name);
        $("#pw").val(response[0].pw);
        $("#id").val(response[0].id);
      },
    });
  });

  $("#save-member").click(function () {
    let user = $("#user").val();
    let user_name = $("#user_name").val();
    let pw = $("#pw").val();
    let id = $("#id").val();
    let data = {
      user: user,
      user_name: user_name,
      pw: pw,
      id: id,
    };
    $.ajax({
      url: "save_member.php",
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function (response) {
        window.location.reload();
      },
    });
  });

  // $("#search-member").submit(function (e) {
  //   e.preventDefault();
  //   let search = $("#search-input").val();
  //   let use = $('input[name="use"]:checked').val(); // 獲取用戶的選擇
  //   $.ajax({
  //     url: "search_member.php",
  //     type: "post",
  //     data: {
  //       search: search,
  //       use: use, // 將用戶的選擇發送給 PHP 程序
  //     },
  //     success: function (response) {
  //       console.log(response);
  //       $("#search_result").html(response);
  //       $(".show-all").addClass("d-none");
  //     },
  //   });
  // });
});
