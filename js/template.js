const template1 = $("#template1");
const template2 = $("#template2");
const template3 = $("#template3");
const template4 = $("#template4");
const preview = $("#preview");
const template1HTML = `
<div class="row justify-content-center pt-5 mt-5">
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
</div>
`;
const template2HTML = `
<div class="row justify-content-center pt-5 mt-5">
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
`;
const template3HTML = `
<div class="row justify-content-center pt-5 mt-5">
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
`;
const template4HTML = `
<div class="row justify-content-center pt-5 mt-5">
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
`;
const gettemplates = [
  { el: template1, html: template1HTML },
  { el: template2, html: template2HTML },
  { el: template3, html: template3HTML },
  { el: template4, html: template4HTML },
];
gettemplates.forEach((gettemplates) => {
  gettemplates.el.addEventListener("change", () => {
    if (gettemplates.el.checked) {
      preview.innerHTML = gettemplates.html;
    }
  });
});
