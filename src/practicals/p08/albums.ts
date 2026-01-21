import axios from "axios";

interface FullAlbum {
    userId: number,
    id: number,
    title: string,
    photos: {
        albumId: number,
        id: number,
        title: string,
        url: string,
        thumbnailUrl: string,
    }
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]> {
    try {
        const res = await axios.get(PHOTOS_URL);
        const res2 = await axios.get(ALBUMS_URL);
        const photos = res.data;
        const albums = res2.data;
        return {
            ...photos,
            albums,
        }
    } catch (error) {
        return [];
    }
}
