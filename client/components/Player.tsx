import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React from 'react';
import styles from '../styles/Player.module.scss';
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';

const Player = () => {
    const track: ITrack = {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/01-End_Of_Flowers', picture: 'http://localhost:5000/image/2803118875.jpg', comments: []};
    const active = false
    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {!active
                    ? <PlayArrow/>
                    :  <Pause/>
                }
            </IconButton>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
        </div>
    );
};

export default Player;