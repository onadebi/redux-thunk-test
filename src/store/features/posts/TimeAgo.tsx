import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

interface IProps {
  date: string;
}

const TimeAgo: React.FC<IProps> = ({ date }) => {
  const timeAgo = formatDistanceToNow(parseISO(date));

  return (
    <span title={date.toString()}>
      <i>{timeAgo ? timeAgo : "unspecified"} ago</i>
    </span>
  );
};

export default TimeAgo;
