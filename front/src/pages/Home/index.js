import { Container, Grid } from "@mui/material";
import CardQuizz from "../../components/CardQuizz";

function Home() {
    return(
        <>
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <CardQuizz/>
            </Grid>
        </Container>
        </>
    )
}

export default Home;