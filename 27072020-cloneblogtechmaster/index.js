const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()

let content = [
  {
    image: "https://specials-images.forbesimg.com/imageserve/5edebf2eb1784e0006de6f70/960x0.jpg",
    title: "Harvard và USC nói với sinh viên quốc tế năm đầu hãy ở nhà vậy du học sinh học ở đâu bây giờ?",
    date: "26-07-2020"
  },
  {
    image: "https://www.cv-library.co.uk/career-advice/wp-content/uploads/2018/06/What-is-it-like-working-in-IT.jpg",
    title: "Kinh Nghiệm Học Coding Dành Cho Dân Trái Ngành",
    date: "26-07-2020"
  },
  {
    image: "https://techmaster.vn/media/static/6734/bsckujs51cob9t3q7mi0",
    title: "Kubernetes cho người mới bắt đầu (phần 3): Tạo Pod bằng file YAML",
    date: "25-07-2020"
  },
  {
    image: "https://techmaster.vn/media/static/bqlv4cn0k7qsf98mcffg/bsdgst451cob9t3q7mvg",
    title: "React Native vs Flutter — Đâu là lựa chọn phù hợp với bạn?",
    date: "24-07-2020"
  },
  {
    image: "https://ggstorage.oxii.vn/images/oxii-2019-6-25/728/jakob-owens-j5keq1jlqzk-unsplash_1.jpg",
    title: "10 bước lột xác để thành người chiến thắng",
    date: "24-07-2020"
  },
  {
    image: "https://techmaster.vn/media/static/6734/bsckujs51cob9t3q7mi0",
    title: "Kubernetes cho người mới bắt đầu (phần 2): Quản lý các container với Pods",
    date: "24-07-2020"
  },
  {
    image: "https://techmaster.vn/media/static/6734/bsckujs51cob9t3q7mi0",
    title: "Kubernetes cho người mới bắt đầu (phần 1): Cùng tìm hiểu về kiến trúc của Kubernetes",
    date: "23-07-2020"
  },
  {
    image: "https://techmaster.vn/media/static/10194/bsbcp9451cob9t3q7m9g",
    title: "Các cô gái cần học code ngay hôm nay!!!",
    date: "21-07-2020"
  },
  {
    image: "https://techmaster.vn/media/static/8103/bkkpbhc51cof99qium9g",
    title: "Học lập trình Swift qua các ví dụ",
    date: "21-07-2020"
  },
  {
    image: "https://techmaster.vn/media/static/8103/bsb9k1451cob9t3q7m4g",
    title: "SF Symbols: Những lợi ích và cách sử dụng",
    date: "21-07-2020"
  },
  {
    image: "https://techmaster.vn/media/static/10194/bsb6v0k51cob9t3q7m20",
    title: "14 thư viện NodeJS tuyệt vời nhất 2020 mà bạn không thể bỏ qua (phần 2)",
    date: "21-07-2020"
  },
  {
    image: "https://techmaster.vn/media/static/bqlv4cn0k7qsf98mcffg/bsas5ss51cob9t3q7lp0",
    title: "Flutter Web. Sao không~?",
    date: "20-07-2020"
  }
]

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000)

app.post("/new-entry", function (req, res) {
  console.log("Đã nhận request", req.body);
  let newEntry = [req.body.image, req.body.title, req.body.date];
  content.push(req.body)
})

app.get("/", function (req, res) {
  res.render("index.ejs", {result: content})
})