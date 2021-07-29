import { Podcast } from '../types/Podcast';
import { decode } from 'html-entities';

const getPlayerArguments = (podcast: Podcast) => {
    return {
        mp3: encodeURI(podcast.meta.audio_file),
        title: decode(podcast.title.rendered),
        image: podcast.episode_player_image,
    };
};

export default getPlayerArguments;
