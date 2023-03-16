<?php 
  require_once("pdo.php");
  session_start();
?>
<!DOCTYPE html>
<html lang="zh-Hant-TW">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/style.css">
  <title>咖啡商品展示系統</title>
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a href="index.php" class="navbar-brand">
        <img src="./images/logo.png" class="logo mx-3" alt="">
        <span>咖啡商品展示系統</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ml-auto my-2" style="max-height: 100px;">
          <li class="nav-item">
            <a href="index.php" class="btn btn-outline-warning">離開</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container py-3" style="margin-top: 86px;">
    <div class="row py-3">
      <h5 class="border-start text-light font-weight-bolder">上架管理</h5>
    </div>
    <div class="row justify-content-between align-items-center">
      <div class="col-12 bg-white p-3 shadow-lg rounded-lg" style="min-height: 780px;">
        <ul class="nav nav-tabs" id="tab">
          <li class="nav-item">
            <a href="#chose" id="chose-tab" class="nav-link active" data-toggle="tab">選擇版型</a>
          </li>
          <li class="nav-item">
            <a href="#input" id="input-tab" class="nav-link" data-toggle="tab">填寫資料</a>
          </li>
          <li class="nav-item">
            <a href="#preview" id="preview-tab" class="nav-link" data-toggle="tab">商品預覽</a>
          </li>
          <li class="nav-item">
            <a href="#submit" id="submit-tab" class="nav-link" data-toggle="tab">確認送出</a>
          </li>
        </ul>
        <form action="store_product.php" method="POST" enctype="multipart/form-data">
          <div class="tab-content" id="tabcontent">
            <div class="tab-pane fade show active" id="chose">
              <div class="container my-3">
                <div class="text-right">
                  <button type="button" class="btn btn-secondary">新增版型</button>
                </div>
                <div class="row pt-2">
                  <div class="d-flex col-6 h-380">
                    <div class="col-6 h-100 bg-back p-3 text-center text-light">
                      <div class="bg-1 w-100 h-75 d-flex justify-content-center align-items-center">
                        <p>圖片</p>
                      </div>
                      <div class="bg-2 w-100 h-20 mt-1 py-3">相關連結</div>
                    </div>
                    <div class="col-6 h-100 bg-back p-3 text-center text-light">
                      <div class="bg-1 w-100 h-20 mt-1 py-3">商品名稱</div>
                      <div class="bg-2 w-100 h-30 mt-1 py-4">商品簡介</div>
                      <div class="bg-3 w-100 h-20 mt-1 py-3">發布日期</div>
                      <div class="bg-1 w-100 h-20 mt-1 py-3">費用</div>
                    </div>
                  </div>
                  <div class="d-flex col-6 h-380">
                    <div class="col-6 h-100 bg-back p-3 text-center text-light">
                      <div class="bg-1 w-100 h-20 mb-1 py-3">商品名稱</div>
                      <div class="bg-1 w-100 h-75 d-flex justify-content-center align-items-center">
                        <p>圖片</p>
                      </div>
                    </div>
                    <div class="col-6 h-100 bg-back p-3 text-center text-light">
                      <div class="bg-1 w-100 h-20 mt-1 py-3">費用</div>
                      <div class="bg-2 w-100 h-30 mt-1 py-4">商品簡介</div>
                      <div class="bg-3 w-100 h-20 mt-1 py-3">發布日期</div>
                      <div class="bg-2 w-100 h-20 mt-1 py-3">相關連結</div>
                    </div>
                  </div>
                </div>
                <div class="row mb-2 text-center">
                  <div class="col-6">
                    商品版型1:
                    <input type="radio" name="template" id="template1" value="1">
                  </div>
                  <div class="col-6">
                    商品版型2:
                    <input type="radio" name="template" id="template2" value="2">
                  </div>
                </div>
                <div class="row pt-2">
                  <div class="d-flex col-6 h-380">
                    <div class="col-6 h-100 bg-back p-3 text-center text-light">
                      <div class="bg-1 w-100 h-20 mb-1 py-3">商品名稱</div>
                      <div class="bg-1 w-100 h-75 d-flex justify-content-center align-items-center">
                        <p>圖片</p>
                      </div>
                    </div>
                    <div class="col-6 h-100 bg-back p-3 text-center text-light">
                      <div class="bg-1 w-100 h-20 mt-1 py-3">費用</div>
                      <div class="bg-2 w-100 h-30 mt-1 py-4">商品簡介</div>
                      <div class="bg-3 w-100 h-20 mt-1 py-3">發布日期</div>
                      <div class="bg-2 w-100 h-20 mt-1 py-3">相關連結</div>
                    </div>
                  </div>
                  <div class="d-flex col-6 h-380">
                    <div class="col-6 h-100 bg-back p-3 text-center text-light">
                      <div class="bg-1 w-100 h-75 d-flex justify-content-center align-items-center">
                        <p>圖片</p>
                      </div>
                      <div class="bg-2 w-100 h-20 mt-1 py-3">相關連結</div>
                    </div>
                    <div class="col-6 h-100 bg-back p-3 text-center text-light">
                      <div class="bg-1 w-100 h-20 mb-1 py-3">商品名稱</div>
                      <div class="bg-2 w-100 h-30 mt-1 py-4">商品簡介</div>
                      <div class="bg-3 w-100 h-20 mt-1 py-3">發布日期</div>
                      <div class="bg-1 w-100 h-20 mt-1 py-3">費用</div>
                    </div>
                  </div>
                </div>
                <div class="row mb-2 text-center">
                  <div class="col-6">
                    商品版型3:
                    <input type="radio" name="template" id="template3" value="3">
                  </div>
                  <div class="col-6">
                    商品版型4:
                    <input type="radio" name="template" id="template4" value="4">
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade show" id="input">
              <div class="d-flex justify-content-center">
                <div class="col-8">
                  <h4 class="text-center my-5">填寫資料</h4>
                  <div class="d-flex justify-content-between align-items-center">
                    <label for="">商品標題:</label>
                    <input type="text" class="form-control w-75 my-3" name="product_name">
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <label for="">商品描述:</label>
                    <input type="text" class="form-control w-75 my-3" name="product_des">
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <label for="">發布日期:</label>
                    <input type="datetime-local" class="form-control w-75 my-3" name="time" value="<?=$now;?>">
                  </div>
                  <div class="d-flex align-items-center justify-content-between my-3">
                    <label for="">費用:</label>
                    <input type="text" class="form-control w-75" name="price">
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <label for="">相關連結:</label>
                    <input type="text" class="form-control w-75" name="links">
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade show" id="preview">

            </div>
            <div class="tab-pane fade show" id="submit">
              <div class="d-center">
                <button type="submit" class="btn btn-outline-success">確認送出</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</body>
<script src="./js/jquery.min.js"></script>
<script src="./js/bootstrap.min.js"></script>
<script src="./js/template.js"></script>

</html>