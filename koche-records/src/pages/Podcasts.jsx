import PodcastItem from "../components/PodcastItem";

const Podcasts = () => {
  const mixes = [
    {
      name: "Microxika",
      desc: "025 Vinyl Only",
      image: "/img/podcasts/025.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-025-microxika",
    },
    {
      name: "Zaverescu",
      desc: "024",
      image: "/img/podcasts/024.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-024-zaverescu",
    },
    {
      name: "Filin",
      desc: "023 Vinyl Only",
      image: "/img/podcasts/023.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-023-filin-vinyl-only",
    },
    {
      name: "Hari",
      desc: "022 Vinyl Only",
      image: "/img/podcasts/022.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-022-hari-vinyl-only",
    },
    {
      name: "Basti Lorenz",
      desc: "021",
      image: "/img/podcasts/021.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-021-basti-lorenz",
    },
    {
      name: "Play Something",
      desc: "020",
      image: "/img/podcasts/020.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-020-play-something",
    },
    {
      name: "sa.mu",
      desc: "019",
      image: "/img/podcasts/019.jpg",
      href: "https://soundcloud.com/kocherecords/kochepodcast-019-samu",
    },
    {
      name: "Phil dB+",
      desc: "018 Vinyl Only",
      image: "/img/podcasts/018.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-018-phil-db",
    },
    {
      name: "Mario Rösner",
      desc: "017",
      image: "/img/podcasts/017.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-017-mario-rosner",
    },
    {
      name: "Moriòn",
      desc: "016 Vinyl Only",
      image: "/img/podcasts/016.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-016-morion-vinyl-only",
    },
    {
      name: "Nicolas Barnes",
      desc: "015",
      image: "/img/podcasts/015.jpg",
      href: "https://soundcloud.com/kocherecords/nicolas-barnes-mix",
    },
    {
      name: "Matthias Lindner",
      desc: "014",
      image: "/img/podcasts/014.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-014-matthias-lindner",
    },
    {
      name: "Dreimal T",
      desc: "013 Vinyl Only",
      image: "/img/podcasts/013.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-13-dreimal-t-vinyl-only",
    },

    {
      name: "steeloo",
      desc: "012",
      image: "/img/podcasts/012.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-12-steeloo",
    },
    {
      name: "Canteloop",
      desc: "011",
      image: "/img/podcasts/011.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-11-cantheloop",
    },
    {
      name: "BART",
      desc: "010",
      image: "/img/podcasts/010.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-10-bart",
    },
    {
      name: "Eraseland",
      desc: "009 Own Productions",
      image: "/img/podcasts/009.jpg",
      href: "https://soundcloud.com/kocherecords/eraseland-own-productions-podcast",
    },
    {
      name: "Eugene Schieffer",
      desc: "008",
      image: "/img/podcasts/008.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-08-eugene-schieffer",
    },
    {
      name: "Rhom Omit",
      desc: "007",
      image: "/img/podcasts/007.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-07-rhom-omit",
    },
    {
      name: "Boujay",
      desc: "006",
      image: "/img/podcasts/006.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-06-khaled-aj",
    },
    {
      name: "Louis the 4th",
      desc: "005",
      image: "/img/podcasts/005.jpg",
      href: "https://soundcloud.com/kocherecords/podcast-05-louis-the-4th",
    },
    {
      name: "Christine Schieffer",
      desc: "004",
      image: "/img/podcasts/004.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-04-christine-schieffer",
    },
    {
      name: "Lucitum",
      desc: "003",
      image: "/img/podcasts/003.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-03-lucitum",
    },
    {
      name: "Dreimal T",
      desc: "002 Vinyl Only",
      image: "/img/podcasts/002.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-02-dreimal-t",
    },
    {
      name: "Play Something",
      desc: "001",
      image: "/img/podcasts/001.jpg",
      href: "https://soundcloud.com/kocherecords/koche-podcast-01-eugene-schieffer-b2b-christine-schieffer",
    },
  ];
  return (
    <section class="lg:overflow-auto lg:h-[800px] pt-[100px] lg:pt-0">
      <div class="flex justify-between items-center mx-10 mb-8 flex-wrap gap-y-7 lg:gap-x-52">
        {mixes.map((mix) => (
          <PodcastItem key={mix.name} {...mix} />
        ))}
      </div>
    </section>
  );
};

export default Podcasts;
