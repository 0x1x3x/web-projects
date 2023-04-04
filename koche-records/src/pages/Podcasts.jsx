import PodcastItem from "../components/PodcastItem";
import { mixes } from "../data/podcastsData";

const Podcasts = () => {
  return (
    <section class="content-container pt-[100px] lg:pt-2 lg:pb-10">
      <div class="flex justify-between content-center items-center mx-10 mb-8 flex-wrap gap-y-7 lg:gap-x-52">
        {mixes.map((mix) => (
          <PodcastItem key={mix.name} {...mix} />
        ))}
      </div>
    </section>
  );
};

export default Podcasts;
