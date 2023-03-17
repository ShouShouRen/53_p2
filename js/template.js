const $templates = [
  $("#template1"),
  $("#template2"),
  $("#template3"),
  $("#template4"),
];
const $preview = $("#preview");
const templatesHTML = [
  `
  <div class="row justify-content-center pt-5 mt-5">
    <div class="d-flex col-6 h-380">
      <div class="col-6 h-100 bg-back p-3 text-center text-light">
        <div class="bg-1 w-100 h-75 d-flex justify-content-center align-items-center"></div>
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
  `,
  `
  <div class="row justify-content-center pt-5 mt-5">
    <div class="d-flex col-6 h-380">
      <div class="col-6 h-100 bg-back p-3 text-center text-light">
        <div class="bg-1 w-100 h-20 mb-1 py-3">商品名稱</div>
        <div class="bg-1 w-100 h-75 d-flex justify-content-center align-items-center"></div>
      </div>
      <div class="col-6 h-100 bg-back p-3 text-center text-light">
        <div class="bg-1 w-100 h-20 mt-1 py-3">費用</div>
        <div class="bg-2 w-100 h-30 mt-1 py-4">商品簡介</div>
        <div class="bg-3 w-100 h-20 mt-1 py-3">發布日期</div>
        <div class="bg-2 w-100 h-20 mt-1 py-3">相關連結</div>
      </div>
    </div>
  </div>
  `,
  `
  <div class="row justify-content-center pt-5 mt-5">
    <div class="d-flex col-6 h-380">
    <div class="col-6 h-100 bg-back p-3 text-center text-light">
      <div class="bg-1 w-100 h-20 mb-1 py-3">商品名稱</div>
      <div class="bg-1 w-100 h-75 d-flex justify-content-center align-items-center"></div>
    </div>
    <div class="col-6 h-100 bg-back p-3 text-center text-light">
      <div class="bg-1 w-100 h-20 mt-1 py-3">費用</div>
      <div class="bg-2 w-100 h-30 mt-1 py-4">商品簡介</div>
      <div class="bg-3 w-100 h-20 mt-1 py-3">發布日期</div>
      <div class="bg-2 w-100 h-20 mt-1 py-3">相關連結</div>
    </div>
    </div>
  </div>
  `,
  `
  <div class="row justify-content-center pt-5 mt-5">
    <div class="d-flex col-6 h-380">
    <div class="col-6 h-100 bg-back p-3 text-center text-light">
      <div class="bg-1 w-100 h-75 d-flex justify-content-center align-items-center"></div>
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
  `,
];
$templates.forEach((template, index) => {
  template.on("change", () => {
    if (template.checked) {
      $preview.html(templatesHTML[index]);
    }
  });
});
const form = $("form");
const $inputs = {
  product_name: $('input[name="product_name"]'),
  product_des: $('textarea[name="product_des"]'),
  time: $('input[name="time"]'),
  images: $('input[name="images"]'),
  price: $('input[name="price"]'),
  links: $('input[name="links"]'),
};
const $previewtab = $("#preview-tab");
$previewtab.on("click", (e) => {
  e.preventDefault();
  const file = $inputs.images[0].files[0];
  const reader = new FileReader();
  reader.onload = () => {
    $templates.forEach((template) => {
      if (template.is(":checked")) {
        const previewHTML = templatesHTML[template.index()]
          .replace("商品名稱", "商品名稱：" + $inputs.product_name.val())
          .replace("商品簡介", "商品簡介:" + $inputs.product_des.val())
          .replace("發布日期", "發布日期:" + $inputs.time.val())
          .replace("費用", "費用" + $inputs.price.val())
          .replace(
            '<div class="bg-1 w-100 h-75 d-flex justify-content-center align-items-center"></div>',
            `<img src="${
              reader.result
            }" alt="${$inputs.product_name.val()}" class="w-100 h-75">`
          )
          .replace(
            "相關連結",
            "相關連結" +
              `<a class="pl-2" href="${$inputs.links.val()}">${$inputs.links.val()}</a>`
          );
        $preview.html(previewHTML);
      }
    });
  };
  reader.readAsDataURL(file);
});
