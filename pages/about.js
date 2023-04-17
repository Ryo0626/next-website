import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar} from 'components/two-column'
import Accordion from 'components/accordion'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

export default function About() {
  return (
    <Container>
      <Meta 
        pageTitle="アバウト" 
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
        />

      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          size="(min-width: 1152px) 1152px, 100vm"
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              こんにちは、田桐亮です。この教材を使用してサイト構築できるようになりたいと思います。
            </p>
            <h2>将来的には</h2>
            <p>
              この教材を取り組むことを通して、自分でサイトを運営していく。
              具体的には、バリチェフットボールクラブのサイトを制作して運営していきたい。
              そして、この経験により就活、将来的な職業に活かせるように取り組んでいきたいと思う。
            </p>
            <p>
              Next.jsは最新のフレームワークらしく様々な企業のコンテンツのWedサイトに使われている。
              学生のうちにこのNext.jsを身に着けて周りとの差を付けたいと思っている。
            </p>
            <h3>学生の間に取り組むこと</h3>
            <p>
              Next.jsなどのプログラミングスキルをつけて自分の武器にしていきたい。
              また、英語にも取り組んでいく。TOEICの勉強や対人で日常会話をスムーズに話せるようにしたい。
              なるべく色々なものを経験していきたい。主に海外旅行など。自分が知らない世界を自分自身の目で感じること。
            </p>

            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは作りたいものを作ることである。
              </p>
            </Accordion>
            <Accordion heading="古代語の解説">
              <p>
                古代語の解説において大切なものは文字を理解すること。
              </p>
            </Accordion>
            <Accordion heading="公開でポジ鳥の活用">
              <p>
                活用するとどこでもアクセスできる。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
     </TwoColumn>
    </Container>
  )
}