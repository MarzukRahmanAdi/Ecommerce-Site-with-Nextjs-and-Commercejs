import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { NextPage } from "next";
import useStyles from "./style";

type Props = any

const CartItem: NextPage<Props> = ({item, handleUpdateCartQty, handleRemoveFromCart}) => {
    const classes = useStyles();
    return (
        <Card className="cart-item">
            <CardMedia image={item.image.url} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="h6">
                    {item.line_total.formatted_with_symbol}
                </Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button
                        type="button"
                        size="small"
                        onClick={() =>
                            handleUpdateCartQty(item.id, item.quantity - 1)
                        }
                    >
                        -
                    </Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button
                        type="button"
                        size="small"
                        onClick={() =>
                            handleUpdateCartQty(item.id, item.quantity + 1)
                        }
                    >
                        +
                    </Button>
                </div>
                <Button
                    variant="contained"
                    type="button"
                    color="secondary"
                    onClick={() => handleRemoveFromCart(item.id)}
                >
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
};

export default CartItem;
