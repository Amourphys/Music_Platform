import { Container } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

/* type MainLayoutProps = {
    children: React.ReactNode;
} */

/* const MainLayout: React.FC = (props: MainLayoutProps) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '98px 0'}}>
                 {children}
            </Container>
           
        </>
    );
}; */

const MainLayout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '98px 0'}}>
                 {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;