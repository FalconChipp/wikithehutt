import React from "react";
import Layout from "../components/Layout";
import Test1 from "../videos/Alpha-Gymdependence-25March.mp4";
import Test2 from "../videos/dnd dreaming vid ad.mp4"
import Test3 from "../videos/pixel heart compressed.mp4"
import Test4 from "../videos/pixel heart tshirt with text.mp4"
import Test5 from "../videos/ringer-t-shirt-video-with-a-trippy-animated-background-3288v.mp4"
import Video from "../components/Video";

export default function VideoTest() {
    return (
        <Layout>
            <div className="w-full h-100vh">
                <div className="bg-transparent">
                    <Video className="bg-transparent"
                        videoSrcURL={Test1}
                        videoTitle="Alpha Designs"
                    />
                </div>
                <div>
                <Video
                        videoSrcURL={Test4}
                        videoTitle="Alpha Designs"
                    />
                </div>
                <div>
                <Video
                        videoSrcURL={Test3}
                        videoTitle="Alpha Designs"
                    />
                </div>
                <div>
                <Video
                        videoSrcURL={Test2}
                        videoTitle="Alpha Designs"
                    />
                </div>
                <div>
                <Video
                        videoSrcURL={Test5}
                        videoTitle="Alpha Designs"
                    />
                </div>
            </div>
        </Layout>
    )
}