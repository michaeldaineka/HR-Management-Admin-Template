import React from "react";
import { ReactComponent as DashboardIcon } from "images/icons/line/browser.svg";
import { ReactComponent as PeopleIcon } from "images/icons/line/people.svg";
import { ReactComponent as DepartmentsIcon } from "images/icons/line/clipboard.svg";
import { ReactComponent as ActivitiesIcon } from "images/icons/line/flash.svg";
import { ReactComponent as HolidaysIcon } from "images/icons/line/checkmark-circle-2.svg";
import { ReactComponent as EventsIcon } from "images/icons/line/fire.svg";
import { ReactComponent as PayrollIcon } from "images/icons/line/credit-card.svg";
import { ReactComponent as AccountsIcon } from "images/icons/line/person.svg";
import { ReactComponent as ReportIcon } from "images/icons/line/alert-circle.svg";

export default [
  {
    icon: <DashboardIcon />,
    alt: "Dashboard",
    link: "/",
  },
  {
    icon: <PeopleIcon />,
    alt: "People",
    link: "/people",
  },
  {
    icon: <DepartmentsIcon />,
    alt: "Departments",
    link: "/departments",
  },
  {
    icon: <PeopleIcon />,
    alt: "Employee",
    link: "/employee",
  },
  {
    icon: <ActivitiesIcon />,
    alt: "Activities",
    link: "/activities",
  },
  {
    icon: <HolidaysIcon />,
    alt: "Holidays",
    link: "/holidays",
  },
  {
    icon: <EventsIcon />,
    alt: "Events",
    link: "/events",
  },
  {
    icon: <PayrollIcon />,
    alt: "Payroll",
    link: "/payroll",
  },
  {
    icon: <AccountsIcon />,
    alt: "Accounts",
    link: "/AccountsIcon",
  },
  {
    icon: <ReportIcon />,
    alt: "Report",
    link: "/report",
  },
];
