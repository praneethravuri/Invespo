async function getCompanyData() {
    const data = await $.getJSON("https://dummyjson.com/todos");
    return data;
}

console.log(getCompanyData)