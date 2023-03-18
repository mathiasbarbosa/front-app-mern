import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


export const Copyrigth = (props:any) => {
    return(
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            <Link color="inherit" href="https://github.com/mathias.barbosa">
                Mathias repo
            </Link>
            {new Date().getFullYear()}
        </Typography>
    )
}