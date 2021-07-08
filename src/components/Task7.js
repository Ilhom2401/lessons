import React, {Component} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';
import VideoPlayer from 'react-video-js-player'
import '../global.scss'

class Task7 extends Component {

    state = {
        isOpen: false,
        plus1: true,
        plus2: true,
        plus3: true,
        plus4: true,
        play: false

    };

    dropDown = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    plusChange1 = () => {
        this.setState({
            plus1: !this.state.plus1
        });
    };
    plusChange2 = () => {
        this.setState({
            plus2: !this.state.plus2
        });
    };
    plusChange3 = () => {
        this.setState({
            plus3: !this.state.plus3
        });
    };
    plusChange4 = () => {
        this.setState({
            plus4: !this.state.plus4
        });
    };

    videoPlay = () => {
        this.setState({
            play: !this.state.play
        })
    };

    render() {
        const {isOpen, plus1, plus2, plus3, plus4, play} = this.state;
        return (
            <div>
                <nav>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="left d-flex align-items-center">
                            <div className="logo">
                                <img src="/images/pdp.svg" alt=""/>
                            </div>
                            <div className="drop">
                                <Dropdown isOpen={isOpen} toggle={this.dropDown}>
                                    <DropdownToggle>
                                        <img src="/images/pdp2.svg" alt=""/>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>FrontEnd</DropdownItem>
                                        <DropdownItem>FrontEnd</DropdownItem>
                                        <DropdownItem>FrontEnd</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div className="text">
                                <h5>Barcha kurslar</h5>
                            </div>
                        </div>
                        <div className="right d-flex align-items-center">
                            <div className="bag">
                                <span className="icon icon-bag"></span>
                            </div>
                            <div className="bell">
                                <span className="icon icon-bell"></span>
                            </div>
                            <div className="human">
                                <img src="/images/pdp.human.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </nav>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2>Full-Stack <br/>
                                    Python Development</h2>
                                <p>Java dasturlash tili hozirgi kunda dunyoning gigant dasturlash <br/>
                                    tillaridan biri hisoblanadi. </p>
                                <button>Hoziroq boshlang</button>
                                <span>Birinchi dars <strong>bepul</strong></span>
                                <span><img src="/images/info.svg" alt=""/></span>
                            </div>
                            <div className="col-lg-4">
                                <div className="img">
                                    <img src="/images/circle.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                   <div className="container-fluid d-flex justify-content-center align-items-center">
                       <VideoPlayer
                           src="/videos/vid.MP4"
                           poster="/images/play.svg"
                           width='1350'
                           height='570'
                       />
                   </div>

                <div className="section2">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex justify-content-center align-items-center">
                                <div>
                                    <p>Davomiyligi</p>
                                    <h3>11 ta modul</h3>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <div>
                                    <p>Ta’lim turi</p>
                                    <h3>Online va Onsite</h3>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <div>
                                    <div className="d-flex align-items-center">
                                        <span className="mr-3">Muddati</span>
                                        <span><img src="/images/info.svg" alt=""/></span>
                                    </div>
                                    <h3>∞ Bir umr</h3>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <div>
                                    <p>Ish bilan ta’minlash</p>
                                    <h3>PDP Career a’zosi </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="python-text">
                    <div className="container">
                        <h2>Full-Stack Python <br/>
                            Roadmap Yo’nalishlari</h2>
                        <p>Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada o‘zlashtirilishi <br/> kerak
                            bo‘lgan
                            bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq <br/>
                            dalillar bilan ko‘rsatib beradi.</p>
                    </div>
                </div>

                <div className="cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box">
                                    <div className="d-flex justify-content-between">
                                        <div className="left">
                                            <p>1 - yo‘nalish</p>
                                            <h3>Fontend <br/>
                                                Development</h3>
                                        </div>
                                        <div className="right">
                                            <img src="/images/card1.svg" alt=""/>
                                        </div>
                                    </div>
                                    <span className="line"></span>

                                    <div className="text-group d-flex justify-content-between align-items-center">
                                        <div className="text2">
                                            <p>Davomiyligi</p>
                                            <h4>4 ta modul</h4>
                                        </div>
                                        <div className="text2">
                                            <p>Kurs tayyorladi</p>
                                            <h4>ECMA inc.</h4>
                                        </div>
                                        <div className="button">
                                            <button>Ba’tafsil</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <div className="d-flex justify-content-between">
                                        <div className="left">
                                            <p>2 - yo‘nalish</p>
                                            <h3>Python <br/>
                                                Development</h3>
                                        </div>
                                        <div className="right">
                                            <img src="/images/card2.PNG" alt=""/>
                                        </div>
                                    </div>
                                    <span className="line"></span>

                                    <div className="text-group d-flex justify-content-between align-items-center">
                                        <div className="text2">
                                            <p>Davomiyligi</p>
                                            <h4>3 ta modul</h4>
                                        </div>
                                        <div className="text2">
                                            <p>Kurs tayyorladi</p>
                                            <h4>Super Dispatch</h4>
                                        </div>
                                        <div className="button">
                                            <button>Ba’tafsil</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <div className="d-flex justify-content-between">
                                        <div className="left">
                                            <p>3 - yo‘nalish</p>
                                            <h3>Database <br/>
                                                Development</h3>
                                        </div>
                                        <div className="right">
                                            <img src="/images/card3.svg" alt=""/>
                                        </div>
                                    </div>
                                    <span className="line"></span>

                                    <div className="text-group d-flex justify-content-between align-items-center">
                                        <div className="text2">
                                            <p>Davomiyligi</p>
                                            <h4>2 ta modul</h4>
                                        </div>
                                        <div className="text2">
                                            <p>Kurs tayyorladi</p>
                                            <h4>ECMA inc.</h4>
                                        </div>
                                        <div className="button">
                                            <button>Ba’tafsil</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <div className="d-flex justify-content-between">
                                        <div className="left">
                                            <p>4 - yo‘nalish</p>
                                            <h3>Django <br/>
                                                Development</h3>
                                        </div>
                                        <div className="right">
                                            <img src="/images/card4.PNG" alt=""/>
                                        </div>
                                    </div>
                                    <span className="line"></span>

                                    <div className="text-group d-flex justify-content-between align-items-center">
                                        <div className="text2">
                                            <p>Davomiyligi</p>
                                            <h4>3 ta modul</h4>
                                        </div>
                                        <div className="text2">
                                            <p>Kurs tayyorladi</p>
                                            <h4>Super Dispatch</h4>
                                        </div>
                                        <div className="button">
                                            <button>Ba’tafsil</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-caro">
                    <div className="container">
                        <h2>Ta‘lim jarayoni</h2>
                        <p>Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada o‘zlashtirilishi <br/> kerak
                            bo‘lgan
                            bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq <br/>
                            dalillar bilan ko‘rsatib beradi.</p>
                    </div>
                </div>

                <div className="carousel">
                    <div className="container-fluid">
                        <OwlCarousel className="owl-theme" items="2" nav dots loop margin={29}>
                            <div className="item">
                                <img src="/images/caros.png" alt=""/>
                                <div className="text">
                                    <h4>O‘zingizga mos kursni tanlsh</h4>
                                    <p>Biz nafaqat yurtimizdagi balki butun dunyoda eng <br/> rivojlangan sohalar
                                        bo'yicha kurslarni
                                        taqdim <br/> etamiz va tanlash imkonini beramiz.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/images/caros.png" alt=""/>
                                <div className="tex">
                                    <div className="test">
                                        <h4>O‘zingizga mos kursni tanlsh</h4>
                                        <p>Biz nafaqat yurtimizdagi balki butun dunyoda eng <br/> rivojlangan
                                            sohalar
                                            bo'yicha kurslarni
                                            taqdim <br/> etamiz va tanlash imkonini beramiz.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>

                <div className="text-caro">
                    <div className="container">
                        <h2>Mentorlar</h2>
                        <p>Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada o‘zlashtirilishi <br/> kerak
                            bo‘lgan
                            bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq <br/>
                            dalillar bilan ko‘rsatib beradi.</p>
                    </div>
                </div>

                <div className="mentors">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="box text-center">
                                    <img className="hmn" src="/images/mentor1.png" alt=""/>
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <img className="zin" src="/images/zin.svg" alt=""/>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box text-center">
                                    <img className="hmn" src="/images/mentor2.png" alt=""/>
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <img className="zin" src="/images/zin.svg" alt=""/>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box text-center">
                                    <img className="hmn" src="/images/mentor3.png" alt=""/>
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <img className="zin" src="/images/zin.svg" alt=""/>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box text-center">
                                    <img className="hmn" src="/images/mentor4.png" alt=""/>
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <img className="zin" src="/images/zin.svg" alt=""/>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box text-center">
                                    <img className="hmn" src="/images/mentor5.png" alt=""/>
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <img className="zin" src="/images/zin.svg" alt=""/>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box text-center">
                                    <img className="hmn" src="/images/mentor6.png" alt=""/>
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <img className="zin" src="/images/zin.svg" alt=""/>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box text-center">
                                    <img className="hmn" src="/images/mentor7.png" alt=""/>
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <img className="zin" src="/images/zin.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-caro">
                    <div className="container">
                        <h2>Kursimiz <br/>
                            bitiruvchilari rezyumesi</h2>
                        <p>Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada o‘zlashtirilishi <br/> kerak
                            bo‘lgan
                            bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq <br/>
                            dalillar bilan ko‘rsatib beradi.</p>
                    </div>
                </div>

                <div className="certificate">
                    <div className="container d-flex justify-content-between">
                        <div className="student">
                            <img src="/images/student.png" alt=""/>
                        </div>
                        <div className="page">
                            <div className="developer">
                                <p>Lavozimi</p>
                                <h3>Full Stack Web Developer</h3>
                                <span className="line"></span>
                                <p>Oylik ish maosh</p>
                                <h4>7 000 000 so’mdan</h4>
                                <h5>Profesional ko’nikmalar</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-4 d-flex">
                                    <div className="mr-2">
                                        <img src="/images/sqr.svg" alt=""/>
                                    </div>
                                    <div>
                                        <span className="text">Saytlarni verstka <br/> qilish</span>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <div className="mr-2">
                                        <img src="/images/sqr.svg" alt=""/>
                                    </div>
                                    <div>
                                        <span className="text">HTML, CSS va JavaScript <br/>
                                        bilan ishlash</span>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <div className="mr-2">
                                        <img src="/images/sqr.svg" alt=""/>
                                    </div>
                                    <div>
                                        <span className="text">Moslashuvchanlik va <br/>
                                        brauzerlararo muvofiqligi</span>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <div className="mr-2">
                                        <img src="/images/sqr.svg" alt=""/>
                                    </div>
                                    <div>
                                        <span className="text">Git versiyasini <br/> boshqarish tizimi <br/> bilan ishlash</span>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <div className="mr-2">
                                        <img src="/images/sqr.svg" alt=""/>
                                    </div>
                                    <div>
                                            <span
                                                className="text">Vue va React freymvorklaridan <br/> foydalanish</span>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <div className="mr-2">
                                        <img src="/images/sqr.svg" alt=""/>
                                    </div>
                                    <div>
                                        <span className="text">Vue.js-da saytlar <br/>
                                        va ilovalarni yarating</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="silver">
                        <img src="/images/Silver.png" alt=""/>
                    </div>
                </div>

                <div className="text-caro">
                    <div className="container">
                        <h2>Kursni xarid qilish</h2>
                        <p>Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada o‘zlashtirilishi <br/> kerak
                            bo‘lgan
                            bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq <br/>
                            dalillar bilan ko‘rsatib beradi.</p>
                    </div>
                </div>

                <div className="salary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="course">
                                    <div className="left">
                                        <div className="text d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div>
                                                    <p>Frontend Development kursi</p>
                                                    <span className="number">1 550 000 so‘m</span>
                                                    <span className="sum"><img src="/images/200.svg" alt=""/></span>
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                    plus1 ? <span onClick={this.plusChange1}
                                                                  className="icon icon-plus" id="toggler"
                                                                  src="/images/plus.svg" alt=""/> :
                                                        <span onClick={this.plusChange1} className="icon icon-iks"
                                                              id="toggler"
                                                              src="/images/plus.svg" alt=""/>
                                                }

                                            </div>
                                        </div>
                                        <div>
                                            <UncontrolledCollapse toggler="#toggler">
                                                <Card>
                                                    <CardBody>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Nesciunt magni, voluptas debitis
                                                        similique porro a molestias consequuntur earum odio officiis
                                                        natus, amet hic, iste sed
                                                        dignissimos esse fuga! Minus, alias.
                                                    </CardBody>
                                                </Card>
                                            </UncontrolledCollapse>
                                        </div>

                                        <div className="text d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div>
                                                    <p>Python Development kursi</p>
                                                    <span className="number">2 550 000 so‘m</span>
                                                    <span className="sum"><img src="/images/200.svg" alt=""/></span>
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                    plus2 ? <span onClick={this.plusChange2}
                                                                  className="icon icon-plus" id="toggler2"
                                                                  src="/images/plus.svg" alt=""/> :
                                                        <span onClick={this.plusChange2} className="icon icon-iks"
                                                              id="toggler"
                                                              src="/images/plus.svg" alt=""/>
                                                }

