import { Button, Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/01-End_Of_Flowers', picture: 'http://localhost:5000/image/2803118875.jpg', comments: []},
        {_id: '2', name: 'Track 2', artist: 'Artist 1', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/1ce04f41-e94c-49d3-8edf-da4865be12a7', picture: 'http://localhost:5000/image/8f328ec5-e18b-4225-971c-965929347e4b.jpg', comments: []},
        {_id: '3', name: 'Track 3', artist: 'Artist 1', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/06-Chemicals', picture: 'http://localhost:5000/image/1552205177298996495.jpg', comments: []},
        {_id: '4', name: 'Track 4', artist: 'Artist 1', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/07-Retaliation', picture: 'http://localhost:5000/image/l_a7237a52.jpg', comments: []},
        {_id: '5', name: 'Track 5', artist: 'Artist 1', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/09-Wild', picture: 'http://localhost:5000/image/original(4).jpg', comments: []},
    ]
    return (
            <MainLayout>
                <Grid container justifyContent='center'>
                    <Card style={{width: 900}}>
                        <Box p={3}>
                            <Grid container justifyContent='space-between'>
                                <h1>Track list</h1>
                                <Button onClick={() => router.push('/tracks/create')}>
                                    Load
                                </Button>
                            </Grid>
                        </Box>
                        <TrackList tracks={tracks}/>
                    </Card>
                </Grid>
            </MainLayout>
    );
};

export default index;