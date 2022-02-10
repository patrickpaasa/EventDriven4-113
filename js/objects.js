let variable = new String("kasjdhf")
let variable2 = "askdjashdf"
// console.log(variable.to)
// console.log(variable2)

let dte = new Date(2021, 4, 13)
// console.log(dte.toDateString() + 1)

let profile = {
    title: "Ms",
    firstname: "Mary Joann",
    lastname: "Terry",
    gender: "Female",
    email: "mjoanterry@gmail.com",
    picture: "https://randomuser.me/api/portraits/women/75.jpg",
    getName: function () {
        return `${this.title}. ${this.firstname} ${this.lastname}`
    },
    changeTitle: function (dtitle) {
        this.title = dtitle
    }
}

// console.log(profile.getName())
// console.log(profile.firstname)
// let strjson = JSON.stringify(profile);
// console.log(strjson)
// console.log(strjson.firstname)
// console.log(JSON.parse(strjson))


let meals = [
    { price: 375.99, name: "Baked salmon with fennel & tomatoes", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg", id: "52959" },
    { price: 375.99, name: "Cajun spiced fish tacos", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/uvuyxu1503067369.jpg", id: "52819" },
    { price: 375.99, name: "Escovitch Fish", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/1520084413.jpg", id: "52944" },
    { price: 375.99, name: "Fish fofos", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/a15wsa1614349126.jpg", id: "53043" },
    { price: 375.99, name: "Fish pie", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/ysxwuq1487323065.jpg", id: "52802" },
    { price: 375.99, name: "Fish Stew with Rouille", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/vptqpw1511798500.jpg", id: "52918" },
    { price: 375.99, name: "Garides Saganaki", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/wuvryu1468232995.jpg", id: "52764" },
    { price: 375.99, name: "Grilled Portuguese sardines", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/lpd4wy1614347943.jpg", id: "53041" },
    { price: 375.99, name: "Honey Teriyaki Salmon", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/xxyupu1468262513.jpg", id: "52773" },
    { price: 375.99, name: "Kedgeree", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/utxqpt1511639216.jpg", id: "52887" },
    { price: 375.99, name: "Kung Po Prawns", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/1525873040.jpg", id: "52946" },
    { price: 375.99, name: "Laksa King Prawn Noodles", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/rvypwy1503069308.jpg", id: "52821" },
    { price: 375.99, name: "Mediterranean Pasta Salad", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/wvqpwt1468339226.jpg", id: "52777" },
    { price: 375.99, name: "Mee goreng mamak", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/xquakq1619787532.jpg", id: "53048" },
    { price: 375.99, name: "Nasi lemak", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/wai9bw1619788844.jpg", id: "53051" },
    { price: 375.99, name: "Portuguese fish stew (Caldeirada de peixe)", image: "https:\/\/www.themealdb.com\/images\/media\/meals\/do7zps1614349775.jpg", id: "53045" },

]
