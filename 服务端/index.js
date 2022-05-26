const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())


// 处理POST请求
app.post('/', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})



// 处理GET请求
app.get('/test', (req, res) => {
  res.send({
    sum: 0,
    test: [
      { 'id': 1, 'title': '1．距离地球最近的巨行星是：', 'selectA': 'A.土星 ', 'selectB': 'B.木星', 'selectC': 'C.海王星', 'selectD': 'D.冥王星', 'rightSelect': 'B', 'selected': '' },
      { 'id': 2, 'title': '2．下列现象中，发生在太阳光球层的是：', 'selectA': 'A.耀斑', 'selectB': 'B.黑子', 'selectC': 'C.太阳风', 'selectD': 'D.日饵', 'rightSelect': 'B', 'selected': '' },
      { 'id': 3, 'title': '3．距离太阳最远的类地行星是：', 'selectA': 'A.金星', 'selectB': 'B.土星', 'selectC': 'C.火星', 'selectD': 'D.冥王星', 'rightSelect': 'D', 'selected': '' },
      { 'id': 4, 'title': '4．下列现象中，发生在太阳色球层的是：', 'selectA': 'A.耀斑', 'selectB': 'B.黑子', 'selectC': 'C.太阳风', 'selectD': 'D.极光', 'rightSelect': 'A', 'selected': '' },
      { 'id': 5, 'title': '5．由于地球自转而产生的自然现象是：', 'selectA': 'A.昼夜更替', 'selectB': 'B.四季更替', 'selectC': 'C.昼夜长短变化', 'selectD': 'D.正午太阳高度变化', 'rightSelect': 'A', 'selected': '' }
    ],
  })
})


app.get('/players', (req, res) => {
  res.send({
    players: [
      { 'playerimg': '../../image/元宇宙1.jpeg', 'name': '带你体验元宇宙的一天', 'Vurl': '1' },
      { 'playerimg': '../../image/元宇宙2.png', 'name': '不懂元宇宙就被鄙视，我是一个人吗？ ', 'Vurl': '2' },
      { 'playerimg': '../../image/元宇宙3.jpeg', 'name': '元宇宙视为“智人进阶为智神”的封神之路', 'Vurl': '3' },
    ]
  })
})

app.get('/video', (req, res) => {
  res.send({
    videoU: '',
    video: [
      { 'id': '1', 'vurl': 'https://vd2.bdstatic.com/mda-ncrjzztj6ehxugyf/sc/cae_h264_delogo/1648304400248358871/mda-ncrjzztj6ehxugyf.mp4?v_from_s=hkapp-haokan-hna&auth_key=1648439686-0-0-8ab69457f989fde3b15dca472c4d1d0d&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=1485924315&vid=3872505185508521476&abtest=100815_2-101130_2-17451_2-3000185_1&klogid=1485924315' },
      { 'id': '2', 'vurl': 'https://vd2.bdstatic.com/mda-mkep2juscazauqj8/sc/cae_h264_nowatermark/1636964509073132897/mda-mkep2juscazauqj8.mp4?v_from_s=hkapp-haokan-hna&auth_key=1648439793-0-0-4bc04ee63bb36ed2411c99e7677ddd16&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=1593785953&vid=2686583205086490773&abtest=100815_2-101130_2-17451_2-3000185_1&klogid=1593785953' },
      { 'id': '3', 'vurl': 'https://vd4.bdstatic.com/mda-mkkdq4ir0imf1x7x/sc/cae_h264/1637487779876611846/mda-mkkdq4ir0imf1x7x.mp4?v_from_s=hkapp-haokan-hnb&auth_key=1648439735-0-0-7bb0ddd3b3e55bd2f68d65d7e9ca4485&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=1535050318&vid=10384829188138328318&abtest=100815_2-101130_2-17451_2-3000185_1&klogid=1535050318' }
    ]
  })
})


// 监听3000端口
app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})
