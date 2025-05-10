import React, { useEffect, useState } from 'react';
import '../assets/styles/Project.scss';

type AppIconProps = {
  appId: string;
};

const AppIcon: React.FC<AppIconProps> = ({ appId }) => {
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://itunes.apple.com/lookup?id=${appId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results[0]) {
          setIconUrl(data.results[0].artworkUrl512.replace(/^http:/, 'https:'));
        }
      })
      .catch((error) => {
        console.error('Error fetching app icon:', error);
      });
  }, [appId]);

  if (!iconUrl) return null;

  return <img src={iconUrl} className="zoom" alt="App Icon" width="100%"/>;
};

export default AppIcon;