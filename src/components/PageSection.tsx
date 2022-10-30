import React from 'react';
import TextImage from '@Sections/TextImage/TextImage';
import Header from '@Sections/Header/Header';
import ImageRecord from '@Sections/Image/Image';
import Text from '@Sections/Text/Text';
import YoutubeVideo from '@Sections/YoutubeVideo/YoutubeVideo';
import Grid from '@Sections/Grid/Grid';

export default function PageSection({ details }: any) {
  if (details.__typename === 'HeaderRecord') {
    return <Header details={details} />;
  } else if (details.__typename === 'TextImageRecord') {
    return <TextImage details={details} />;
  } else if (details.__typename === 'ImageRecord') {
    return <ImageRecord details={details} />;
  } else if (details.__typename === 'TextRecord') {
    return <Text details={details} />;
  } else if (details.__typename === 'YoutubeVideoRecord') {
    return <YoutubeVideo details={details} />;
  } else if (details.__typename === 'GridRecord') {
    return <Grid details={details} />;
  }
  return <></>;
}