import PodcastItem from "../components/PodcastItem";
import { mixes } from "../data/podcastsData";

const Podcasts = () => {
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
