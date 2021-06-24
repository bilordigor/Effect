import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: 'black',
    filter: 'grayscale(10%) opacity(100%)',
    mixBlendMode: 'multiply',
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    zIndex: '-1',
  },
}));

const Background = ({ src, alt = 'background', SetIsLoad }) => {
  const classes = useStyles();
  const theme = useTheme();

  const Load = () => {
    // setTimeout(() => {
    //   SetIsLoad(false)
    //   console.log("false")
    // }, 5000)
    SetIsLoad(false)
    // console.log("SetIsLoad(false)")
  }

  return (
    <div className={classes.background}>
      <Image
        alt={alt}
        src={src}
        layout="fill"
        objectFit="cover"
        quality={100}
        onLoad={() => Load()}
      />
    </div>
  )
};

export default Background;
