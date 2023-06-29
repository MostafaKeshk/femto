import React from "react";
import { Box, Text } from "@mantine/core";
import { Upload, Edit } from "tabler-icons-react";
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
  const error = form.errors[name];
  const classes = styles(disabled);

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
                <Edit style={{ color: "black" }} />
              </Box>
            )}
          </Box>
        ) : (
          <Upload style={{ fontSize: "40px", color: "black" }} />
        )}
      </Box>
      <Text sx={{ textAlign: "center" }}>{error}</Text>
    </Box>
  );
};

export default UploadImage;
