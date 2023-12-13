'use client';

import { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';

import { Maybe } from 'graphql/jsutils/Maybe';
import {FileField} from '@/graphql/generated';
import MuxPlayer from "@mux/mux-player-react";

type Props = {
  videoHeader: string;
  videoSubheader: Maybe<string>;
  video: Maybe<FileField>;
};

const Video = ({
  videoHeader,
  videoSubheader,
  video,
}: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-24 bg-menugray">
      <div className="mx-auto max-w-6xl px-6 sm:px-6">
        <SectionTitle
          title={videoHeader}
          paragraph={videoSubheader}
          center
          mb="80px"
        />

        <div className="flex flex-wrap">
          <div className="w-full">
              <div className="relative aspect-[77/40]">

                  {video?.video?.muxPlaybackId && <div className="bg-cardbg text-white">
                    <MuxPlayer
                        streamType="on-demand"
                        playbackId={video.video.muxPlaybackId}
                    />
                  </div>}

              </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Video;
