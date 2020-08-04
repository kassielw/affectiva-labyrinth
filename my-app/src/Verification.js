import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core/';
import Webcam from "react-webcam";
 
const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
}));

export default function Verfication() {
    const classes = useStyles();
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Face ID Verification
        </Typography>

        <Grid container spacing={2}>
            <>
                <Webcam
                audio={false}
                ref={webcamRef}
                mirrored={true}
                width={720}
                screenshotFormat="image/jpeg"
                />
                <Button variant="contained" onClick={capture}>Capture photo</Button>
                {imgSrc && (
                <img
                    src={imgSrc}
                />
                )}
            </>
        </Grid>
        </React.Fragment>
    );
}