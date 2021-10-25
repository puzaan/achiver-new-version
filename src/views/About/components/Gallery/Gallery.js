import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

const Gallery = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://cdn.discordapp.com/attachments/879992345968377866/879998355151941672/IMG_20210407_080020.jpg',
      source: 'https://cdn.discordapp.com/attachments/879992345968377866/879998355151941672/IMG_20210407_080020.jpg',
      rows: 3,
      cols: 4,
    },
    {
      src: 'https://cdn.discordapp.com/attachments/879992345968377866/879998652892979200/IMG_20210407_094912.jpg',
      source: 'https://cdn.discordapp.com/attachments/879992345968377866/879998652892979200/IMG_20210407_094912.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://cdn.discordapp.com/attachments/879992345968377866/879998645360013352/IMG_20210407_081138.jpg',
      source: 'https://cdn.discordapp.com/attachments/879992345968377866/879998645360013352/IMG_20210407_081138.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://cdn.discordapp.com/attachments/879992345968377866/879998652184162344/IMG_20210407_094826.jpg',
      source: 'https://cdn.discordapp.com/attachments/879992345968377866/879998652184162344/IMG_20210407_094826.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: ' https://cdn.discordapp.com/attachments/879992345968377866/879998666922917919/IMG_20210407_104021.jpg',
      source: ' https://cdn.discordapp.com/attachments/879992345968377866/879998666922917919/IMG_20210407_104021.jpg',
      rows: 2,
      cols: 2,
    },
    {
      src: ' https://cdn.discordapp.com/attachments/879992345968377866/879998660975427614/IMG_20210407_094924.jpg',
      source: ' https://cdn.discordapp.com/attachments/879992345968377866/879998660975427614/IMG_20210407_094924.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: ' https://cdn.discordapp.com/attachments/879992345968377866/879998671389863956/IMG_20210407_104059.jpg',
      source: ' https://cdn.discordapp.com/attachments/879992345968377866/879998671389863956/IMG_20210407_104059.jpg',
      rows: 1,
      cols: 2,
    },
    
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Check out our gallery
        </Typography>
        <Typography variant="h6" align={'center'} color={'text.secondary'}>
          After 3 days all of your offers will arrive and you will have another 7 days to select your new company.
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'flex-end'} marginBottom={2}>
        <Button
          color="primary"
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
          onClick={() => openLightbox(0)}
        >
          Open the gallery
        </Button>
      </Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photosToShow.map((item, i) => (
            <ImageListItem
              key={i}
              cols={isMd ? item.cols || 1 : 2}
              rows={isMd ? item.rows || 1 : 1}
            >
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                effect="blur"
                onClick={() => openLightbox(i)}
                style={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                  cursor: 'poiner',
                  borderRadius: 8,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() => setCurrentImage((currentImage + photos.length - 1) % photos.length)}
          onMoveNextRequest={() => setCurrentImage((currentImage + 1) % photos.length)}
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>
  );
};

export default Gallery;
