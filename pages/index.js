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

import image01 from '../public/gyoza.jpg'
import image02 from '../public/image0.png'
import image1 from '../public/image1.jpg'
import image2 from '../public/image2.jpg'
import image3 from '../public/image3.jpg'
import image4 from '../public/image4.jpg'
import image5 from '../public/image5.jpg'
import image6 from '../public/image6.jpeg'
import image7 from '../public/image7.jpg'
import image8 from '../public/image8.jpg'
import image9 from '../public/image9.jpg'
import image10 from '../public/image10.jpg'
import image11 from '../public/image11.jpg'





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
          <TopOrder />
          <LinkBlock />
          <TitleRibon title={"”いっちゃが餃子”とは"} id={"no1"} />
          <BasicLayout src={image1} content={'横浜で本格的な宮崎料理が食べれる「いっちゃが」を経営しております！宮崎はメディアでも取り上げられるほどの餃子の激戦区です。弊社製品の宮崎餃子はおうち時間でも美味しく楽しく過ごせるように食材にこだわっております。食べやすい大きさで作られているため、保存時の収納にもかさばらない大きさとなっております。ここでしか手に入らない逸品です♪'} />
          <TitleRibon title={"餃子へのこだわり"} id={"no2"} />
          <SubLayout title={'厳選宮崎ブランド豚肉使用'} src={image2} content={'当店人気の餃子は宇都宮を抜いて消費量2020年上半期日本一になった宮崎県の宮崎ギョーザです。人気を支えるのは厳選された宮崎ブランド豚肉を使用している点いあります。産地の方々の厳しいチェックのもと、送り出された最高級高産豚の旨みをご堪能ください。'} />
          <SubLayout title={'豊かな土壌で育った宮崎野菜'} src={image3} content={'生にんにくは宮崎県佐土原町(株)MOMIKIさん使用、生ショウガも宮崎県佐土原町の福田農園さんを使用しています。宮崎の豊な土壌で育った作物は旨味成分と栄養価たっぷり'} />
          <SubLayout title={'簡単に本場のハネを再現！'} src={image4} content={'フライパンを熱し油を適量ひきます、火を消して凍ったまま餃子を並べて強火で水３００ccを餃子の上から全体に注いでください、フタをして7分前後でパチパチと水分が飛んだら出来上がりです。「目安に10〜20個位で３００ccフライパン28センチ」'} />
          <SubLayout title={'お店の味をご家庭でも'} src={image5} content={'お店で提供しているものと同じ餃子を、旨味・鮮度を保つために作りたての状態から真空パックし、そこから急速冷凍。美味しさそのままにお店の味をご家庭へお届けいたします。'} />

        </section>
        <section className="bg-black text-white ">
          <div className="m-8 text-center lg:m-24">
            <h1 className="p-8 text-4xl" id={"no3"}>全ては、横浜の一軒の居酒屋から</h1>
            <BasicLayout src={image6} content={'横浜で本格宮崎料理「いっちゃが」を営んでおります。ムービル前の路地を進むと出現する隠れ家。宮崎出身のオヤジによる料理＆集めに集めた銘酒を自信を持ってご提供。長年、地元の方々からご愛顧いただきスタッフはもちろん常連さんとも仲良くなれる気さくな大人が夜な夜な集う、温かいお店です。'} />
            <ReverseBasicLayout src={image7} content={'しかしコロナ禍にてお店の売上が壊滅的な状況であります。ただ、「ピンチはチャンス」と捉えて今まで着手できていなかったEC販売の部分に力を入れていきます。当店で長年人気だった宮崎餃子をご自宅でも楽しめるように冷凍の商品として販売！'} />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center lg:m-24" id={"no4"}>

          <TitleRibon title={"美味しい餃子の作り方"} id={"no4"} />
          <MainLayout src={image8} content={'フライパンを熱し油を適量ひきます、火を消し凍ったまま餃子を並べてください'} />
          <MainLayout src={image9} content={'火力を強火にして水３００ccを餃子の上から全体にまんべんなく注いでください'} />
          <MainLayout src={image10} content={'フタをして7分前後でパチパチと水分が飛んだら美味しい餃子の出来上がりです。'} />
          <TitleRibon title={"商品ラインナップ"} id={"no5"} />
          <ItemImage src={image11} />
          <TopOrder />
          <LinkBlock />
        </section>
        <Footer />
      </div>

    </>
  )
}

export default Home