                                            </div>
                                        </div>
                                        <div>
                                            <UncontrolledCollapse toggler="#toggler2">
                                                <Card>
                                                    <CardBody>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Nesciunt magni, voluptas debitis
                                                        similique porro a molestias consequuntur earum odio officiis
                                                        natus, amet hic, iste sed
                                                        dignissimos esse fuga! Minus, alias.
                                                    </CardBody>
                                                </Card>
                                            </UncontrolledCollapse>
                                        </div>

                                        <div className="text d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div>
                                                    <p>Database Development kursi</p>
                                                    <span className="number">1 800 000 so‘m</span>
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                    plus3 ? <span onClick={this.plusChange3}
                                                                  className="icon icon-plus" id="toggler3"
                                                                  src="/images/plus.svg" alt=""/> :
                                                        <span onClick={this.plusChange3} className="icon icon-iks"
                                                              id="toggler"
                                                              src="/images/plus.svg" alt=""/>
                                                }

                                            </div>
                                        </div>
                                        <div>
                                            <UncontrolledCollapse toggler="#toggler3">
                                                <Card>
                                                    <CardBody>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Nesciunt magni, voluptas debitis
                                                        similique porro a molestias consequuntur earum odio officiis
                                                        natus, amet hic, iste sed
                                                        dignissimos esse fuga! Minus, alias.
                                                    </CardBody>
                                                </Card>
                                            </UncontrolledCollapse>
                                        </div>

                                        <div className="text d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div>
                                                    <p>Django Development kursi</p>
                                                    <span className="number">3 000 000 so‘m</span>
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                    plus4 ? <span onClick={this.plusChange4}
                                                                  className="icon icon-plus" id="toggler4"
                                                                  src="/images/plus.svg" alt=""/> :
                                                        <span onClick={this.plusChange4} className="icon icon-iks"
                                                              id="toggler"
                                                              src="/images/plus.svg" alt=""/>
                                                }

                                            </div>
                                        </div>
                                        <div>
                                            <UncontrolledCollapse toggler="#toggler4">
                                                <Card>
                                                    <CardBody>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Nesciunt magni, voluptas debitis
                                                        similique porro a molestias consequuntur earum odio officiis
                                                        natus, amet hic, iste sed
                                                        dignissimos esse fuga! Minus, alias.
                                                    </CardBody>
                                                </Card>
                                            </UncontrolledCollapse>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="chegirma">
                                    <div className="d-flex align-items-center">
                                        <div className="bag">
                                            <img src="/images/pdp.bag.svg" alt=""/>
                                        </div>
                                        <div className="text">
                                            <h5>23-mart da <br/>
                                                chegirmalar tugaydi</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="pul">
                                    <div className="d-flex align-items-center">
                                        <div className="time">
                                            <img src="/images/time.svg" alt=""/>
                                        </div>
                                        <div className="text">
                                            <strong>Pulni qaytarib olish</strong> <br/>
                                            7 kun ichida pulni qaytarib olish kafolatlanadi
                                        </div>
                                    </div>
                                </div>
                                <div className="cashback">
                                    <div className="d-flex">
                                        <div className="imgp">
                                            <img src="/images/prot.svg" alt=""/>
                                        </div>
                                        <div className="text">
                                            <strong>12% Kashback</strong> <br/>
                                            Har bir sotib olingan kursingiz uchun sizga <br/>
                                            kashback beriladi. Kashbacklaringizni tizimdan <br/>
                                            kurs yoki support kunlari sotib olish uchun <br/>
                                            ishlatishingiz mumkin
                                        </div>
                                    </div>
                                </div>
                                <div className="tel">
                                    <div className="d-flex">
                                        <div className="image">
                                            <img src="/images/tel.svg" alt=""/>
                                        </div>
                                        <div className="text">
                                            <strong>Savolingiz bormi ?</strong> <br/>
                                            Qo‘ng‘iroq qiling: (+99878) 777-47-47 <br/>
                                            Savolingizni yozing: www.t.me/supportbot
                                        </div>
                                    </div>
                                </div>
                                <div className="promo">
                                    <div className="content">
                                        <h5>Menda promo kod mavjud</h5>
                                        <p>Promokod</p>
                                        <h4>-1 000 000 so‘m</h4>
                                        <p>Kurs uchun chegirma</p>
                                        <h4>-900 000 so‘m</h4>
                                        <p>Kursning chegirmasiz narxi <strong>5 000 000 so‘m</strong></p>
                                        <span className="line1"></span>
                                        <span className="line2"></span>
                                        <p>Tanlangan kurslaringiz narxi</p>
                                        <h3>3 100 000 so‘m</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tanlangan">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="left">
                            <p>Tanlangan kurslar:</p>
                            <h3>Frontend Development, Python Development</h3>
                        </div>
                        <div className="right d-flex align-items-center">
                            <div>
                                <p>Tanlangan kurslaringiz narxi</p>
                                <h3>3 100 000 so‘m</h3>
                            </div>
                            <div className="button">
                                <button>Xarid qilish</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>(78) 777-47-47</h4>
                                <p><a href=""> Yagona xizmat raqami</a></p>
                                <span className="icon icon-locat"></span>
                                <p className="adr">Toshkent shahar. Shayxontohur tum., <br/>
                                    Zarqaynar ko'ch., 3b-uy. </p>
                                <div className="img">
                                    <img src="/images/cer1.png" alt=""/>
                                    <img src="/images/cer2.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>Asosiy</h3>
                                <p><a href="#">Kompaniya haqida</a></p>
                                <p><a href="#">Hamkorlik</a></p>
                                <p><a href="#">Huquqiy hujjatlar</a></p>
                                <p><a href="#">Bog'lanish</a></p>
                            </div>
                            <div className="col-md-2">
                                <h3>Ta’lim</h3>
                                <p><a href="#">Onside</a></p>
                                <p><a href="#">Online</a></p>
                                <p><a href="#">Imtiyoz</a></p>
                                <p><a href="#">Code Skill</a></p>
                            </div>
                            <div className="col-md-2">
                                <h3>Loyihalar</h3>
                                <p><a href="#">PDP Live</a></p>
                                <p><a href="#">PDP Meetup</a></p>
                                <p><a href="#">PDP Generation</a></p>
                                <p><a href="#">Sertifikat</a></p>
                            </div>
                        </div>
                        <div className="end d-flex justify-content-between align-items-center">
                            <div className="left">
                                <p>Inflex, Inc. 2017 – 2020</p>
                            </div>
                            <div className="right">
                                <span className="icon icon-ins"></span>
                                <span className="icon icon-fb"></span>
                                <span className="icon icon-tg"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task7;