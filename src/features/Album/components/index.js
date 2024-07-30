import React from 'react';
import AlbumList from "./AlbumList";

const datas = {
    title: "Nhạc Remix cực bốc",
    items: [
        {
            id: 1,
            title: "Top 100 Bài Hát Nhạc Trẻ Hay",
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/d/9/9/dd99bde71ef310c4691f360844a66c2f.jpg"
        },
        {
            id: 2,
            title: "Top 100 Pop Âu Mỹ Hay Nhất",
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/d/4/e/7d4ed982762b61eda17c341077cb58f1.jpg"
        },
        {
            id: 3,
            title: "Top 100 Nhạc",
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/c/5/1/6c51ae0cc525e22f90c8b6fb7dc78437.jpg"
        },
        {
            id: 4,
            title: "Top 100 Nhạc Trữ Tình Hay Nhất",
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/5/d/e/85deb162e1e8a7400a01b35e116949c5.jpg"
        },
        {
            id: 5,
            title: "Top 100 Nhạc Hàn Quốc Hay",
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/b/d/2/3bd27410d0ac44319b2d435566508382.jpg"
        },
    ]
}

const AlbumFeature = () => {
    return (
        <div>
            <h3>{datas.title}</h3>
            <AlbumList albums={datas.items}/>
        </div>
    );
};

export default AlbumFeature;