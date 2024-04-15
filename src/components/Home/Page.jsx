import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import Content from './components/Content'
import Login from '../Login/Login'
import { useRedux } from '@/core/redux/hooks';

const Page = () => {
  const { isAuthenticate } = useRedux();

  return (
    <Container maxWidth={false}>
      <Grid container spacing={1}>
        <Header />
        <Content />
        <Login open={isAuthenticate ? false : true} />
      </Grid>
    </Container>
  );
};

export default Page;
