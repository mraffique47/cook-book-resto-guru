import React, { useState } from "react";
import clsx from "clsx";
import { For } from "react-loops";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { Parser } from "html-to-react";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  active: {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },
}));

const fastFoodIcon = <FastfoodIcon></FastfoodIcon>;

const recipes = [
  {
    id: 1,
    author: "Jim",
    name: "Chicken Curry",
    date: "May 31,2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id volutpat enim, eget volutpat nunc. Quisque tristique neque nec nibh varius auctor. Curabitur imperdiet quam eget nunc pellentesque, non interdum ante aliquam. Nunc pellentesque nec arcu sit amet posuere. Etiam convallis euismod erat, id consequat mi interdum et. Ut ornare luctus ex quis ornare. Curabitur quis eros a dolor eleifend pharetra a id lacus. Maecenas lobortis erat et euismod vehicula.",
    ingredients:
      "<div>1 pound (454 grams) cooked chicken breast or rotisserie chicken, shredded (about 4 cups shredded) </br> 1/2 cup diced red onion (about 1/2 medium red onion or 60 grams)</div>",
    icon: fastFoodIcon,
    image: "https://dummyimage.com/640x360/fff/aaa",
  },
  {
    id: 2,
    author: "Aravind",
    name: "Hamburger",
    date: "May 27,2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id volutpat enim, eget volutpat nunc. Quisque tristique neque nec nibh varius auctor. Curabitur imperdiet quam eget nunc pellentesque, non interdum ante aliquam. Nunc pellentesque nec arcu sit amet posuere. Etiam convallis euismod erat, id consequat mi interdum et. Ut ornare luctus ex quis ornare. Curabitur quis eros a dolor eleifend pharetra a id lacus. Maecenas lobortis erat et euismod vehicula.",
    ingredients:
      "<div>1 pound (454 grams) cooked chicken breast or rotisserie chicken, shredded (about 4 cups shredded) </br> 1/2 cup diced red onion (about 1/2 medium red onion or 60 grams)</div>",
    icon: fastFoodIcon,
    image: "https://dummyimage.com/640x360/fff/aaa",
  },
];

const RecipeDetail = (id) => {
  var htmlToReactParser = new Parser();

  return (
    <>
      <For
        of={recipes}
        as={(item, { key }) => (
          <>
            {item.id === id || (
              <Card>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  title={item.author}
                  subheader={item.date}
                />
                <CardMedia
                  component="img"
                  alt={item.name}
                  height="240"
                  image={item.image}
                  title={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="h2">
                    Ingredients
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {htmlToReactParser.parse(item.ingredients)}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </>
        )}
      />
    </>
  );
};

export default function ReciperList() {
  const classes = useStyles();
  const [recipeInfo, setRecipeInfo] = useState();

  const handleClick = (id) => {
    setRecipeInfo(RecipeDetail(id));
  };

  return (
    <div className={clsx("App", classes.root)}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <For
          of={recipes}
          as={(item, { key }) => (
            <ListItem button onClick={() => handleClick(item.id)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.name}
                activeClassName={classes.active}
              />
            </ListItem>
          )}
        />
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          {recipeInfo}
        </Container>
      </main>
    </div>
  );
}
