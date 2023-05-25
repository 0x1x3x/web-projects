import ReactImageMagnify from 'react-image-magnify';

const KCH009 = () => {
  const coverImage = '/img/albums/garage.jpg';
  return (
    <section class='content-container'>
      <div class='flex justify-between items-center flex-wrap mx-10 pt-[80px] lg:flex-nowrap'>
        <div class='md:mb-0 hidden lg:block lg:max-w-[500px] '>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Garage',
                isFluidWidth: true,
                src: coverImage,
              },
              largeImage: {
                src: coverImage,
                width: 1200,
                height: 1200,
              },
            }}
          />
        </div>
        <div class='mb-4 lg:hidden '>
          <img src={coverImage} alt='Garage' />
        </div>

        <div class='lg:w-[70%] lg:pl-[209px] md:pb-4 z-50'>
          <h2 class='font-medium pt-2'>Fardin Ameri & Morteza Minouei</h2>
          <p>Garage [KCH009]</p>
          <p class='text-justify py-5 lg:mr-[150px]'>
            Koche Records introducing the new release «Garage» from two talented
            producers hailing from Tehran, Iran - Fardin Ameri & Morteza Minouei
            . This EP seamlessly blends elements of both minimal techno and
            rominimal to create a truly unique listening experience, two deep
            and intricately detailed minimal tracks showcases the producers'
            masterful use of subtle nuances and hypnotic rhythms, drawing
            listeners into a world of pure sonic bliss. Don't miss out on this
            captivating journey through the sounds of Iran's vibrant electronic
            music scene.
          </p>
          <div className='bandcamp-player'>
            <iframe
              title='ttt'
              class='w-full border-0'
              height={120}
              src='https://bandcamp.com/EmbeddedPlayer/album=2795651979/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/'
              seamless
            >
              <a href='https://kocherecords.bandcamp.com/album/garage'>
                Garage by Fardin Ameri, Morteza Minouei
              </a>
            </iframe>
          </div>
          <div class='py-4 lg:pt-[70px]'>
            <div>
              Listen on{' '}
              <a
                href='https://soundcloud.com/kocherecords/sets/fardin-ameri-morteza-minouei-garage'
                class='hover-underline-animation'
              >
                SoundCloud
              </a>
            </div>
            <div>
              Buy on{' '}
              <a
                href='https://www.beatport.com/release/garage/4107248'
                class='hover-underline-animation'
              >
                Beatport
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KCH009;
