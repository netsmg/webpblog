"use client";

import PhotoAlbum, { LayoutType, Photo } from "react-photo-album";
import NextJsImage from "../helpers/NextJsImage";

export default function Gallery({
  photos,
  layout,
  rowHeight,
  columns,
}: {
  photos: Photo[];
  layout: LayoutType;
  rowHeight?: number;
  columns?: number;
}) {
  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout={layout}
        columns={columns}
        targetRowHeight={rowHeight}
        renderPhoto={NextJsImage}
        defaultContainerWidth={500}
        sizes={{
          size: "calc(100vw - 40px)",
          sizes: [
            { viewport: "(max-width: 299px)", size: "calc(100vw - 100px)" },
            { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
            { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
          ],
        }}
      />
    </>
  );
}
