import React from 'react'
import Header from '../components/Header'
import Block from '../components/Block'
import TopImage from '../components/TopImage'
import TopOrder from '../components/TopOrder'
import LinkBlock from '../components/LinkBlock'
import TitleRibon from '../components/TitleRibon'
import BasicLayout from '../components/BasicLayout'
import SubLayout from '../components/SubLayout'
import ReverseBasicLayout from '../components/ReverseBasicLayout'
import Footer from '../components/Footer'
import MainLayout from '../components/MainLayout'
import ItemImage from '../components/ItemImage'

import image01 from '../public/tate.jpg'
import image02 from '../public/icchimain.png'
import image1 from '../public/image1.jpg'
import image2 from '../public/image2.jpg'
import image3 from '../public/image3.jpg'
import image4 from '../public/01-10.jpg'
import image5 from '../public/01-8.jpg'
import image6 from '../public/image6.jpeg'
import image7 from '../public/image7.jpg'
import image8 from '../public/image8.jpg'
import image9 from '../public/image9.jpg'
import image10 from '../public/image10.jpg'
import image11 from '../public/image11.jpg'
import image12 from '../public/item1.jpg'
import image13 from '../public/item2.jpg'
import image14 from '../public/item3.jpg'
import image15 from '../public/item4.jpg'
import image16 from '../public/item5.jpg'
import image17 from '../public/item6.jpg'

const url = "https://store.shopping.yahoo.co.jp/icchyaga/b5dcbaeaa5.html#sideNaviItems"
const url1 = "https://store.shopping.yahoo.co.jp/icchyaga/1001.html"
const url2 = "https://store.shopping.yahoo.co.jp/icchyaga/1002.html"
const url3 = "https://store.shopping.yahoo.co.jp/icchyaga/1003.html"
const url4 = "https://store.shopping.yahoo.co.jp/icchyaga/1004.html"
const url5 = "https://store.shopping.yahoo.co.jp/icchyaga/1005.html"
const url6 = "https://store.shopping.yahoo.co.jp/icchyaga/1003.html"



const Home = () => {
  const props = {
    src1: image01,
    src2: image02,
  }
  return (
    <>
      <div className="sticky font-kaisei">
        <Header />
        <TopImage src={props} />
        <section className="flex flex-col justify-center items-center  lg:m-24">
          <TopOrder content={"当店自慢の餃子を召し上がれ"} />
          <LinkBlock url={url} />
          <TitleRibon title={"”いっちゃが餃子”とは"} id={"no1"} />
          <BasicLayout src={image1} content={'横浜で本格的な宮崎料理が食べられる「いっちゃが」を経営しております！宮崎はメディアでも取り上げられるほどの餃子の激戦区です。弊社製品の宮崎餃子はおうち時間でも美味しく楽しく過ごせるように食材にこだわっております。食べやすい大きさで作られているため、保存時の収納にもかさばらない大きさとなっております。ここでしか手に入らない逸品です♪'} />
          <TitleRibon title={"餃子へのこだわり"} id={"no2"} />
          <SubLayout title={'厳選宮崎ブランド豚肉使用'} src={image2} content={'当店人気の餃子は宇都宮を抜いて消費量2021年宇都宮、浜松を抜いて日本一になった宮崎県の宮崎ギョーザです。人気を支えるのは厳選された宮崎ブランド豚肉を使用している点にあります。産地の方々の厳しいチェックのもと、送り出された最高級国産豚の旨みをご堪能ください。'} />
          <SubLayout title={'豊かな土壌で育った宮崎野菜'} src={image3} content={'生にんにくは宮崎県佐土原町(株)MOMIKIさん使用、生生姜も宮崎県佐土原町の福田農園さんを使用しています。宮崎の豊かな土壌で育った作物は旨味成分と栄養価たっぷり'} />
          <SubLayout title={'簡単に本場のハネを再現！'} src={image4} content={'フライパンを熱し油を適量ひきます、火を消して凍ったまま餃子を並べて強火で水２００～３００ｃｃを餃子の上から全体に注いでください、フタをして7分前後でパチパチと水分が飛んだら出来上がりです。「目安は28センチフライパンで10～20個が300cc」'} />
          <SubLayout title={'お店の味をご家庭でも'} src={image5} content={'お店で提供しているものと同じ餃子を、旨味・鮮度を保つために作りたての状態から急速冷凍してから真空パック。美味しさそのままにお店の味をご家庭へお届けいたします。'} />

        </section>
        <section className="bg-black text-white ">
          <div className="m-8 text-center lg:m-24">
            <h1 className="p-8 text-4xl" id={"no3"}>全ては、横浜の一軒の居酒屋から</h1>
            <BasicLayout src={image6} content={'横浜で本格宮崎料理「いっちゃが」を営んでおります。ムービル前の路地を進むと出現する隠れ家。宮崎出身のオヤジによる料理＆集めに集めた銘酒を自信を持ってご提供。長年、地元の方々からご愛顧いただきスタッフはもちろん常連さんとも仲良くなれる気さくな大人が夜な夜な集う、温かいお店です。'} />
            <ReverseBasicLayout src={image7} content={'しかしコロナ禍にてお店の売上が壊滅的な状況であります。ただ、「ピンチはチャンス」と捉えて今まで着手できていなかったEC販売の部分に力を入れていきます。当店で長年人気だった宮崎餃子をご自宅でもお楽しみいただけるように冷凍の商品として販売！また企業に対してのOEMや卸販売も開始(ご興味をお持ちの企業様、ぜひお問い合わせください)様々な挑戦を通して皆様に食の喜びをお届けします。'} />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center lg:m-24" id={"no4"}>
          <TitleRibon title={"美味しい餃子の作り方"} id={"no4"} />
          <MainLayout src={image8} content={'フライパンを熱し油を適量ひきます、火を消し凍ったまま餃子を並べてください'} />
          <MainLayout src={image9} content={'火力を強火にして水３００ccを餃子の上から全体にまんべんなく注いでください'} />
          <MainLayout src={image10} content={'フタをして7分前後でパチパチと水分が飛んだら美味しい餃子の出来上がりです。'} />

          <div className="aspect-w-16 aspect-h-9">
            <iframe width="360" height="200" src="https://www.youtube.com/embed/7zbvx6ATKa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <TitleRibon title={"商品ラインナップ"} id={"no5"} />
          <ItemImage src={image12} />
          <TopOrder content={"3パック2,250円税込(合計30個)"} />
          <LinkBlock url={url1} />
          <ItemImage src={image13} />
          <TopOrder content={"お得用6パック3,700円税込(合計60個)"} />
          <LinkBlock url={url2} />
          <ItemImage src={image14} />
          <TopOrder content={"お得用12パック6,350円税込(120個)"} />
          <LinkBlock url={url3} />
          <ItemImage src={image15} />
          <TopOrder content={"ギョウザにんにく2倍（3パック）2,250円税込(10個)"} />
          <LinkBlock url={url4} />
          <ItemImage src={image16} />
          <TopOrder content={"しそ入りギョウザ（3パック）2,250円税込(10個)"} />
          <LinkBlock url={url5} />

        </section>
        <Footer />
      </div>

    </>
  )
}

export default Home
