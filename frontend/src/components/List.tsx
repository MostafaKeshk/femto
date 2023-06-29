import { Grid, Loader, Box, Pagination, Text } from "@mantine/core";
import React from "react";
import { paginate } from "../utils/paginate";

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
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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
        <Text>No {name} were found</Text>
      </Box>
    );
  return (
    <Box>
      <Grid>
        {list &&
          list.map((li: any, index: number) => (
            <Grid.Col key={index} span={4}>
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
