import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const TrackPage = () => {
    const track: ITrack = {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/01-End_Of_Flowers', picture: 'http://localhost:5000/image/2803118875.jpg', comments: []};
    const router = useRouter();

    return (
       <MainLayout>
            <Button
                variant={'outlined'}
                style={{fontSize: 32}} 
                onClick={() => router.push('/tracks')}
            >
                To the Tracklist
            </Button>
            <Grid container>
                <img src={track.picture} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h1>Track name - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Listens - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Tracks words</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField
                    label='Your name'
                    fullWidth 
                />
                <TextField
                    label='Comment'
                    fullWidth
                    multiline
                    rows={4} 
                />
                <Button>Send</Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
                    <div>
                        <div>Author - {comment.username}</div>
                        <div>Comment - {comment.text}</div>
                    </div>    
                )}
            </div>
       </MainLayout>
    );
};

export default TrackPage;