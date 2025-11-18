import React from 'react';

interface VideoProps {
  src: string;
  title: string;
  description?: string;
  autoplay?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
}

const Video: React.FC<VideoProps> = ({
  src,
  title,
  description,
  autoplay = false,
  controls = true,
  width = '100%',
  height = '400px',
}) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md shadow-gray-300/40 border border-gray-200">
      <video
        width={width}
        height={height}
        autoPlay={autoplay}
        controls={controls}
        className="w-full"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="p-6 bg-gray-50">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {description && <p className="text-gray-600 text-base">{description}</p>}
      </div>
    </div>
  );
};

export default Video;
