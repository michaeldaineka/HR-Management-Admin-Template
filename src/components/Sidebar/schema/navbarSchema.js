import { ReactComponent as SearchIcon } from "images/icons/line/search.svg";
import { ReactComponent as CalendarIcon } from "images/icons/line/calendar.svg";
import { ReactComponent as PersonIcon } from "images/icons/line/person.svg";
import { ReactComponent as FriendsIcon } from "images/icons/line/message-circle.svg";
import { ReactComponent as FileIcon } from "images/icons/line/file.svg";

import { ReactComponent as SettingsIcon } from "images/icons/line/settings.svg";
import avatarImg from "images/avatar.svg";
import { ReactComponent as BarIcon } from "images/icons/line/bar-chart.svg";
import React from "react";

export default [
  [
    {
      icon: <SearchIcon />,
      alt: "search",
    },
    {
      icon: <CalendarIcon />,
      alt: "calendar",
    },
    {
      icon: <PersonIcon />,
      alt: "contact",
    },
    {
      icon: <FriendsIcon />,
      alt: "friends group",
    },
    {
      icon: <FileIcon />,
      alt: "file manager",
    },
  ],
  [
    {
      icon: <SettingsIcon />,
      alt: "settings",
    },
    {
      img: avatarImg,
      alt: "account",
    },
    {
      icon: <BarIcon />,
      alt: "bar",
    },
  ],
];
