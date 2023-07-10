import React from "react";

export default function Playlist() {
  const styles = {
    playlist: {
      width: "100%",
      maxWidth: "660px",
      overflow: "hidden",
      background: "transparent",
    },
  };

  return (
    <iframe
      allow="autoplay *; encrypted-media *;"
      title="Gym Playlist"
      frameborder="0"
      height="450"
      style={styles.playlist}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src="https://embed.music.apple.com/us/playlist/gym/pl.u-RRbVYr2Im1yMpg"
    ></iframe>
  );
}
