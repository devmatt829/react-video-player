import React from 'react';

import ProgressControl from './ProgressControl';
import PlayToggle from './PlayToggle';
import ForwardControl from './ForwardControl';
import ReplayControl from './ReplayControl';
import FullscreenToggle from './FullscreenToggle';

export default function ControlBar(props) {
  //Compose by child component
  return (
    <div className="video-react-control-bar">
      <PlayToggle {...props} />
      <ReplayControl {...props} />
      <ForwardControl {...props} />
      <ProgressControl {...props} />
      <FullscreenToggle {...props} />
    </div>
  );
}
