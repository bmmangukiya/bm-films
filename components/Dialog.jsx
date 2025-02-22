import React from 'react';

import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';

import YoutubePlayer from './YoutubePlayer';

export function PlayerDialog({ setOpen, selected }) {
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <Dialog open={true} handler={handleOpen} size="xs" className="">
      <DialogBody className="aspect-video">
        <YoutubePlayer videoId={selected?.id} />
      </DialogBody>
      <DialogHeader>{selected?.title ?? ''}</DialogHeader>
    </Dialog>
  );
}
