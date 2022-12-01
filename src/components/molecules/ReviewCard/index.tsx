import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  styled,
  Typography,
} from "@mui/material";

const StyledCard = styled(Card)({
  minHeight: "10.75em",
  width: "23.875em",
  borderRadius: "0.5em",
  boxShadow: "none",
});

const StyledAddress = styled(Typography)({
  display: "block",
});

const StyledCardContent = styled(CardContent)({
  marginLeft: "3em",
  marginTop: "-1.5em",
});

interface ReviewCardProps {
  avatar: string;
  name: string;
  address: string;
  review: string;
}

const ReviewCard = ({ avatar, name, address, review }: ReviewCardProps) => {
  return (
    <StyledCard>
      <CardHeader
        avatar={<Avatar src={avatar} alt="Avatar" data-testid="avatar" />}
        title={
          <Typography
            variant="caption2"
            color="text.secondary"
            data-testid="name"
          >
            {name}
          </Typography>
        }
        subheader={
          <StyledAddress
            variant="overline2"
            color="text.disabled"
            data-testid="address"
          >
            {address}
          </StyledAddress>
        }
      />
      <StyledCardContent>
        <Typography
          variant="captionRegular"
          color="text.secondary"
          data-testid="review"
        >
          {review}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ReviewCard;
