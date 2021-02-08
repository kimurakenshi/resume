import { Page } from '../core/components';
import Typewriter from 'typewriter-effect';

const shortPause = 400;
const longPause = 1000;

const Home = () => {
  return (
    <Page description="Home" title="Home">
      <div className="text-3xl ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        asperiores debitis neque tempore totam. Eum facere iure libero. At
        cumque, dolore doloremque error est et, eveniet ex facere iste maxime
        molestiae neque nostrum placeat qui sequi voluptas voluptate.
        Accusantium aspernatur cum debitis deserunt distinctio dolorem,
        doloremque doloribus ea facere fuga illum labore laudantium minima
        pariatur quas, quibusdam rerum similique ullam? Adipisci consequatur
        corporis cumque distinctio dolor dolorum fuga illum, ipsa numquam odit
        qui quidem rem voluptatem. A accusamus accusantium consequuntur delectus
        dolorem doloribus enim error hic illo ipsa labore libero, minima
        molestias neque omnis perferendis porro provident quis reiciendis
        repellat reprehenderit sunt temporibus tenetur. Cupiditate dolores
        eligendi iusto molestias natus odit, perferendis placeat quae, quaerat
        quibusdam, unde veniam. Ab accusantium animi beatae commodi consequatur
        dolore doloremque dolores dolorum ea error esse et eum expedita facilis
        fugiat fugit harum hic in officia placeat praesentium quia ratione,
        repudiandae, rerum saepe sequi voluptates voluptatum! Adipisci
        aspernatur atque, aut dignissimos dolorem error esse laudantium minus
        non porro provident quibusdam repellat totam? Aut corporis illum quas
        ullam velit? Aliquid, asperiores beatae consequatur cum earum ex
        excepturi facilis harum ipsam iure laboriosam maxime nisi odio optio
        repellat reprehenderit repudiandae totam voluptates. Adipisci, debitis,
        dolores esse facilis incidunt inventore maiores nihil non provident, quo
        ratione totam! Dolorum esse facilis inventore iste molestiae
        necessitatibus nemo nulla odio quae, quam quas quo reiciendis
        reprehenderit sit, soluta tempora tenetur unde veritatis! Aspernatur
        esse explicabo ipsa minima molestiae nihil officia quo? Ad amet cum
        dicta enim quasi quia vero. Aperiam at culpa, delectus doloribus ea eum
        fugiat illo ipsa iste, magni minus natus quaerat, quidem repellat
        suscipit? Aut deserunt fugiat inventore laborum odit quisquam quos
        similique. Alias aliquam amet aperiam asperiores aut consequuntur
        debitis delectus dolores ducimus eius enim eos et ex expedita fugiat
        fugit illum inventore ipsum, iure labore laboriosam laudantium magnam
        minus necessitatibus nesciunt odit quasi reprehenderit sint tempora
        temporibus ullam velit vitae, voluptatum! Accusantium alias aliquid
        aperiam architecto assumenda beatae corporis cumque deserunt distinctio
        dolorem dolores doloribus ducimus eligendi enim expedita explicabo
        inventore ipsam iusto magni modi, natus nihil omnis perferendis
        perspiciatis quam reiciendis sint sit soluta sunt temporibus? Eaque et
        expedita explicabo ipsum libero perspiciatis praesentium quod recusandae
        tempora, ut vel, voluptate. Deleniti ipsa porro qui quia quibusdam
        veniam voluptatibus. Consequuntur cupiditate doloribus dolorum ducimus
        ea et facere fuga illum, iste labore libero minus nostrum obcaecati odio
        officiis omnis quae qui quis rem repellat saepe suscipit velit.
      </div>
      <div className="text-xl md:text-2xl text-center pt-5 md:pt-20 md:w-1/2 font-light m-auto hiddens">
        <Typewriter
          options={{
            delay: 45,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(longPause)
              .typeString('Hello!')
              .pauseFor(longPause)
              .typeString(", I'm Sebastian.")
              .pauseFor(shortPause)
              .deleteChars(3)
              .typeString('án,')
              .typeString('<br/>')
              .pauseFor(shortPause)
              .typeString('This is my personal Website.')
              .pauseFor(longPause)
              .start();
          }}
        />
      </div>
    </Page>
  );
};

export default Home;
