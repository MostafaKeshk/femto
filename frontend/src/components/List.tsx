import { Grid, Loader, Box, Pagination, Text, CSSObject } from "@mantine/core";
import React from "react";
import { paginate } from "../utils/paginate";
import EmptySvg from "../assets/EmptySvg";

type IProps = {
  name: string;
  list: any[];
  Card: React.ReactElement<any>;
  loading: boolean;
  count: number;
  page: number;
  handleChangePage: any;
};

const classes = {
  container: {
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  } as CSSObject,
};

const List: React.FC<IProps> = ({
  name,
  list,
  Card,
  loading,
  count,
  page,
  handleChangePage,
}) => {
  if (loading)
    return (
      <Box sx={classes.container}>
        <Loader />
      </Box>
    );
  if (count === 0)
    return (
      <Box sx={classes.container}>
        <EmptySvg />
        <Text color="brand" weight="bold" mt="xs">
          No {name} were found
        </Text>
      </Box>
    );
  return (
    <Box sx={{ width: "100%", minHeight: "400px" }} mt="xs">
      <Grid>
        {list &&
          list.map((li: any, index: number) => (
            <Grid.Col key={index} xs={12} md={6} lg={4}>
              {React.cloneElement(Card, { data: li })}
            </Grid.Col>
          ))}
      </Grid>
      {count > 6 && (
        <Pagination
          mt="sm"
          total={paginate(count, 6)}
          value={page}
          onChange={handleChangePage}
        />
      )}
    </Box>
  );
};

export default List;
