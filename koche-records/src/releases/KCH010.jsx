import ReactImageMagnify from 'react-image-magnify';

const KCH008 = () => {
  const coverImage = '/img/albums/smk.jpg';
  return (
    <section class='content-container'>
      <div class='flex justify-between items-center flex-wrap mx-10 pt-[80px] lg:flex-nowrap'>
        <div class='md:mb-0 hidden lg:block lg:max-w-[500px] '>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Terrify',
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
          <img src={coverImage} alt='Terrify' />
        </div>

        <div class='lg:w-[70%] lg:pl-[209px] md:pb-4 z-50'>
          <h2 class='font-medium pt-2'>SMK</h2>
          <p>Terrify [KCH010]</p>
          <p class='text-justify py-5 lg:mr-[150px]'>
            Koche Records introducing the new release “Terrify” from SMK. His
            unrivalled talent and unique musical style shine through every beat,
            creating an atmosphere that is both exhilarating and infectious.
            Stay tuned for the release of "Terrify" on June 1st and be among the
            first to experience the electrifying sounds that will dominate the
            dancefloors all summer long.
          </p>
          <div className='bandcamp-player'>
            <iframe
              title='ttt'
              class='w-full border-0'
              height={120}
              src='https://bandcamp.com/EmbeddedPlayer/album=1526901543/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/'
              seamless
            >
              <a href='https://kocherecords.bandcamp.com/album/terrify'>
                Terrify by SMK
              </a>
            </iframe>
          </div>
          <div class='py-4 lg:pt-[70px]'>
            <div>
              Listen on{' '}
              <a
                href='https://soundcloud.com/kocherecords/sets/smk-terrify-kch010'
                class='hover-underline-animation'
              >
                SoundCloud
              </a>
            </div>
            <div>
              Buy on{' '}
              <a
                href='https://www.beatport.com/release/terrify/4120823'
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

export default KCH008;
