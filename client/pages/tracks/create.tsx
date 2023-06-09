import { Button, Grid, TextField } from '@mui/material';
import React, { Children, useState } from 'react';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    const back = () => {
        setActiveStep(prev => prev - 1)
    }
    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
    }

    return (
       <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={'column'} style={{padding: 20}}>
                        <TextField
                            style={{marginTop: 10}}
                            label={'Track name'}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={'Artist name'}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={'Track words'}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload
                        setFile={setPicture}
                        accept='image/*'
                    >
                        <Button>Load image</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload
                        setFile={setAudio}
                        accept='audio/*'
                    >
                        <Button>Load audio</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
       </MainLayout>
    );
};

export default Create;