const $template1 = $("#template1");
const $template2 = $("#template2");
const $template3 = $("#template3");
const $template4 = $("#template4");
const $preview = $("#preview");
const template1HTML = `
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
`;
const template2HTML = `
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
`;
const template3HTML = `
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
`;
const template4HTML = `
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
`;
const gettemplates = [
  { el: template1, html: template1HTML },
  { el: template2, html: template2HTML },
  { el: template3, html: template3HTML },
  { el: template4, html: template4HTML },
];

gettemplates.forEach((gettemplate) => {
  $(gettemplate.el).on("change", () => {
    if (gettemplate.el.checked) {
      $("#preview").html(gettemplate.html);
    }
  });
});

const form = $("form");
const product_name = $('input[name="product_name"]');
const product_des = $('textarea[name="product_des"]');
const time = $('input[name="time"]');
const images = $('input[name="images"]');
const price = $('input[name="price"]');
const links = $('input[name="links"]');
const previewtab = $("#preview-tab");
const templates = [
  { element: template1, html: template1HTML },
  { element: template2, html: template2HTML },
  { element: template3, html: template3HTML },
  { element: template4, html: template4HTML },
];

previewtab.on("click", (e) => {
  e.preventDefault();
  const file = images[0].files[0];
  const reader = new FileReader();
  reader.onload = () => {
    templates.forEach((template) => {
      if (template.element.checked) {
        const previewHTML = template.html
          .replace("商品名稱", "商品名稱：" + product_name.val())
          .replace("商品簡介", "商品簡介:" + product_des.val())
          .replace("發布日期", "發布日期:" + time.val())
          .replace("費用", "費用" + price.val())
          .replace(
            '<div class="bg-1 w-100 h-75 d-flex justify-content-center align-items-center"></div>',
            `<img src="${reader.result}" alt="${product_name.val()}" class="w-100 h-75">`
          )
          .replace(
            "相關連結",
            "相關連結" +
              `<a class="pl-2" href="${links.val()}">${links.val()}</a>`
          );
        $("#preview").html(previewHTML);
      }
    });
  };
  reader.readAsDataURL(file);
});
