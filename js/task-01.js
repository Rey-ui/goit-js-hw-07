// 1
const categorList = document.getElementById("categories");
const categorItems = categorList.querySelectorAll('.item');
console.log(`Кількість категорій: ${categorItems.length}`);
categorItems.forEach(category => {
    const h2Title = category.querySelector("h2").textContent;
    const ulLiList = category.querySelectorAll("ul li");
    console.log(` заголовок: ${h2Title}, \n кількість: ${ulLiList.length}`)
})