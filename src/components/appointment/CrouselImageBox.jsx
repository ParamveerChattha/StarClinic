import { Box } from "@mui/material";

export const CrouselImageBox = ({step}) => < Box
                component="img"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  width: "45rem",
                  height: "38rem",
                }}
                src={step.imgPath}
                alt={step.label}
              />