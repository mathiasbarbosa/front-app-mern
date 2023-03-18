import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { Copyrigth } from './CopyRigth'

export const StickyFooter = () => {

    return(
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'column'
            }
        }>
            <CssBaseline />
            <Box component='footer' sx={
                {
                    py: 3,
                    px: 2,
                    mt: 'auto',
                      // backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey(200) : theme.palette.grey(800) 
                }
            }>
                <Container maxWidth='sm'>
                    <Copyrigth sx={
                        {
                            pt:4
                        }
                    }>

                    </Copyrigth>
                </Container>

            </Box>
        </Box>
    )
}