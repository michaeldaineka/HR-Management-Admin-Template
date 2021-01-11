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
      alt: "Search",
      link: '/search'
    },
    {
      icon: <CalendarIcon />,
      alt: "Calendar",
      link: '/calendar'
    },
    {
      icon: <PersonIcon />,
      alt: "Contact",
      link: '/contact'
    },
    {
      icon: <FriendsIcon />,
      alt: "Friends Group",
      link: '/friends'
    },
    {
      icon: <FileIcon />,
      alt: "File Manager",
      link: '/files'
    },
  ],
  [
    {
      icon: <SettingsIcon />,
      alt: "Settings",
    },
    {
      img: avatarImg,
      alt: "Account",
    },
    {
      icon: <BarIcon />,
      alt: "Bar",
    },
  ],
];
