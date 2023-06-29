import React from "react";
import { Box, Text, useMantineTheme } from "@mantine/core";
import { IconUpload, IconEdit } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { styles } from "./styles";

type IProps = {
  image: any;
  setImage: any;
  name: string;
  form: any;
  maxMb?: number;
  disabled?: boolean;
  onChange?: any;
};

const UploadImage: React.FC<IProps> = ({
  image,
  setImage,
  name,
  form,
  maxMb = 5,
  disabled = false,
  onChange,
}) => {
  const theme = useMantineTheme();
  const error = form.errors[name];
  const classes = styles(disabled, error);

  const handleFile = (event: any) => {
    const file = event.target.files[0];
    const maxAllowedSize = maxMb * 1024 * 1024;
    if (file.size > maxAllowedSize) {
      notifications.show({
        message: `Image can not extend ${maxMb} mb`,
      });
      return;
    }

    form.setFieldValue(name, file);
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => setImage([reader.result]);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Box sx={classes.flex}>
      <Box sx={classes.center} component="label">
        {handleFile && !disabled && (
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/heif"
            hidden
            key={image}
            onChange={(e: any) => handleFile(e)}
            disabled={disabled}
          />
        )}
        {image ? (
          <Box sx={classes.imageBox}>
            <Box sx={classes.imageOverlay}>
              <img
                src={image}
                alt="uploaded"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            {!disabled && (
              <Box sx={classes.editIcon}>
                <IconEdit color={theme.colors.brand[5]} size={30} />
              </Box>
            )}
          </Box>
        ) : (
          <IconUpload color={theme.colors.brand[5]} size={30} />
        )}
      </Box>
      <Text mt={5} fz="xs" sx={{ textAlign: "center" }} color="red">
        {error}
      </Text>
    </Box>
  );
};

export default UploadImage;
